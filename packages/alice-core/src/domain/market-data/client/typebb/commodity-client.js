/**
 * SDK Commodity Client
 *
 * Drop-in replacement for OpenBBCommodityClient.
 *
 * NOTE: OpenTypeBB does not yet have commodity routes. These methods will throw
 * "No SDK route for: /commodity/..." until the corresponding fetchers are added.
 */
import { SDKBaseClient } from './base-client.js';
export class SDKCommodityClient extends SDKBaseClient {
    async getSpotPrices(params) {
        return this.request('/price/spot', params);
    }
    async getPsdData(params) {
        return this.request('/psd_data', params);
    }
    async getPetroleumStatus(params) {
        return this.request('/petroleum_status_report', params);
    }
    async getEnergyOutlook(params) {
        return this.request('/short_term_energy_outlook', params);
    }
    async getPsdReport(params) {
        return this.request('/psd_report', params);
    }
    async getWeatherBulletins(params = {}) {
        return this.request('/weather_bulletins', params);
    }
}
//# sourceMappingURL=commodity-client.js.map