/**
 * EClient base class — connection management, handshake, sendMsg.
 * Mirrors: ibapi/client.py (lines 286-626)
 *
 * Request methods are added via mixins in sibling files.
 */
import { Connection } from '../connection.js';
import { EReader } from '../reader.js';
import { Decoder } from '../decoder/index.js';
import type { EWrapper } from '../wrapper.js';
export declare class EClient {
    static readonly DISCONNECTED = 0;
    static readonly CONNECTING = 1;
    static readonly CONNECTED = 2;
    wrapper: EWrapper;
    decoder: Decoder | null;
    conn: Connection | null;
    host: string | null;
    port: number | null;
    extraAuth: boolean;
    clientId: number | null;
    serverVersion_: number | null;
    connTime: string | null;
    connState: number;
    optCapab: string | null;
    reader: EReader | null;
    connectOptions: string | null;
    constructor(wrapper: EWrapper);
    reset(): void;
    setConnState(connState: number): void;
    sendMsg(msgId: number, msg: string): void;
    sendMsgProtoBuf(msgId: number, msg: Buffer): void;
    checkConnected(): void;
    useProtoBuf(msgId: number): boolean;
    serverVersion(): number;
    twsConnectionTime(): string | null;
    isConnected(): boolean;
    setConnectOptions(opts: string): void;
    setOptionalCapabilities(optCapab: string): void;
    connect(host: string, port: number, clientId: number): Promise<void>;
    disconnect(): void;
    startApi(): void;
    /** Check that the connection is live; if not, report error and return false. */
    protected requireConnected(reqId?: number): boolean;
    private validateInvalidSymbols;
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
    private onMessage;
    private waitForHandshake;
}
