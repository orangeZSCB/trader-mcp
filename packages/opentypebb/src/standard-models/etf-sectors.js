/**
 * ETF Sectors Standard Model.
 * Maps to: standard_models/etf_sectors.py
 */
import { z } from 'zod';
export const EtfSectorsQueryParamsSchema = z.object({
    symbol: z.string().transform(v => v.toUpperCase()).describe('Symbol to get data for.'),
});
export const EtfSectorsDataSchema = z.object({
    symbol: z.string().nullable().default(null).describe('Symbol representing the entity.'),
    sector: z.string().describe('Sector of exposure.'),
    weight: z.number().describe('Exposure of the ETF to the sector in normalized percentage points.'),
}).passthrough();
//# sourceMappingURL=etf-sectors.js.map