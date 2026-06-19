/**
 * SDK ETF Client
 *
 * Maps to openTypeBB etf-router endpoints.
 */
import { SDKBaseClient } from './base-client.js';
export class SDKEtfClient extends SDKBaseClient {
    async search(params) {
        return this.request('/search', params);
    }
    async getInfo(params) {
        return this.request('/info', params);
    }
    async getHoldings(params) {
        return this.request('/holdings', params);
    }
    async getSectors(params) {
        return this.request('/sectors', params);
    }
    async getCountries(params) {
        return this.request('/countries', params);
    }
    async getEquityExposure(params) {
        return this.request('/equity_exposure', params);
    }
    async getHistorical(params) {
        return this.request('/historical', params);
    }
}
//# sourceMappingURL=etf-client.js.map