/**
 * Trading-as-Git type definitions
 *
 * Operation is a discriminated union — each variant carries typed IBKR objects.
 * No more Record<string, unknown> type erasure.
 */
import './contract-ext.js';
// ==================== Operation Helpers ====================
/** Extract the symbol from any Operation variant. */
export function getOperationSymbol(op) {
    if (!op)
        return 'unknown';
    switch (op.action) {
        case 'placeOrder': return op.contract?.symbol || op.contract?.aliceId || 'unknown';
        case 'modifyOrder': return 'unknown'; // modifyOrder doesn't carry contract
        case 'closePosition': return op.contract?.symbol || op.contract?.aliceId || 'unknown';
        case 'cancelOrder': return 'unknown';
        case 'syncOrders': return 'unknown';
        case 'observeExternalOrder': return op.contract?.symbol || op.contract?.aliceId || 'unknown';
        case 'reconcileBalance': return op.aliceId;
    }
}
//# sourceMappingURL=git.js.map