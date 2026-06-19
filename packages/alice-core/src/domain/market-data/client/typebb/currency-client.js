/**
 * SDK Currency Client
 *
 * Drop-in replacement for OpenBBCurrencyClient.
 */
import { SDKBaseClient } from './base-client.js';
export class SDKCurrencyClient extends SDKBaseClient {
    async getHistorical(params) {
        return this.request('/price/historical', params);
    }
    async search(params) {
        return this.request('/search', params);
    }
    async getReferenceRates(params) {
        return this.request('/reference_rates', params);
    }
    async getSnapshots(params) {
        return this.request('/snapshots', params);
    }
}
//# sourceMappingURL=currency-client.js.map