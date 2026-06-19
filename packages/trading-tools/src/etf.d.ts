/**
 * ETF AI Tools
 *
 * etfSearch / etfGetInfo / etfGetHoldings / etfGetSectors:
 *   thin bridge to the openTypeBB etf-router endpoints. Lets the agent
 *   self-serve thematic ETFs — find a theme's ETF, then read whether the
 *   theme actually attracted capital (the reflexivity read; see etfGetInfo).
 *
 * Provider note: ETF search is FMP-only; ETF info is served by yfinance
 * (keyless) which also carries the reflexivity fields (total_assets /
 * category / inception_date / volume_avg). Holdings/sectors prefer FMP
 * (full holdings list) and FALL BACK to yfinance keylessly — top-10
 * holdings + full sector weights via quoteSummary — so an FMP outage or
 * missing key degrades instead of going dark.
 */
import type { EtfClientLike } from '@openalice-trading/alice-core/domain/market-data/client/types.js';
export declare function createEtfTools(etfClient: EtfClientLike): {
    etfSearch: import("ai").Tool<{
        query: string;
        limit?: number | undefined;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    etfGetInfo: import("ai").Tool<{
        symbol: string;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        issuer: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        domicile: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        website: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        description: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        inception_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">>;
    etfGetHoldings: import("ai").Tool<{
        symbol: string;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    etfGetSectors: import("ai").Tool<{
        symbol: string;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        sector: import("zod").ZodString;
        weight: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
};
