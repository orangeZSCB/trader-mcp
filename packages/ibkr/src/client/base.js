/**
 * EClient base class — connection management, handshake, sendMsg.
 * Mirrors: ibapi/client.py (lines 286-626)
 *
 * Request methods are added via mixins in sibling files.
 */
import { makeMsg, makeMsgProto, makeField, makeInitialMsg, readMsg, readFields } from '../comm.js';
import { Connection } from '../connection.js';
import { EReader } from '../reader.js';
import { Decoder, applyAllHandlers } from '../decoder/index.js';
import { OUT } from '../message.js';
import { MIN_CLIENT_VER, MAX_CLIENT_VER, MIN_SERVER_VER_OPTIONAL_CAPABILITIES, MIN_SERVER_VER_PROTOBUF, } from '../server-versions.js';
import { NO_VALID_ID } from '../const.js';
import { PROTOBUF_MSG_IDS } from '../common.js';
import * as errors from '../errors.js';
import { ClientException, isAsciiPrintable, currentTimeMillis } from '../utils.js';
export class EClient {
    static DISCONNECTED = 0;
    static CONNECTING = 1;
    static CONNECTED = 2;
    wrapper;
    decoder = null;
    conn = null;
    host = null;
    port = null;
    extraAuth = false;
    clientId = null;
    serverVersion_ = null;
    connTime = null;
    connState = EClient.DISCONNECTED;
    optCapab = null;
    reader = null;
    connectOptions = null;
    constructor(wrapper) {
        this.wrapper = wrapper;
    }
    reset() {
        this.conn = null;
        this.host = null;
        this.port = null;
        this.extraAuth = false;
        this.clientId = null;
        this.serverVersion_ = null;
        this.connTime = null;
        this.optCapab = null;
        this.reader = null;
        this.setConnState(EClient.DISCONNECTED);
        this.connectOptions = null;
    }
    setConnState(connState) {
        this.connState = connState;
    }
    sendMsg(msgId, msg) {
        const useRawIntMsgId = this.serverVersion() >= MIN_SERVER_VER_PROTOBUF;
        const fullMsg = makeMsg(msgId, useRawIntMsgId, msg);
        this.conn.sendMsg(fullMsg);
    }
    sendMsgProtoBuf(msgId, msg) {
        const fullMsg = makeMsgProto(msgId, msg);
        this.conn.sendMsg(fullMsg);
    }
    checkConnected() {
        if (this.isConnected()) {
            throw new ClientException(errors.ALREADY_CONNECTED.code(), errors.ALREADY_CONNECTED.msg(), '');
        }
    }
    useProtoBuf(msgId) {
        const unifiedVersion = PROTOBUF_MSG_IDS[msgId];
        return unifiedVersion !== undefined && unifiedVersion <= this.serverVersion();
    }
    serverVersion() {
        return this.serverVersion_ ?? 0;
    }
    twsConnectionTime() {
        return this.connTime;
    }
    isConnected() {
        const connConnected = this.conn?.isConnected() ?? false;
        return this.connState === EClient.CONNECTED && connConnected;
    }
    setConnectOptions(opts) {
        this.connectOptions = opts;
    }
    setOptionalCapabilities(optCapab) {
        this.optCapab = optCapab;
    }
    // ── Connect / Disconnect ────────────────────────────────────────────
    async connect(host, port, clientId) {
        try {
            this.validateInvalidSymbols(host);
        }
        catch (ex) {
            this.wrapper.error(NO_VALID_ID, currentTimeMillis(), ex.code, ex.msg + ex.text);
            return;
        }
        try {
            this.checkConnected();
        }
        catch (ex) {
            this.wrapper.error(NO_VALID_ID, currentTimeMillis(), ex.code, ex.msg);
            return;
        }
        try {
            this.host = host;
            this.port = port;
            this.clientId = clientId;
            this.conn = new Connection(this.host, this.port);
            this.conn.wrapper = this.wrapper;
            await this.conn.connect();
            this.setConnState(EClient.CONNECTING);
            // Send handshake: "API\0" + version range
            const v100prefix = 'API\0';
            let v100version = `v${MIN_CLIENT_VER}..${MAX_CLIENT_VER}`;
            if (this.connectOptions) {
                v100version = v100version + ' ' + this.connectOptions;
            }
            const msg = makeInitialMsg(v100version);
            const msg2 = Buffer.concat([Buffer.from(v100prefix, 'ascii'), msg]);
            this.conn.sendMsg(msg2);
            // Wait for server version response
            const { serverVersion, connTime } = await this.waitForHandshake();
            this.serverVersion_ = serverVersion;
            this.connTime = connTime;
            this.decoder = new Decoder(this.wrapper, this.serverVersion());
            applyAllHandlers(this.decoder);
            this.setConnState(EClient.CONNECTED);
            // Start reader
            this.reader = new EReader(this.conn, (msgBuf) => {
                this.onMessage(msgBuf);
            });
            this.reader.start();
            // Send startApi
            this.startApi();
            this.wrapper.connectAck();
        }
        catch {
            if (this.wrapper) {
                this.wrapper.error(NO_VALID_ID, currentTimeMillis(), errors.CONNECT_FAIL.code(), errors.CONNECT_FAIL.msg());
            }
            this.disconnect();
        }
    }
    disconnect() {
        this.setConnState(EClient.DISCONNECTED);
        if (this.conn !== null) {
            this.conn.disconnect();
            this.wrapper.connectionClosed();
            this.reset();
        }
    }
    // ── StartApi ────────────────────────────────────────────────────────
    startApi() {
        if (!this.isConnected()) {
            this.wrapper.error(NO_VALID_ID, currentTimeMillis(), errors.NOT_CONNECTED.code(), errors.NOT_CONNECTED.msg());
            return;
        }
        try {
            const VERSION = 2;
            let msg = makeField(VERSION) + makeField(this.clientId);
            if (this.serverVersion() >= MIN_SERVER_VER_OPTIONAL_CAPABILITIES) {
                msg += makeField(this.optCapab ?? '');
            }
            this.sendMsg(OUT.START_API, msg);
        }
        catch (ex) {
            this.wrapper.error(NO_VALID_ID, currentTimeMillis(), errors.FAIL_SEND_STARTAPI.code(), errors.FAIL_SEND_STARTAPI.msg() + String(ex));
        }
    }
    // ── Internal helpers ────────────────────────────────────────────────
    /** Check that the connection is live; if not, report error and return false. */
    requireConnected(reqId = NO_VALID_ID) {
        if (!this.isConnected()) {
            this.wrapper.error(reqId, currentTimeMillis(), errors.NOT_CONNECTED.code(), errors.NOT_CONNECTED.msg());
            return false;
        }
        return true;
    }
    validateInvalidSymbols(host) {
        if (host && !isAsciiPrintable(host)) {
            throw new ClientException(errors.INVALID_SYMBOL.code(), errors.INVALID_SYMBOL.msg(), host);
        }
        if (this.connectOptions && !isAsciiPrintable(this.connectOptions)) {
            throw new ClientException(errors.INVALID_SYMBOL.code(), errors.INVALID_SYMBOL.msg(), this.connectOptions);
        }
        if (this.optCapab && !isAsciiPrintable(this.optCapab)) {
            throw new ClientException(errors.INVALID_SYMBOL.code(), errors.INVALID_SYMBOL.msg(), this.optCapab);
        }
    }
    /**
     * Process a single framed message from the reader.
     * Mirrors: ibapi/client.py run() lines 595-611
     *
     * Server v201+: 4-byte big-endian binary msgId prefix.
     * If msgId > PROTOBUF_MSG_ID (200) → protobuf (subtract 200 for real msgId).
     * Otherwise → text with \0-delimited fields.
     *
     * Server < 201: text msgId is first \0-delimited field.
     */
    onMessage(msgBuf) {
        if (!this.decoder)
            return;
        const PROTOBUF_MSG_ID = 200;
        let msgId;
        let payload;
        if (this.serverVersion() >= MIN_SERVER_VER_PROTOBUF) {
            // v201+: first 4 bytes are binary msgId
            msgId = msgBuf.readUInt32BE(0);
            payload = msgBuf.subarray(4);
        }
        else {
            // Legacy: first \0-delimited field is the text msgId
            const nullIdx = msgBuf.indexOf(0);
            if (nullIdx < 0)
                return;
            msgId = parseInt(msgBuf.subarray(0, nullIdx).toString('utf-8'), 10);
            payload = msgBuf.subarray(nullIdx + 1);
        }
        if (msgId > PROTOBUF_MSG_ID) {
            // Protobuf message
            msgId -= PROTOBUF_MSG_ID;
            this.decoder.processProtoBuf(payload, msgId);
        }
        else {
            // Text message — split into fields and dispatch
            const fields = readFields(payload);
            this.decoder.interpret(fields, msgId);
        }
    }
    waitForHandshake() {
        return new Promise((resolve, reject) => {
            let buf = Buffer.alloc(0);
            const onData = () => {
                const incoming = this.conn.consumeBuffer();
                if (incoming.length === 0)
                    return;
                buf = Buffer.concat([buf, incoming]);
                const [size, msg, rest] = readMsg(buf);
                if (msg.length > 0) {
                    buf = rest;
                    const fields = readFields(msg);
                    if (fields.length >= 2) {
                        clearTimeout(timer);
                        this.conn.removeListener('data', onData);
                        resolve({
                            serverVersion: parseInt(fields[0], 10),
                            connTime: fields[1],
                        });
                    }
                }
            };
            this.conn.on('data', onData);
            // Timeout after 10 seconds
            const timer = setTimeout(() => {
                this.conn?.removeListener('data', onData);
                reject(new Error('Handshake timeout'));
            }, 10000);
        });
    }
}
//# sourceMappingURL=base.js.map