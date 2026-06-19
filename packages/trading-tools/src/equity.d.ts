/**
 * Equity AI Tools
 *
 * equityGetProfile / equityGetFinancials / equityGetRatios / equityGetEstimates /
 * equityGetEarningsCalendar / equityGetInsiderTrading / equityDiscover:
 *   透传到 OpenBB equity API，为 AI 提供基本面和市场发现能力。
 */
import type { EquityClientLike } from '@openalice-trading/alice-core/domain/market-data/client/types.js';
export declare function createEquityTools(equityClient: EquityClientLike): {
    equityGetProfile: import("ai").Tool<{
        symbol: string;
    }, {
        profile: import("zod").objectOutputType<{
            symbol: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            cik: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            cusip: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            isin: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            lei: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            legal_name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            stock_exchange: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            sic: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
            short_description: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            long_description: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            ceo: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            company_url: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            business_address: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            mailing_address: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            business_phone_no: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            hq_address1: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            hq_address2: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            hq_address_city: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            hq_address_postal_code: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            hq_state: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            hq_country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            inc_state: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            inc_country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            employees: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
            entity_legal_form: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            entity_status: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            latest_filing_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            irs_number: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            sector: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            industry_category: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            industry_group: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            template: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            standardized_active: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodBoolean>>;
            first_fundamental_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            last_fundamental_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            first_stock_price_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            last_stock_price_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod").ZodTypeAny, "passthrough">;
        metrics: import("zod").objectOutputType<{
            symbol: import("zod").ZodString;
            period_ending: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
            fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            currency: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
            market_cap: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        }, import("zod").ZodTypeAny, "passthrough">;
    }>;
    equityGetFinancials: import("ai").Tool<{
        symbol: string;
        type: "cash" | "balance" | "income";
        period?: "annual" | "quarter" | undefined;
        limit?: number | undefined;
    }, import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    equityGetRatios: import("ai").Tool<{
        symbol: string;
        period?: "annual" | "quarter" | undefined;
        limit?: number | undefined;
        ttm?: "include" | "exclude" | "only" | undefined;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        period_ending: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    equityGetEarningsCalendar: import("ai").Tool<{
        symbol?: string | undefined;
        start_date?: string | undefined;
        end_date?: string | undefined;
    }, import("zod").objectOutputType<{
        report_date: import("zod").ZodString;
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        eps_previous: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        eps_consensus: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    equityGetInsiderTrading: import("ai").Tool<{
        symbol: string;
        limit?: number | undefined;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        company_cik: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        filing_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        transaction_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        owner_cik: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodNumber, import("zod").ZodString]>>>;
        owner_name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        owner_title: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        ownership_type: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        transaction_type: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        acquisition_or_disposition: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        security_type: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        securities_owned: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        securities_transacted: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        transaction_price: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        filing_url: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    equityGetShortInterest: import("ai").Tool<{
        symbol: string;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        free_float: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        float_shares: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        outstanding_shares: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    equityGetEstimates: import("ai").Tool<{
        symbol: string;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        target_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        target_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        target_consensus: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        target_median: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    equityDiscover: import("ai").Tool<{
        type: "aggressive_small_caps" | "undervalued_large_caps" | "gainers" | "losers" | "active" | "undervalued_growth" | "growth_tech";
        sortBy?: "default" | "relative_volume" | "dollar_volume" | undefined;
    }, import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        price: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        change: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        percent_change: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        avg_volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        relative_volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        turnover: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        dollar_volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
};
