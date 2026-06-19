/**
 * Broker types — IBroker interface and associated data types.
 *
 * All broker implementations (Alpaca, CCXT, IBKR, ...) implement IBroker.
 * Order/Contract/Execution/OrderState come directly from @traderalice/ibkr.
 * Only types that IBKR doesn't define (Position, AccountInfo, Quote, etc.)
 * are defined here, with field names aligned to IBKR conventions.
 */
import './contract-ext.js';
/**
 * Structured broker error.
 * - `permanent` errors (CONFIG, AUTH) disable the account — will not be retried.
 * - Transient errors (NETWORK, EXCHANGE, MARKET_CLOSED) trigger auto-recovery.
 */
export class BrokerError extends Error {
    code;
    permanent;
    constructor(code, message) {
        super(message);
        this.name = 'BrokerError';
        this.code = code;
        this.permanent = code === 'CONFIG' || code === 'AUTH';
    }
    /** Wrap any error as a BrokerError, classifying by message patterns. */
    static from(err, fallbackCode = 'UNKNOWN') {
        if (err instanceof BrokerError)
            return err;
        const msg = err instanceof Error ? err.message : String(err);
        const code = BrokerError.classifyMessage(msg) ?? fallbackCode;
        const be = new BrokerError(code, msg);
        if (err instanceof Error)
            be.cause = err;
        return be;
    }
    /** Infer error code from common message patterns. */
    static classifyMessage(msg) {
        const m = msg.toLowerCase();
        // Market closed — check before AUTH to avoid 403 misclassification
        if (/market.?closed|not.?open|trading.?halt|outside.?trading.?hours/i.test(m))
            return 'MARKET_CLOSED';
        // Network / infrastructure
        if (/timeout|etimedout|econnrefused|econnreset|socket hang up|enotfound|fetch failed/i.test(m))
            return 'NETWORK';
        if (/429|rate.?limit|too many requests/i.test(m))
            return 'NETWORK';
        if (/502|503|504|service.?unavailable|bad.?gateway/i.test(m))
            return 'NETWORK';
        // Authentication (401 only — 403 can mean market closed or permission denied)
        if (/401|unauthorized|invalid.?key|invalid.?signature|authentication/i.test(m))
            return 'AUTH';
        // Exchange-level rejections
        if (/403|forbidden/i.test(m))
            return 'EXCHANGE';
        if (/insufficient|not.?enough|margin/i.test(m))
            return 'EXCHANGE';
        return null;
    }
}
//# sourceMappingURL=broker.js.map