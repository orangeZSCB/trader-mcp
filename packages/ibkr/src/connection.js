/**
 * Thin wrapper around a TCP socket for TWS API communication.
 * Mirrors: ibapi/connection.py
 *
 * Node.js adaptation: no threading.Lock needed (single-threaded event loop).
 * Python's blocking recv with timeout → Node's event-driven socket.
 */
import net from 'node:net';
import { EventEmitter } from 'node:events';
import { NO_VALID_ID } from './const.js';
import { FAIL_CREATE_SOCK, CONNECT_FAIL } from './errors.js';
import { currentTimeMillis } from './utils.js';
export class Connection extends EventEmitter {
    host;
    port;
    socket = null;
    wrapper = null;
    _buffer = Buffer.alloc(0);
    constructor(host, port) {
        super();
        this.host = host;
        this.port = port;
    }
    connect() {
        return new Promise((resolve, reject) => {
            try {
                this.socket = new net.Socket();
            }
            catch {
                if (this.wrapper) {
                    this.wrapper.error(NO_VALID_ID, currentTimeMillis(), FAIL_CREATE_SOCK.code(), FAIL_CREATE_SOCK.msg());
                }
                return reject(new Error(FAIL_CREATE_SOCK.msg()));
            }
            this.socket.on('data', (data) => {
                this._buffer = Buffer.concat([this._buffer, data]);
                this.emit('data');
            });
            this.socket.on('close', () => {
                // Guard: if socket is already null, disconnect() already handled cleanup.
                // Without this check, connectionClosed() would be called twice when
                // disconnect() is invoked (once by disconnect, once by the close event).
                if (this.socket === null)
                    return;
                this.socket = null;
                if (this.wrapper) {
                    this.wrapper.connectionClosed();
                }
            });
            // Python equivalent: recvMsg() catches socket.error → calls self.disconnect().
            // We do the same — disconnect the socket so the 'close' path or the direct
            // disconnect() call triggers wrapper.connectionClosed(), which lets upper
            // layers (UTA health tracking) handle the failure gracefully.
            //
            // DO NOT emit('error') here — no listener exists in the call chain, and
            // Node's EventEmitter crashes the process on unhandled 'error' events.
            this.socket.on('error', () => {
                this.disconnect();
            });
            this.socket.connect(this.port, this.host, () => {
                resolve();
            });
            this.socket.once('error', (err) => {
                if (this.wrapper) {
                    this.wrapper.error(NO_VALID_ID, currentTimeMillis(), CONNECT_FAIL.code(), CONNECT_FAIL.msg());
                }
                reject(err);
            });
        });
    }
    disconnect() {
        if (this.socket !== null) {
            const s = this.socket;
            this.socket = null; // Set null BEFORE destroy — the 'close' event
            s.destroy(); // handler checks this to avoid double-calling
            if (this.wrapper) { // wrapper.connectionClosed().
                this.wrapper.connectionClosed();
            }
        }
    }
    isConnected() {
        return this.socket !== null;
    }
    sendMsg(msg) {
        if (!this.isConnected() || !this.socket) {
            return false;
        }
        return this.socket.write(msg);
    }
    /**
     * Consume buffered data. Returns current buffer and resets it.
     * Used by the reader to get accumulated socket data.
     */
    consumeBuffer() {
        const buf = this._buffer;
        this._buffer = Buffer.alloc(0);
        return buf;
    }
}
//# sourceMappingURL=connection.js.map