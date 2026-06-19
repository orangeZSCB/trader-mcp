/**
 * Ineligibility reason for order preview.
 * Mirrors: ibapi/ineligibility_reason.py
 */
export class IneligibilityReason {
    id;
    description;
    constructor(id, description) {
        this.id = String(id ?? '');
        this.description = String(description ?? '');
    }
    toString() {
        return `[id: ${this.id}, description: ${this.description}];`;
    }
}
//# sourceMappingURL=ineligibility-reason.js.map