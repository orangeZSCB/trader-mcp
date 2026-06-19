/**
 * Decoder base — class skeleton, dispatch tables, interpret/processProtoBuf.
 *
 * Actual handler methods are registered by sibling modules (market-data, orders, etc.)
 * via the register* helpers exported here.
 */
import type { EWrapper } from '../wrapper.js';
export type TextHandler = (decoder: Decoder, fields: Iterator<string>) => void;
export type ProtoHandler = (decoder: Decoder, buf: Buffer) => void;
export declare class Decoder {
    wrapper: EWrapper;
    serverVersion: number;
    private readonly msgId2textHandler;
    private readonly msgId2protoHandler;
    constructor(wrapper: EWrapper, serverVersion: number);
    /** Register a text-protocol handler for a given IN message id. */
    registerText(msgId: number, handler: TextHandler): void;
    /** Register a protobuf handler for a given IN message id. */
    registerProto(msgId: number, handler: ProtoHandler): void;
    /**
     * Dispatch a text-protocol message.
     * Mirrors: ibapi/decoder.py interpret()
     */
    interpret(fields: string[], msgId?: number): void;
    /**
     * Dispatch a protobuf-encoded message.
     * Mirrors: ibapi/decoder.py processProtoBuf()
     */
    processProtoBuf(protoBuf: Buffer, msgId: number): void;
}
