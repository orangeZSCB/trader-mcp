/**
 * EClient order methods — place, cancel, query orders.
 * Mirrors: ibapi/client.py lines 1820-3210, 6984-7025
 */
import { EClient } from './base.js';
import type { Contract } from '../contract.js';
import type { Order } from '../order.js';
import type { OrderCancel } from '../order-cancel.js';
declare module './base.js' {
    interface EClient {
        placeOrder(orderId: number, contract: Contract, order: Order): void;
        cancelOrder(orderId: number, orderCancel: OrderCancel): void;
        reqOpenOrders(): void;
        reqAutoOpenOrders(bAutoBind: boolean): void;
        reqAllOpenOrders(): void;
        reqGlobalCancel(orderCancel: OrderCancel): void;
        reqIds(numIds: number): void;
        reqCompletedOrders(apiOnly: boolean): void;
    }
}
export declare function applyOrders(Client: typeof EClient): void;
