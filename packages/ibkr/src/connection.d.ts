/**
 * Thin wrapper around a TCP socket for TWS API communication.
 * Mirrors: ibapi/connection.py
 *
 * Node.js adaptation: no threading.Lock needed (single-threaded event loop).
 * Python's blocking recv with timeout → Node's event-driven socket.
 */
import net from 'node:net';
import { EventEmitter } from 'node:events';
export interface ConnectionWrapper {
    error(reqId: number, errorTime: number, errorCode: number, errorString: string, advancedOrderRejectJson?: string): void;
    connectionClosed(): void;
}
export declare class Connection extends EventEmitter {
    host: string;
    port: number;
    socket: net.Socket | null;
    wrapper: ConnectionWrapper | null;
    private _buffer;
    constructor(host: string, port: number);
    connect(): Promise<void>;
    disconnect(): void;
    isConnected(): boolean;
    sendMsg(msg: Buffer): boolean;
    /**
     * Consume buffered data. Returns current buffer and resets it.
     * Used by the reader to get accumulated socket data.
     */
    consumeBuffer(): Buffer;
}
