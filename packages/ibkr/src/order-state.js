/**
 * Mirrors: ibapi/order_state.py
 */
import { UNSET_DOUBLE, UNSET_DECIMAL } from './const.js';
function floatMaxString(val) {
    return val === UNSET_DOUBLE ? '' : String(val);
}
function decimalMaxString(val) {
    return val.eq(UNSET_DECIMAL) ? '' : val.toString();
}
export class OrderAllocation {
    account = '';
    position = UNSET_DECIMAL;
    positionDesired = UNSET_DECIMAL;
    positionAfter = UNSET_DECIMAL;
    desiredAllocQty = UNSET_DECIMAL;
    allowedAllocQty = UNSET_DECIMAL;
    isMonetary = false;
    toString() {
        return (`Account: ${this.account}, Position: ${decimalMaxString(this.position)}, ` +
            `PositionDesired: ${decimalMaxString(this.positionDesired)}, ` +
            `PositionAfter: ${decimalMaxString(this.positionAfter)}, ` +
            `DesiredAllocQty: ${decimalMaxString(this.desiredAllocQty)}, ` +
            `AllowedAllocQty: ${decimalMaxString(this.allowedAllocQty)}, ` +
            `IsMonetary: ${this.isMonetary}`);
    }
}
export class OrderState {
    status = '';
    initMarginBefore = '';
    maintMarginBefore = '';
    equityWithLoanBefore = '';
    initMarginChange = '';
    maintMarginChange = '';
    equityWithLoanChange = '';
    initMarginAfter = '';
    maintMarginAfter = '';
    equityWithLoanAfter = '';
    commissionAndFees = UNSET_DOUBLE;
    minCommissionAndFees = UNSET_DOUBLE;
    maxCommissionAndFees = UNSET_DOUBLE;
    commissionAndFeesCurrency = '';
    marginCurrency = '';
    initMarginBeforeOutsideRTH = UNSET_DOUBLE;
    maintMarginBeforeOutsideRTH = UNSET_DOUBLE;
    equityWithLoanBeforeOutsideRTH = UNSET_DOUBLE;
    initMarginChangeOutsideRTH = UNSET_DOUBLE;
    maintMarginChangeOutsideRTH = UNSET_DOUBLE;
    equityWithLoanChangeOutsideRTH = UNSET_DOUBLE;
    initMarginAfterOutsideRTH = UNSET_DOUBLE;
    maintMarginAfterOutsideRTH = UNSET_DOUBLE;
    equityWithLoanAfterOutsideRTH = UNSET_DOUBLE;
    suggestedSize = UNSET_DECIMAL;
    rejectReason = '';
    orderAllocations = null;
    warningText = '';
    completedTime = '';
    completedStatus = '';
    toString() {
        let s = `Status: ${this.status}, ` +
            `InitMarginBefore: ${this.initMarginBefore}, ` +
            `MaintMarginBefore: ${this.maintMarginBefore}, ` +
            `EquityWithLoanBefore: ${this.equityWithLoanBefore}, ` +
            `InitMarginChange: ${this.initMarginChange}, ` +
            `MaintMarginChange: ${this.maintMarginChange}, ` +
            `EquityWithLoanChange: ${this.equityWithLoanChange}, ` +
            `InitMarginAfter: ${this.initMarginAfter}, ` +
            `MaintMarginAfter: ${this.maintMarginAfter}, ` +
            `EquityWithLoanAfter: ${this.equityWithLoanAfter}, ` +
            `CommissionAndFees: ${floatMaxString(this.commissionAndFees)}, ` +
            `MinCommissionAndFees: ${floatMaxString(this.minCommissionAndFees)}, ` +
            `MaxCommissionAndFees: ${floatMaxString(this.maxCommissionAndFees)}, ` +
            `CommissionAndFeesCurrency: ${this.commissionAndFeesCurrency}, ` +
            `MarginCurrency: ${this.marginCurrency}, ` +
            `InitMarginBeforeOutsideRTH: ${floatMaxString(this.initMarginBeforeOutsideRTH)}, ` +
            `MaintMarginBeforeOutsideRTH: ${floatMaxString(this.maintMarginBeforeOutsideRTH)}, ` +
            `EquityWithLoanBeforeOutsideRTH: ${floatMaxString(this.equityWithLoanBeforeOutsideRTH)}, ` +
            `InitMarginChangeOutsideRTH: ${floatMaxString(this.initMarginChangeOutsideRTH)}, ` +
            `MaintMarginChangeOutsideRTH: ${floatMaxString(this.maintMarginChangeOutsideRTH)}, ` +
            `equityWithLoanChangeOutsideRTH: ${floatMaxString(this.equityWithLoanChangeOutsideRTH)}, ` +
            `InitMarginAfterOutsideRTH: ${floatMaxString(this.initMarginAfterOutsideRTH)}, ` +
            `MaintMarginAfterOutsideRTH: ${floatMaxString(this.maintMarginAfterOutsideRTH)}, ` +
            `equityWithLoanAfterOutsideRTH: ${floatMaxString(this.equityWithLoanAfterOutsideRTH)}, ` +
            `SuggestedSize: ${decimalMaxString(this.suggestedSize)}, ` +
            `RejectReason: ${this.rejectReason}, ` +
            `WarningText: ${this.warningText}, ` +
            `CompletedTime: ${this.completedTime}, ` +
            `CompletedStatus: ${this.completedStatus}`;
        if (this.orderAllocations) {
            s += ' OrderAllocations(';
            for (const orderAllocation of this.orderAllocations) {
                s += orderAllocation.toString() + '; ';
            }
            s += ')';
        }
        return s;
    }
}
//# sourceMappingURL=order-state.js.map