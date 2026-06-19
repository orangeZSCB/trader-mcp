/**
 * Mirrors: ibapi/order_condition.py
 */
import { UNSET_DOUBLE } from './const.js';
// Helper to pull next value from an iterator
function nextField(fields) {
    const r = fields.next();
    if (r.done)
        throw new Error('unexpected end');
    return r.value;
}
function decodeBool(fields) {
    return parseInt(nextField(fields), 10) !== 0;
}
function decodeInt(fields) {
    return parseInt(nextField(fields), 10);
}
function decodeStr(fields) {
    return nextField(fields);
}
function makeField(val) {
    if (typeof val === 'boolean')
        return val ? '1' : '0';
    return String(val ?? '');
}
export class OrderCondition {
    static Price = 1;
    static Time = 3;
    static Margin = 4;
    static Execution = 5;
    static Volume = 6;
    static PercentChange = 7;
    condType;
    isConjunctionConnection = true;
    constructor(condType) {
        this.condType = condType;
    }
    type() {
        return this.condType;
    }
    And() {
        this.isConjunctionConnection = true;
        return this;
    }
    Or() {
        this.isConjunctionConnection = false;
        return this;
    }
    decode(fields) {
        const connector = decodeStr(fields);
        this.isConjunctionConnection = connector === 'a';
    }
    makeFields() {
        return [makeField(this.isConjunctionConnection ? 'a' : 'o')];
    }
    toString() {
        return this.isConjunctionConnection ? '<AND>' : '<OR>';
    }
}
export class ExecutionCondition extends OrderCondition {
    secType;
    exchange;
    symbol;
    constructor(secType = null, exch = null, symbol = null) {
        super(OrderCondition.Execution);
        this.secType = secType;
        this.exchange = exch;
        this.symbol = symbol;
    }
    decode(fields) {
        super.decode(fields);
        this.secType = decodeStr(fields);
        this.exchange = decodeStr(fields);
        this.symbol = decodeStr(fields);
    }
    makeFields() {
        return [
            ...super.makeFields(),
            makeField(this.secType),
            makeField(this.exchange),
            makeField(this.symbol),
        ];
    }
    toString() {
        return ('trade occurs for ' +
            this.symbol +
            ' symbol on ' +
            this.exchange +
            ' exchange for ' +
            this.secType +
            ' security type');
    }
}
export class OperatorCondition extends OrderCondition {
    isMore;
    constructor(condType = null, isMore = null) {
        super(condType ?? 0);
        this.isMore = isMore;
    }
    decode(fields) {
        super.decode(fields);
        this.isMore = decodeBool(fields);
        const text = decodeStr(fields);
        this.setValueFromString(text);
    }
    makeFields() {
        return [
            ...super.makeFields(),
            makeField(this.isMore),
            makeField(this.valueToString()),
        ];
    }
    toString() {
        const sb = this.isMore ? '>= ' : '<= ';
        return ` ${sb} ${this.valueToString()}`;
    }
}
export class MarginCondition extends OperatorCondition {
    percent;
    constructor(isMore = null, percent = null) {
        super(OrderCondition.Margin, isMore);
        this.percent = percent;
    }
    decode(fields) {
        super.decode(fields);
    }
    makeFields() {
        return super.makeFields();
    }
    valueToString() {
        return String(this.percent);
    }
    setValueFromString(text) {
        this.percent = parseFloat(text);
    }
    toString() {
        return `the margin cushion percent ${OperatorCondition.prototype.toString.call(this)} `;
    }
}
export class ContractCondition extends OperatorCondition {
    conId;
    exchange;
    constructor(condType = null, conId = null, exch = null, isMore = null) {
        super(condType, isMore);
        this.conId = conId;
        this.exchange = exch;
    }
    decode(fields) {
        super.decode(fields);
        this.conId = decodeInt(fields);
        this.exchange = decodeStr(fields);
    }
    makeFields() {
        return [
            ...super.makeFields(),
            makeField(this.conId),
            makeField(this.exchange),
        ];
    }
    valueToString() {
        return '';
    }
    setValueFromString(_text) {
        // todo
    }
    toString() {
        return `${this.conId} on ${this.exchange} is ${OperatorCondition.prototype.toString.call(this)} `;
    }
}
export class TimeCondition extends OperatorCondition {
    time;
    constructor(isMore = null, time = null) {
        super(OrderCondition.Time, isMore);
        this.time = time;
    }
    decode(fields) {
        super.decode(fields);
    }
    makeFields() {
        return super.makeFields();
    }
    valueToString() {
        return this.time ?? '';
    }
    setValueFromString(text) {
        this.time = text;
    }
    toString() {
        return `time is ${OperatorCondition.prototype.toString.call(this)} `;
    }
}
export const TriggerMethodEnum = {
    Default: 0,
    DoubleBidAsk: 1,
    Last: 2,
    DoubleLast: 3,
    BidAsk: 4,
    'N/A1': 5,
    'N/A2': 6,
    LastBidAsk: 7,
    MidPoint: 8,
};
const TriggerMethodNames = [
    'Default',
    'DoubleBidAsk',
    'Last',
    'DoubleLast',
    'BidAsk',
    'N/A1',
    'N/A2',
    'LastBidAsk',
    'MidPoint',
];
export class PriceCondition extends ContractCondition {
    price;
    triggerMethod;
    constructor(triggerMethod = null, conId = null, exch = null, isMore = null, price = null) {
        super(OrderCondition.Price, conId, exch, isMore);
        this.price = price;
        this.triggerMethod = triggerMethod;
    }
    decode(fields) {
        super.decode(fields);
        this.triggerMethod = decodeInt(fields);
    }
    makeFields() {
        return [
            ...super.makeFields(),
            makeField(this.triggerMethod),
        ];
    }
    valueToString() {
        return String(this.price);
    }
    setValueFromString(text) {
        this.price = parseFloat(text);
    }
    toString() {
        const methodName = TriggerMethodNames[this.triggerMethod ?? 0] ?? String(this.triggerMethod);
        return `${methodName} price of ${ContractCondition.prototype.toString.call(this)} `;
    }
}
export class PercentChangeCondition extends ContractCondition {
    changePercent;
    constructor(conId = null, exch = null, isMore = null, changePercent = UNSET_DOUBLE) {
        super(OrderCondition.PercentChange, conId, exch, isMore);
        this.changePercent = changePercent;
    }
    decode(fields) {
        super.decode(fields);
    }
    makeFields() {
        return super.makeFields();
    }
    valueToString() {
        return String(this.changePercent);
    }
    setValueFromString(text) {
        this.changePercent = parseFloat(text);
    }
    toString() {
        return `percent change of ${ContractCondition.prototype.toString.call(this)} `;
    }
}
export class VolumeCondition extends ContractCondition {
    volume;
    constructor(conId = null, exch = null, isMore = null, volume = null) {
        super(OrderCondition.Volume, conId, exch, isMore);
        this.volume = volume;
    }
    decode(fields) {
        super.decode(fields);
    }
    makeFields() {
        return super.makeFields();
    }
    valueToString() {
        return String(this.volume);
    }
    setValueFromString(text) {
        this.volume = parseInt(text, 10);
    }
    toString() {
        return `volume of ${ContractCondition.prototype.toString.call(this)} `;
    }
}
export function Create(condType) {
    switch (condType) {
        case OrderCondition.Execution:
            return new ExecutionCondition();
        case OrderCondition.Margin:
            return new MarginCondition();
        case OrderCondition.PercentChange:
            return new PercentChangeCondition();
        case OrderCondition.Price:
            return new PriceCondition();
        case OrderCondition.Time:
            return new TimeCondition();
        case OrderCondition.Volume:
            return new VolumeCondition();
        default:
            return null;
    }
}
//# sourceMappingURL=order-condition.js.map