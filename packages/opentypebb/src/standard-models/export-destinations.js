/**
 * Export Destinations Standard Model.
 * Maps to: openbb_core/provider/standard_models/export_destinations.py
 */
import { z } from 'zod';
export const ExportDestinationsQueryParamsSchema = z.object({
    country: z.string().describe('The country to get data for.'),
}).passthrough();
export const ExportDestinationsDataSchema = z.object({
    origin_country: z.string().describe('The country of origin.'),
    destination_country: z.string().describe('The destination country.'),
    value: z.number().describe('The value of the export.'),
}).passthrough();
//# sourceMappingURL=export-destinations.js.map