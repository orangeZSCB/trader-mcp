/**
 * Economy AI Tools
 *
 * Macro / economic data surface exposed to the AI agent. Backed by
 * multiple providers under the hood — semantics drives the namespace
 * (the AI sees one cohesive "look up macro indicators" toolset), even
 * though the underlying SDK clients route them differently:
 *
 *   FRED (federal_reserve) — economyFredSearch / FredSeries / FredRegional
 *     (routed via /economy/* on the HTTP layer; uses EconomyClientLike)
 *   EIA — economyEnergyOutlook / economyPetroleumStatus
 *     (routed via /commodity/* upstream — OpenBB classifies oil/gas as
 *     commodity data; uses CommodityClientLike. Conceptually macro for
 *     the AI, structurally commodity for the wire.)
 *
 * Provider names are pinned at the tool boundary so the LLM never has
 * to know about the federal_reserve / eia provider strings.
 */
import type { EconomyClientLike, CommodityClientLike } from '@openalice-trading/alice-core/domain/market-data/client/types.js';
export declare function createEconomyTools(economyClient: EconomyClientLike, commodityClient: CommodityClientLike): {
    economyFredSearch: import("ai").Tool<{
        query: string;
        limit?: number | undefined;
    }, import("zod").objectOutputType<{
        series_id: import("zod").ZodString;
        title: import("zod").ZodString;
        frequency: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        units: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        seasonal_adjustment: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        last_updated: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        notes: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyFredSeries: import("ai").Tool<{
        symbol: string;
        start_date?: string | undefined;
        end_date?: string | undefined;
        limit?: number | undefined;
        frequency?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyFredRegional: import("ai").Tool<{
        symbol: string;
        date?: string | undefined;
        region_type?: string | undefined;
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        region: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        code: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyBlsSearch: import("ai").Tool<{
        query: string;
        limit?: number | undefined;
    }, import("zod").objectOutputType<{
        series_id: import("zod").ZodString;
        title: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        survey_abbreviation: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyBlsSeries: import("ai").Tool<{
        symbol: string;
        start_date?: string | undefined;
        end_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        series_id: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyEnergyOutlook: import("ai").Tool<{
        category: "crude_oil_production" | "crude_oil_price" | "gasoline_price" | "natural_gas_price" | "petroleum_consumption";
        start_date?: string | undefined;
        end_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        category: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        unit: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        forecast: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodBoolean>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyPetroleumStatus: import("ai").Tool<{
        category: "crude_oil_production" | "crude_oil_stocks" | "gasoline_stocks" | "distillate_stocks" | "refinery_utilization";
        start_date?: string | undefined;
        end_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        category: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        unit: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyCountryCpi: import("ai").Tool<{
        country: string;
        transform?: "index" | "period" | "yoy" | undefined;
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodString;
        value: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyCountryRates: import("ai").Tool<{
        country: string;
        duration?: "long" | "short" | undefined;
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyLeadingIndicator: import("ai").Tool<{
        country?: string | undefined;
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        country: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyPortSearch: import("ai").Tool<{
        port?: string | undefined;
    }, import("zod").objectOutputType<{
        port_code: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        port_name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        latitude: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        longitude: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyPortVolume: import("ai").Tool<{
        port: string;
        start_date?: string | undefined;
        end_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        port_code: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyChokepointVolume: import("ai").Tool<{
        chokepoint?: string | undefined;
        start_date?: string | undefined;
        end_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        chokepoint: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        unit: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyCountryRetail: import("ai").Tool<{
        country: string;
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyCountryHousePrices: import("ai").Tool<{
        country: string;
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyCountrySharePrices: import("ai").Tool<{
        country: string;
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyEuroAreaBop: import("ai").Tool<{
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        current_account: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        goods: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        services: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        primary_income: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        secondary_income: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        capital_account: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        financial_account: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyFomcDocuments: import("ai").Tool<{
        start_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
        title: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        type: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        url: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyFedBalanceSheet: import("ai").Tool<{
        date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    economyDealerPositioning: import("ai").Tool<{
        start_date?: string | undefined;
        end_date?: string | undefined;
    }, import("zod").objectOutputType<{
        date: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
};
