/**
 * Message reader — consumes incoming socket data and extracts framed messages.
 * Mirrors: ibapi/reader.py
 *
 * Node.js adaptation: Python uses a background thread + queue. Here we use
 * socket 'data' events → buffer accumulation → message extraction → callback.
 * No threads, no queue.
 */
import type { Connection } from './connection.js';
export declare class EReader {
    private conn;
    private buf;
    private onMessage;
    constructor(conn: Connection, onMessage: (msg: Buffer) => void);
    /**
     * Start listening for incoming data.
     */
    start(): void;
    /**
     * Process accumulated socket data, extracting complete messages.
     */
    private processData;
}
