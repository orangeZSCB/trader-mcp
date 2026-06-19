/**
 * SDK Economy Client
 *
 * Drop-in replacement for OpenBBEconomyClient.
 */
import { SDKBaseClient } from './base-client.js';
export declare class SDKEconomyClient extends SDKBaseClient {
    getCalendar(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
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
    getCPI(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodString;
        value: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getRiskPremium(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        country: import("zod").ZodString;
        continent: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        total_equity_risk_premium: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        country_risk_premium: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getBalanceOfPayments(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        current_account: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        goods: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        services: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        primary_income: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        secondary_income: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        capital_account: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        financial_account: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getMoneyMeasures(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        m1: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        m2: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getUnemployment(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCompositeLeadingIndicator(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        country: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCountryProfile(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        country: import("zod").ZodString;
        population: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        gdp_usd: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        gdp_qoq: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        gdp_yoy: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        cpi_yoy: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        core_yoy: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        retail_sales_yoy: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        industrial_production_yoy: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        policy_rate: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        yield_10y: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        govt_debt_gdp: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        current_account_gdp: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        jobless_rate: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getAvailableIndicators(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        symbol_root: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        iso: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        description: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        frequency: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getIndicators(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        symbol_root: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getCentralBankHoldings(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getSharePriceIndex(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getHousePriceIndex(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getInterestRates(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getRetailPrices(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getPrimaryDealerPositioning(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getPCE(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        pce: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        core_pce: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getExportDestinations(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        origin_country: import("zod").ZodString;
        destination_country: import("zod").ZodString;
        value: import("zod").ZodNumber;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getPrimaryDealerFails(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getDirectionOfTrade(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        symbol: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        country: import("zod").ZodString;
        counterpart: import("zod").ZodString;
        title: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodNumber;
        scale: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getFomcDocuments(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        title: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        type: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        url: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getTotalFactorProductivity(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    fredSearch(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        series_id: import("zod").ZodString;
        title: import("zod").ZodString;
        frequency: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        units: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        seasonal_adjustment: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        last_updated: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        notes: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    fredSeries(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    fredReleaseTable(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        element_id: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        level: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    fredRegional(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        region: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        code: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getGdpForecast(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getGdpNominal(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getGdpReal(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getBlsSeries(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        series_id: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        value: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        period: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getBlsSearch(params: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        series_id: import("zod").ZodString;
        title: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        survey_abbreviation: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getSloos(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        ci_loan_tightening: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        consumer_loan_tightening: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getUniversityOfMichigan(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        consumer_sentiment: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        current_conditions: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        expectations: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        inflation_expectation_1y: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        inflation_expectation_5y: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getEconomicConditionsChicago(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        cfnai: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        cfnai_ma3: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getManufacturingOutlookTexas(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        general_activity: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        production: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        new_orders: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getManufacturingOutlookNY(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        general_business_conditions: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        new_orders: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        employees: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getNonfarmPayrolls(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        total_nonfarm: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        private_sector: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        government: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getInflationExpectations(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        michigan_1y: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        michigan_5y: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        breakeven_5y: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        breakeven_10y: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getPortInfo(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        port_code: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        port_name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        country: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        latitude: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        longitude: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getPortVolume(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        port_code: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getChokepointInfo(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        name: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        region: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        latitude: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        longitude: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        description: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
    getChokepointVolume(params?: Record<string, unknown>): Promise<import("zod").objectOutputType<{
        date: import("zod").ZodString;
        chokepoint: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
        volume: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodNumber>>;
        unit: import("zod").ZodDefault<import("zod").ZodNullable<import("zod").ZodString>>;
    }, import("zod").ZodTypeAny, "passthrough">[]>;
}
