/**
 * Mirrors: ibapi/order_cancel.py
 */
import { UNSET_INTEGER } from './const.js';
function intMaxString(val) {
    return val === UNSET_INTEGER ? '' : String(val);
}
export class OrderCancel {
    manualOrderCancelTime = '';
    extOperator = '';
    manualOrderIndicator = UNSET_INTEGER;
    toString() {
        return (`manualOrderCancelTime: ${this.manualOrderCancelTime}, ` +
            `extOperator: ${this.extOperator}, ` +
            `manualOrderIndicator: ${intMaxString(this.manualOrderIndicator)}`);
    }
}
//# sourceMappingURL=order-cancel.js.map