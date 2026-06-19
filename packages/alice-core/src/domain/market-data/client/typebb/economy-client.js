/**
 * SDK Economy Client
 *
 * Drop-in replacement for OpenBBEconomyClient.
 */
import { SDKBaseClient } from './base-client.js';
export class SDKEconomyClient extends SDKBaseClient {
    // ==================== Core ====================
    async getCalendar(params = {}) {
        return this.request('/calendar', params);
    }
    async getCPI(params) {
        return this.request('/cpi', params);
    }
    async getRiskPremium(params) {
        return this.request('/risk_premium', params);
    }
    async getBalanceOfPayments(params) {
        return this.request('/balance_of_payments', params);
    }
    async getMoneyMeasures(params = {}) {
        return this.request('/money_measures', params);
    }
    async getUnemployment(params = {}) {
        return this.request('/unemployment', params);
    }
    async getCompositeLeadingIndicator(params = {}) {
        return this.request('/composite_leading_indicator', params);
    }
    async getCountryProfile(params) {
        return this.request('/country_profile', params);
    }
    async getAvailableIndicators(params = {}) {
        return this.request('/available_indicators', params);
    }
    async getIndicators(params) {
        return this.request('/indicators', params);
    }
    async getCentralBankHoldings(params = {}) {
        return this.request('/central_bank_holdings', params);
    }
    async getSharePriceIndex(params = {}) {
        return this.request('/share_price_index', params);
    }
    async getHousePriceIndex(params = {}) {
        return this.request('/house_price_index', params);
    }
    async getInterestRates(params = {}) {
        return this.request('/interest_rates', params);
    }
    async getRetailPrices(params = {}) {
        return this.request('/retail_prices', params);
    }
    async getPrimaryDealerPositioning(params = {}) {
        return this.request('/primary_dealer_positioning', params);
    }
    async getPCE(params = {}) {
        return this.request('/pce', params);
    }
    async getExportDestinations(params) {
        return this.request('/export_destinations', params);
    }
    async getPrimaryDealerFails(params = {}) {
        return this.request('/primary_dealer_fails', params);
    }
    async getDirectionOfTrade(params) {
        return this.request('/direction_of_trade', params);
    }
    async getFomcDocuments(params = {}) {
        return this.request('/fomc_documents', params);
    }
    async getTotalFactorProductivity(params = {}) {
        return this.request('/total_factor_productivity', params);
    }
    // ==================== FRED ====================
    async fredSearch(params) {
        return this.request('/fred_search', params);
    }
    async fredSeries(params) {
        return this.request('/fred_series', params);
    }
    async fredReleaseTable(params) {
        return this.request('/fred_release_table', params);
    }
    async fredRegional(params) {
        return this.request('/fred_regional', params);
    }
    // ==================== GDP ====================
    async getGdpForecast(params = {}) {
        return this.request('/gdp/forecast', params);
    }
    async getGdpNominal(params = {}) {
        return this.request('/gdp/nominal', params);
    }
    async getGdpReal(params = {}) {
        return this.request('/gdp/real', params);
    }
    // ==================== Survey ====================
    async getBlsSeries(params) {
        return this.request('/survey/bls_series', params);
    }
    async getBlsSearch(params) {
        return this.request('/survey/bls_search', params);
    }
    async getSloos(params = {}) {
        return this.request('/survey/sloos', params);
    }
    async getUniversityOfMichigan(params = {}) {
        return this.request('/survey/university_of_michigan', params);
    }
    async getEconomicConditionsChicago(params = {}) {
        return this.request('/survey/economic_conditions_chicago', params);
    }
    async getManufacturingOutlookTexas(params = {}) {
        return this.request('/survey/manufacturing_outlook_texas', params);
    }
    async getManufacturingOutlookNY(params = {}) {
        return this.request('/survey/manufacturing_outlook_ny', params);
    }
    async getNonfarmPayrolls(params = {}) {
        return this.request('/survey/nonfarm_payrolls', params);
    }
    async getInflationExpectations(params = {}) {
        return this.request('/survey/inflation_expectations', params);
    }
    // ==================== Shipping ====================
    async getPortInfo(params = {}) {
        return this.request('/shipping/port_info', params);
    }
    async getPortVolume(params = {}) {
        return this.request('/shipping/port_volume', params);
    }
    async getChokepointInfo(params = {}) {
        return this.request('/shipping/chokepoint_info', params);
    }
    async getChokepointVolume(params = {}) {
        return this.request('/shipping/chokepoint_volume', params);
    }
}
//# sourceMappingURL=economy-client.js.map