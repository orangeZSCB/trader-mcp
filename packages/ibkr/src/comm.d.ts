/**
 * Low-level IB message framing — encode/decode with length prefix.
 * Mirrors: ibapi/comm.py
 */
/**
 * Wrap protobuf data with 4-byte big-endian length prefix and msgId.
 * Wire format: [4-byte total length][4-byte msgId BE][protobuf bytes]
 */
export declare function makeMsgProto(msgId: number, protobufData: Buffer): Buffer;
/**
 * Wrap text message with 4-byte length prefix.
 * If useRawIntMsgId, msgId is sent as 4-byte BE int before text.
 * Otherwise msgId is sent as a NULL-terminated text field.
 */
export declare function makeMsg(msgId: number, useRawIntMsgId: boolean, text: string): Buffer;
/**
 * Wrap initial handshake text with length prefix.
 */
export declare function makeInitialMsg(text: string): Buffer;
/**
 * Encode a value as a NULL-terminated string field.
 */
export declare function makeField(val: unknown): string;
/**
 * Like makeField but handles UNSET/INFINITY sentinel values.
 */
export declare function makeFieldHandleEmpty(val: unknown): string;
/**
 * Read a length-prefixed message from a buffer.
 * Returns [size, msg, remainingBuf].
 * If incomplete, msg is empty Buffer.
 */
export declare function readMsg(buf: Buffer): [number, Buffer, Buffer];
/**
 * Split a message payload into NULL-separated fields.
 */
export declare function readFields(buf: Buffer): string[];
