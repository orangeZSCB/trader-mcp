/**
 * SDK Equity Client
 *
 * Drop-in replacement for OpenBBEquityClient — same method signatures,
 * but calls OpenTypeBB's executor instead of HTTP fetch.
 */
import { SDKBaseClient } from './base-client.js';
export declare class SDKEquityClient extends SDKBaseClient {
    getHistorical(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        vwap: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getQuote(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        asset_type: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        exchange: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        bid: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        bid_size: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        ask: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        ask_size: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_price: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_size: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        last_timestamp: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        prev_close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        change: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        change_percent: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        year_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        year_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getNBBO(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getPricePerformance(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        price: import("zod").ZodNumber;
        change: import("zod").ZodNumber;
        percent_change: import("zod").ZodNumber;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    search(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    screener(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getProfile(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getMarketSnapshots(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        exchange: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        open: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        prev_close: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        change: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        change_percent: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getHistoricalMarketCap(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        date: import("zod").ZodString;
        market_cap: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getBalanceSheet(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getBalanceSheetGrowth(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getIncomeStatement(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getIncomeStatementGrowth(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCashFlow(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCashFlowGrowth(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getReportedFinancials(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getFinancialRatios(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        period_ending: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getKeyMetrics(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        period_ending: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        currency: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        market_cap: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getDividends(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        ex_dividend_date: import("zod").ZodString;
        amount: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getEarningsHistory(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        date: import("zod").ZodString;
        eps_actual: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        eps_estimated: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getEmployeeCount(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        employees: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getManagement(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getManagementCompensation(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        cik: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        report_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        company_name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        executive: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        salary: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        bonus: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        stock_award: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        option_award: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        incentive_plan_compensation: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        all_other_compensation: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        total: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getFilings(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        filing_date: import("zod").ZodString;
        report_type: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        report_url: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getSplits(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        numerator: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        denominator: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        split_ratio: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getTranscript(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        year: import("zod").ZodNumber;
        quarter: import("zod").ZodString;
        date: import("zod").ZodString;
        content: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getTrailingDividendYield(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getRevenuePerGeography(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        filing_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        region: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        revenue: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getRevenuePerSegment(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period_ending: import("zod").ZodString;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        filing_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        business_line: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        revenue: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getEsgScore(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        cik: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        company_name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        form_type: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        accepted_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        environmental_score: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        social_score: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        governance_score: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        esg_score: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        url: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getSearchAttributes(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getLatestAttributes(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getHistoricalAttributes(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getCalendarIpo(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        ipo_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCalendarDividend(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        ex_dividend_date: import("zod").ZodString;
        symbol: import("zod").ZodString;
        amount: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        record_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        payment_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        declaration_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCalendarSplits(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        symbol: import("zod").ZodString;
        numerator: import("zod").ZodNumber;
        denominator: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCalendarEarnings(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        report_date: import("zod").ZodString;
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        eps_previous: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        eps_consensus: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCalendarEvents(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        category: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        event: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        importance: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        source: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        currency: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        unit: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        consensus: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>>;
        previous: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>>;
        revised: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>>;
        actual: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getPriceTarget(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        published_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        published_time: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        symbol: import("zod").ZodString;
        exchange: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        company_name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        analyst_name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        analyst_firm: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        currency: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        price_target: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        adj_price_target: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        price_target_previous: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        previous_adj_price_target: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        price_when_posted: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        rating_current: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        rating_previous: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        action: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getAnalystEstimates(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        date: import("zod").ZodString;
        estimated_revenue_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_revenue_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_revenue_avg: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_sga_expense_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_sga_expense_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_sga_expense_avg: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_ebitda_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_ebitda_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_ebitda_avg: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_ebit_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_ebit_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_ebit_avg: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_net_income_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_net_income_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_net_income_avg: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_eps_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_eps_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        estimated_eps_avg: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        number_analyst_estimated_revenue: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        number_analysts_estimated_eps: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getEstimateConsensus(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        target_high: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        target_low: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        target_consensus: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        target_median: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getAnalystSearch(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getForwardSales(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getForwardEbitda(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        last_updated: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        period_ending: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        calendar_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        calendar_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        low_estimate: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high_estimate: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        mean: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        median: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        standard_deviation: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        number_of_analysts: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getForwardEps(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        fiscal_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        fiscal_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        calendar_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        calendar_period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        low_estimate: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        high_estimate: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        mean: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        median: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        standard_deviation: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        number_of_analysts: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getForwardPe(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getGainers(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getLosers(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getActive(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getUndervaluedLargeCaps(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getUndervaluedGrowth(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getAggressiveSmallCaps(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getGrowthTech(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getTopRetail(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getDiscoveryFilings(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        cik: import("zod").ZodString;
        filing_date: import("zod").ZodString;
        accepted_date: import("zod").ZodString;
        form_type: import("zod").ZodString;
        link: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getLatestFinancialReports(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        one_day: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        wtd: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        one_week: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        mtd: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        one_month: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        qtd: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        three_month: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        six_month: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        ytd: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        one_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        two_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        three_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        four_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        five_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        ten_year: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        max: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getMajorHolders(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getInstitutional(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        cik: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        date: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getInsiderTrading(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getShareStatistics(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        free_float: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        float_shares: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        outstanding_shares: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getForm13F(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getGovernmentTrades(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        date: import("zod").ZodString;
        transaction_date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        representative: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getFailsToDeliver(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getShortVolume(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getShortInterest(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getPeers(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCompareGroups(params?: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getCompareCompanyFacts(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
    getOtc(params: Record<string, unknown>): Promise<Record<string, unknown>[]>;
}
