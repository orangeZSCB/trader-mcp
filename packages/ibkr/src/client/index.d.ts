/**
 * EClient — assembled from base + method mixins.
 *
 * Usage:
 *   import { EClient } from '@traderalice/ibkr'
 *   const client = new EClient(myWrapper)
 *   await client.connect('127.0.0.1', 7497, 0)
 */
import { EClient } from './base.js';
import './market-data.js';
import './account.js';
import './orders.js';
import './historical.js';
export { EClient };
