/**
 * Soft dollar tier definition.
 * Mirrors: ibapi/softdollartier.py
 */
export class SoftDollarTier {
    name;
    val;
    displayName;
    constructor(name = '', val = '', displayName = '') {
        this.name = name;
        this.val = val;
        this.displayName = displayName;
    }
    toString() {
        return `Name: ${this.name}, Value: ${this.val}, DisplayName: ${this.displayName}`;
    }
}
//# sourceMappingURL=softdollartier.js.map