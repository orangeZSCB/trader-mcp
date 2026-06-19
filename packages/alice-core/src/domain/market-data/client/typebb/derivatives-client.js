/**
 * SDK Derivatives Client
 *
 * Maps to openTypeBB derivatives-router endpoints.
 */
import { SDKBaseClient } from './base-client.js';
export class SDKDerivativesClient extends SDKBaseClient {
    // ==================== Futures ====================
    async getFuturesHistorical(params) {
        return this.request('/futures/historical', params);
    }
    async getFuturesCurve(params) {
        return this.request('/futures/curve', params);
    }
    async getFuturesInfo(params) {
        return this.request('/futures/info', params);
    }
    async getFuturesInstruments(params = {}) {
        return this.request('/futures/instruments', params);
    }
    // ==================== Options ====================
    async getOptionsChains(params) {
        return this.request('/options/chains', params);
    }
    async getOptionsSnapshots(params = {}) {
        return this.request('/options/snapshots', params);
    }
    async getOptionsUnusual(params = {}) {
        return this.request('/options/unusual', params);
    }
}
//# sourceMappingURL=derivatives-client.js.map