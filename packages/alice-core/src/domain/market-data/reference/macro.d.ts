/**
 * Macro dashboard — curated FRED regime inputs.
 *
 * One multi-series FRED call covers the whole board (the fetcher merges
 * series by date into `{date, DFF, DGS10, …}` rows). CPI YoY is derived
 * in-domain from the CPIAUCSL index — FRED transforms (units=pc1) are not
 * exposed by the fetcher, and the math is one line.
 */
import type { EconomyClientLike } from '../client/types.js';
import type { MacroBoard } from './types.js';
export declare function fetchMacroBoard(economyClient: EconomyClientLike): Promise<MacroBoard>;
