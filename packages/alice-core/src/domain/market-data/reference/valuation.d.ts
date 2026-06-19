/**
 * S&P 500 valuation strip — multpl.com series (keyless).
 *
 * Reuses the MacroSeriesCard shape so the UI renders these with the same
 * card component as the macro board. One multpl call carries all series
 * (the fetcher accepts a comma-separated series_name).
 */
import type { IndexClientLike } from '../client/types.js';
import type { MacroSeriesCard, ReferenceMeta } from './types.js';
export interface ValuationStrip {
    cards: MacroSeriesCard[];
    meta: ReferenceMeta;
}
export declare function fetchValuationStrip(indexClient: IndexClientLike): Promise<ValuationStrip>;
