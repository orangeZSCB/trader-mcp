/**
 * SDK Equity Client
 *
 * Drop-in replacement for OpenBBEquityClient — same method signatures,
 * but calls OpenTypeBB's executor instead of HTTP fetch.
 */
import { SDKBaseClient } from './base-client.js';
export class SDKEquityClient extends SDKBaseClient {
    // ==================== Price ====================
    async getHistorical(params) {
        return this.request('/price/historical', params);
    }
    async getQuote(params) {
        return this.request('/price/quote', params);
    }
    async getNBBO(params) {
        return this.request('/price/nbbo', params);
    }
    async getPricePerformance(params) {
        return this.request('/price/performance', params);
    }
    // ==================== Info ====================
    async search(params) {
        return this.request('/search', params);
    }
    async screener(params) {
        return this.request('/screener', params);
    }
    async getProfile(params) {
        return this.request('/profile', params);
    }
    async getMarketSnapshots(params = {}) {
        return this.request('/market_snapshots', params);
    }
    async getHistoricalMarketCap(params) {
        return this.request('/historical_market_cap', params);
    }
    // ==================== Fundamental ====================
    async getBalanceSheet(params) {
        return this.request('/fundamental/balance', params);
    }
    async getBalanceSheetGrowth(params) {
        return this.request('/fundamental/balance_growth', params);
    }
    async getIncomeStatement(params) {
        return this.request('/fundamental/income', params);
    }
    async getIncomeStatementGrowth(params) {
        return this.request('/fundamental/income_growth', params);
    }
    async getCashFlow(params) {
        return this.request('/fundamental/cash', params);
    }
    async getCashFlowGrowth(params) {
        return this.request('/fundamental/cash_growth', params);
    }
    async getReportedFinancials(params) {
        return this.request('/fundamental/reported_financials', params);
    }
    async getFinancialRatios(params) {
        return this.request('/fundamental/ratios', params);
    }
    async getKeyMetrics(params) {
        return this.request('/fundamental/metrics', params);
    }
    async getDividends(params) {
        return this.request('/fundamental/dividends', params);
    }
    async getEarningsHistory(params) {
        return this.request('/fundamental/historical_eps', params);
    }
    async getEmployeeCount(params) {
        return this.request('/fundamental/employee_count', params);
    }
    async getManagement(params) {
        return this.request('/fundamental/management', params);
    }
    async getManagementCompensation(params) {
        return this.request('/fundamental/management_compensation', params);
    }
    async getFilings(params) {
        return this.request('/fundamental/filings', params);
    }
    async getSplits(params) {
        return this.request('/fundamental/historical_splits', params);
    }
    async getTranscript(params) {
        return this.request('/fundamental/transcript', params);
    }
    async getTrailingDividendYield(params) {
        return this.request('/fundamental/trailing_dividend_yield', params);
    }
    async getRevenuePerGeography(params) {
        return this.request('/fundamental/revenue_per_geography', params);
    }
    async getRevenuePerSegment(params) {
        return this.request('/fundamental/revenue_per_segment', params);
    }
    async getEsgScore(params) {
        return this.request('/fundamental/esg_score', params);
    }
    async getSearchAttributes(params) {
        return this.request('/fundamental/search_attributes', params);
    }
    async getLatestAttributes(params) {
        return this.request('/fundamental/latest_attributes', params);
    }
    async getHistoricalAttributes(params) {
        return this.request('/fundamental/historical_attributes', params);
    }
    // ==================== Calendar ====================
    async getCalendarIpo(params = {}) {
        return this.request('/calendar/ipo', params);
    }
    async getCalendarDividend(params = {}) {
        return this.request('/calendar/dividend', params);
    }
    async getCalendarSplits(params = {}) {
        return this.request('/calendar/splits', params);
    }
    async getCalendarEarnings(params = {}) {
        return this.request('/calendar/earnings', params);
    }
    async getCalendarEvents(params = {}) {
        return this.request('/calendar/events', params);
    }
    // ==================== Estimates ====================
    async getPriceTarget(params) {
        return this.request('/estimates/price_target', params);
    }
    async getAnalystEstimates(params) {
        return this.request('/estimates/historical', params);
    }
    async getEstimateConsensus(params) {
        return this.request('/estimates/consensus', params);
    }
    async getAnalystSearch(params) {
        return this.request('/estimates/analyst_search', params);
    }
    async getForwardSales(params) {
        return this.request('/estimates/forward_sales', params);
    }
    async getForwardEbitda(params) {
        return this.request('/estimates/forward_ebitda', params);
    }
    async getForwardEps(params) {
        return this.request('/estimates/forward_eps', params);
    }
    async getForwardPe(params) {
        return this.request('/estimates/forward_pe', params);
    }
    // ==================== Discovery ====================
    async getGainers(params = {}) {
        return this.request('/discovery/gainers', params);
    }
    async getLosers(params = {}) {
        return this.request('/discovery/losers', params);
    }
    async getActive(params = {}) {
        return this.request('/discovery/active', params);
    }
    async getUndervaluedLargeCaps(params = {}) {
        return this.request('/discovery/undervalued_large_caps', params);
    }
    async getUndervaluedGrowth(params = {}) {
        return this.request('/discovery/undervalued_growth', params);
    }
    async getAggressiveSmallCaps(params = {}) {
        return this.request('/discovery/aggressive_small_caps', params);
    }
    async getGrowthTech(params = {}) {
        return this.request('/discovery/growth_tech', params);
    }
    async getTopRetail(params = {}) {
        return this.request('/discovery/top_retail', params);
    }
    async getDiscoveryFilings(params = {}) {
        return this.request('/discovery/filings', params);
    }
    async getLatestFinancialReports(params = {}) {
        return this.request('/discovery/latest_financial_reports', params);
    }
    // ==================== Ownership ====================
    async getMajorHolders(params) {
        return this.request('/ownership/major_holders', params);
    }
    async getInstitutional(params) {
        return this.request('/ownership/institutional', params);
    }
    async getInsiderTrading(params) {
        return this.request('/ownership/insider_trading', params);
    }
    async getShareStatistics(params) {
        return this.request('/ownership/share_statistics', params);
    }
    async getForm13F(params) {
        return this.request('/ownership/form_13f', params);
    }
    async getGovernmentTrades(params = {}) {
        return this.request('/ownership/government_trades', params);
    }
    // ==================== Shorts ====================
    async getFailsToDeliver(params) {
        return this.request('/shorts/fails_to_deliver', params);
    }
    async getShortVolume(params) {
        return this.request('/shorts/short_volume', params);
    }
    async getShortInterest(params) {
        return this.request('/shorts/short_interest', params);
    }
    // ==================== Compare ====================
    async getPeers(params) {
        return this.request('/compare/peers', params);
    }
    async getCompareGroups(params = {}) {
        return this.request('/compare/groups', params);
    }
    async getCompareCompanyFacts(params) {
        return this.request('/compare/company_facts', params);
    }
    // ==================== DarkPool ====================
    async getOtc(params) {
        return this.request('/darkpool/otc', params);
    }
}
//# sourceMappingURL=equity-client.js.map