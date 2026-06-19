/**
 * Deribit Futures Instruments Model.
 * Maps to: openbb_deribit/models/futures_instruments.py
 */
import { z } from 'zod';
import { Fetcher } from '../../../core/provider/abstract/fetcher.js';
export declare const DeribitFuturesInstrumentsQueryParamsSchema: z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>;
export type DeribitFuturesInstrumentsQueryParams = z.infer<typeof DeribitFuturesInstrumentsQueryParamsSchema>;
export declare const DeribitFuturesInstrumentsDataSchema: z.ZodObject<{
    instrument_id: z.ZodNumber;
    symbol: z.ZodString;
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    quote_currency: z.ZodString;
    settlement_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    future_type: z.ZodString;
    settlement_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price_index: z.ZodString;
    contract_size: z.ZodNumber;
    is_active: z.ZodBoolean;
    creation_timestamp: z.ZodNumber;
    expiration_timestamp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    tick_size: z.ZodNumber;
    min_trade_amount: z.ZodNumber;
    max_leverage: z.ZodNumber;
    maker_commission: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    taker_commission: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    instrument_id: z.ZodNumber;
    symbol: z.ZodString;
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    quote_currency: z.ZodString;
    settlement_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    future_type: z.ZodString;
    settlement_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price_index: z.ZodString;
    contract_size: z.ZodNumber;
    is_active: z.ZodBoolean;
    creation_timestamp: z.ZodNumber;
    expiration_timestamp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    tick_size: z.ZodNumber;
    min_trade_amount: z.ZodNumber;
    max_leverage: z.ZodNumber;
    maker_commission: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    taker_commission: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    instrument_id: z.ZodNumber;
    symbol: z.ZodString;
    base_currency: z.ZodString;
    counter_currency: z.ZodString;
    quote_currency: z.ZodString;
    settlement_currency: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    future_type: z.ZodString;
    settlement_period: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    price_index: z.ZodString;
    contract_size: z.ZodNumber;
    is_active: z.ZodBoolean;
    creation_timestamp: z.ZodNumber;
    expiration_timestamp: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    tick_size: z.ZodNumber;
    min_trade_amount: z.ZodNumber;
    max_leverage: z.ZodNumber;
    maker_commission: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    taker_commission: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
}, z.ZodTypeAny, "passthrough">>;
export type DeribitFuturesInstrumentsData = z.infer<typeof DeribitFuturesInstrumentsDataSchema>;
export declare class DeribitFuturesInstrumentsFetcher extends Fetcher {
    static requireCredentials: boolean;
    static transformQuery(params: Record<string, unknown>): DeribitFuturesInstrumentsQueryParams;
    static extractData(_query: DeribitFuturesInstrumentsQueryParams, _credentials: Record<string, string> | null): Promise<Record<string, unknown>[]>;
    static transformData(_query: DeribitFuturesInstrumentsQueryParams, data: Record<string, unknown>[]): DeribitFuturesInstrumentsData[];
}
