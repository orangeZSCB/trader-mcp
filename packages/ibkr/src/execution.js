/**
 * Mirrors: ibapi/execution.py
 */
import { UNSET_DECIMAL, UNSET_INTEGER } from './const.js';
function floatMaxString(val) {
    return val === Number.MAX_VALUE ? '' : String(val);
}
function decimalMaxString(val) {
    return val.eq(UNSET_DECIMAL) ? '' : val.toString();
}
function intMaxString(val) {
    return val === UNSET_INTEGER ? '' : String(val);
}
function longMaxString(val) {
    return val === UNSET_INTEGER ? '' : String(val);
}
export const OptionExerciseType = {
    NoneItem: { value: -1, label: 'None' },
    Exercise: { value: 1, label: 'Exercise' },
    Lapse: { value: 2, label: 'Lapse' },
    DoNothing: { value: 3, label: 'DoNothing' },
    Assigned: { value: 100, label: 'Assigned ' },
    AutoexerciseClearing: { value: 101, label: 'AutoexerciseClearing' },
    Expired: { value: 102, label: 'Expired' },
    Netting: { value: 103, label: 'Netting' },
    AutoexerciseTrading: { value: 200, label: 'AutoexerciseTrading' },
};
function getOptionExerciseTypeName(entry) {
    for (const [key, val] of Object.entries(OptionExerciseType)) {
        if (val === entry)
            return key;
    }
    return 'Unknown';
}
export class Execution {
    execId = '';
    time = '';
    acctNumber = '';
    exchange = '';
    side = '';
    shares = UNSET_DECIMAL;
    price = 0.0;
    permId = 0;
    clientId = 0;
    orderId = 0;
    liquidation = 0;
    cumQty = UNSET_DECIMAL;
    avgPrice = 0.0;
    orderRef = '';
    evRule = '';
    evMultiplier = 0.0;
    modelCode = '';
    lastLiquidity = 0;
    pendingPriceRevision = false;
    submitter = '';
    optExerciseOrLapseType = OptionExerciseType.NoneItem;
    toString() {
        return (`ExecId: ${this.execId}, Time: ${this.time}, Account: ${this.acctNumber}, ` +
            `Exchange: ${this.exchange}, Side: ${this.side}, Shares: ${decimalMaxString(this.shares)}, ` +
            `Price: ${floatMaxString(this.price)}, PermId: ${longMaxString(this.permId)}, ` +
            `ClientId: ${intMaxString(this.clientId)}, OrderId: ${intMaxString(this.orderId)}, ` +
            `Liquidation: ${intMaxString(this.liquidation)}, CumQty: ${decimalMaxString(this.cumQty)}, ` +
            `AvgPrice: ${floatMaxString(this.avgPrice)}, OrderRef: ${this.orderRef}, ` +
            `EvRule: ${this.evRule}, EvMultiplier: ${floatMaxString(this.evMultiplier)}, ` +
            `ModelCode: ${this.modelCode}, LastLiquidity: ${intMaxString(this.lastLiquidity)}, ` +
            `PendingPriceRevision: ${this.pendingPriceRevision}, Submitter: ${this.submitter}, ` +
            `OptExerciseOrLapseType: ${getOptionExerciseTypeName(this.optExerciseOrLapseType)}`);
    }
}
export class ExecutionFilter {
    clientId = 0;
    acctCode = '';
    time = '';
    symbol = '';
    secType = '';
    exchange = '';
    side = '';
    lastNDays = UNSET_INTEGER;
    specificDates = null;
}
//# sourceMappingURL=execution.js.map