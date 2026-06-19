/**
 * SDK Crypto Client
 *
 * Drop-in replacement for OpenBBCryptoClient.
 */
import { SDKBaseClient } from './base-client.js';
export class SDKCryptoClient extends SDKBaseClient {
    async getHistorical(params) {
        return this.request('/price/historical', params);
    }
    async search(params) {
        return this.request('/search', params);
    }
}
//# sourceMappingURL=crypto-client.js.map