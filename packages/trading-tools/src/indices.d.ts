/**
 * Index AI Tools
 *
 * Index discovery (CBOE, keyless). Constituents/historical stay on the
 * generic market surfaces; this is the "what index families exist" lens —
 * VIX variants, sector vol indices, SOFR-rate indices, etc.
 */
import type { IndexClientLike } from '@openalice-trading/alice-core/domain/market-data/client/types.js';
export declare function createIndexTools(indexClient: IndexClientLike): {
    indexSearch: import("ai").Tool<{
        query: string;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
};
