import { getOperationSymbol } from '../git/types.js';
export class SymbolWhitelistGuard {
    name = 'symbol-whitelist';
    allowed;
    constructor(options) {
        const symbols = options.symbols;
        if (!symbols || symbols.length === 0) {
            throw new Error('symbol-whitelist guard requires a non-empty "symbols" array in options');
        }
        this.allowed = new Set(symbols);
    }
    check(ctx) {
        const symbol = getOperationSymbol(ctx.operation);
        if (symbol === 'unknown')
            return null;
        if (!this.allowed.has(symbol)) {
            return `Symbol ${symbol} is not in the allowed list`;
        }
        return null;
    }
}
//# sourceMappingURL=symbol-whitelist.js.map