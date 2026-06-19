/**
 * FOMC Documents Standard Model.
 * Maps to: openbb_core/provider/standard_models/fomc_documents.py
 */
import { z } from 'zod';
export const FomcDocumentsQueryParamsSchema = z.object({
    start_date: z.string().nullable().default(null).describe('Start date in YYYY-MM-DD.'),
    end_date: z.string().nullable().default(null).describe('End date in YYYY-MM-DD.'),
}).passthrough();
export const FomcDocumentsDataSchema = z.object({
    date: z.string().describe('Meeting or document date.'),
    title: z.string().nullable().default(null).describe('Document title.'),
    type: z.string().nullable().default(null).describe('Document type (statement, minutes, etc).'),
    url: z.string().nullable().default(null).describe('URL to the document.'),
}).passthrough();
//# sourceMappingURL=fomc-documents.js.map