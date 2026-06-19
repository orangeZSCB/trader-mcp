/**
 * Fuzzy ranking for broker catalog entries.
 *
 * Brokers that expose their full catalog (Alpaca via /v2/assets, every CCXT
 * exchange via loadMarkets, Mock via a hardcoded list) implement
 * `searchContracts` as "score each cached entry against the query, sort by
 * score, return the top N". This is the scoring function they share.
 *
 * Brokers that ship with a server-side fuzzy endpoint (IBKR's
 * reqMatchingSymbols) bypass this entirely — they're SearchingCatalogs
 * and trust the broker's own ranking.
 *
 * Scoring is intentionally a small bag of tiers rather than something
 * subtler — predictable beats clever for a function that has to debug-by-
 * eyeball when a broker's data changes shape.
 */
import { ContractDescription, Contract } from '@traderalice/ibkr';
export interface FuzzyRankInput {
    /** Catalog entries to rank. Anything with at least a symbol works. */
    contract: Pick<Contract, 'symbol' | 'localSymbol' | 'description' | 'currency' | 'secType'>;
    /** Optional broker-derived hints. CCXT splits its symbol into base/quote;
     *  Alpaca stores the long company name on the asset. Both contribute to
     *  ranking but neither is required. */
    base?: string;
    quote?: string;
    name?: string;
}
export interface FuzzyRankOptions {
    /** Cap the result count. Default 50; broker UIs can't usefully render more. */
    limit?: number;
}
export declare function fuzzyRankContracts(entries: FuzzyRankInput[], query: string, options?: FuzzyRankOptions): ContractDescription[];
