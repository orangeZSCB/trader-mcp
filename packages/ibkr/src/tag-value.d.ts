/**
 * Simple tag-value pair used for algo parameters and misc options.
 * Mirrors: ibapi/tag_value.py
 */
export declare class TagValue {
    tag: string;
    value: string;
    constructor(tag?: string, value?: string);
    toString(): string;
}
export type TagValueList = TagValue[] | null;
