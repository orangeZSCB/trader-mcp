/**
 * Board reads for agents — the same reference boards the UI renders
 * (hub-first with local fallback), as one MCP tool. Before this, agents
 * could only compose board-grade views from primitives; now
 * `marketGetBoard` / `traderhub board get` serves the finished product.
 */
import type { ReferenceDataService } from '@openalice-trading/alice-core/domain/market-data/reference/types.js';
export declare function createReferenceBoardTools(reference: ReferenceDataService): {
    marketGetBoard: import("ai").Tool<{
        board: "movers" | "calendar" | "macro" | "valuation" | "term-structure" | "global-macro" | "shipping" | "fed";
        days?: number | undefined;
    }, import("@openalice-trading/alice-core/domain/market-data/reference/term-structure.js").TermStructureBoard | import("@openalice-trading/alice-core/domain/market-data/reference/valuation.js").ValuationStrip | import("@openalice-trading/alice-core/domain/market-data/reference/global-macro.js").GlobalMacroBoard | import("@openalice-trading/alice-core/domain/market-data/reference/shipping.js").ShippingBoard | import("@openalice-trading/alice-core/domain/market-data/reference/types.js").MoversBoard | import("@openalice-trading/alice-core/domain/market-data/reference/types.js").CalendarBoard>;
};
