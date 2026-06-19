/**
 * SDK Index Client
 *
 * Maps to openTypeBB index-router endpoints.
 */
import { SDKBaseClient } from './base-client.js';
export class SDKIndexClient extends SDKBaseClient {
    async getAvailable(params = {}) {
        return this.request('/available', params);
    }
    async search(params) {
        return this.request('/search', params);
    }
    async getConstituents(params) {
        return this.request('/constituents', params);
    }
    async getHistorical(params) {
        return this.request('/price/historical', params);
    }
    async getSnapshots(params = {}) {
        return this.request('/snapshots', params);
    }
    async getSectors(params) {
        return this.request('/sectors', params);
    }
    async getSP500Multiples(params = {}) {
        return this.request('/sp500_multiples', params);
    }
    async getRiskPremium(params = {}) {
        return this.request('/risk_premium', params);
    }
}
//# sourceMappingURL=index-client.js.map