/**
 * Mirrors: ibapi/order_state.py
 */
import Decimal from 'decimal.js';
export declare class OrderAllocation {
    account: string;
    position: Decimal;
    positionDesired: Decimal;
    positionAfter: Decimal;
    desiredAllocQty: Decimal;
    allowedAllocQty: Decimal;
    isMonetary: boolean;
    toString(): string;
}
export declare class OrderState {
    status: string;
    initMarginBefore: string;
    maintMarginBefore: string;
    equityWithLoanBefore: string;
    initMarginChange: string;
    maintMarginChange: string;
    equityWithLoanChange: string;
    initMarginAfter: string;
    maintMarginAfter: string;
    equityWithLoanAfter: string;
    commissionAndFees: number;
    minCommissionAndFees: number;
    maxCommissionAndFees: number;
    commissionAndFeesCurrency: string;
    marginCurrency: string;
    initMarginBeforeOutsideRTH: number;
    maintMarginBeforeOutsideRTH: number;
    equityWithLoanBeforeOutsideRTH: number;
    initMarginChangeOutsideRTH: number;
    maintMarginChangeOutsideRTH: number;
    equityWithLoanChangeOutsideRTH: number;
    initMarginAfterOutsideRTH: number;
    maintMarginAfterOutsideRTH: number;
    equityWithLoanAfterOutsideRTH: number;
    suggestedSize: Decimal;
    rejectReason: string;
    orderAllocations: OrderAllocation[] | null;
    warningText: string;
    completedTime: string;
    completedStatus: string;
    toString(): string;
}
