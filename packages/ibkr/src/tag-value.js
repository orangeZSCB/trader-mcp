/**
 * Simple tag-value pair used for algo parameters and misc options.
 * Mirrors: ibapi/tag_value.py
 */
export class TagValue {
    tag;
    value;
    constructor(tag, value) {
        this.tag = String(tag ?? '');
        this.value = String(value ?? '');
    }
    toString() {
        // Wire format — do not change lightly!
        return `${this.tag}=${this.value};`;
    }
}
//# sourceMappingURL=tag-value.js.map