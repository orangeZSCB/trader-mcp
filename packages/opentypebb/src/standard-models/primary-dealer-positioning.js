/**
 * Primary Dealer Positioning Standard Model.
 * Maps to: openbb_core/provider/standard_models/primary_dealer_positioning.py
 */
import { z } from 'zod';
export const PrimaryDealerPositioningQueryParamsSchema = z.object({
    start_date: z.string().nullable().default(null).describe('Start date in YYYY-MM-DD.'),
    end_date: z.string().nullable().default(null).describe('End date in YYYY-MM-DD.'),
}).passthrough();
export const PrimaryDealerPositioningDataSchema = z.object({
    date: z.string().describe('The date of the data.'),
}).passthrough();
//# sourceMappingURL=primary-dealer-positioning.js.map