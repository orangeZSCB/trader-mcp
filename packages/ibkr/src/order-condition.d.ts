/**
 * Mirrors: ibapi/order_condition.py
 */
export declare class OrderCondition {
    static readonly Price = 1;
    static readonly Time = 3;
    static readonly Margin = 4;
    static readonly Execution = 5;
    static readonly Volume = 6;
    static readonly PercentChange = 7;
    condType: number;
    isConjunctionConnection: boolean;
    constructor(condType: number);
    type(): number;
    And(): this;
    Or(): this;
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    toString(): string;
}
export declare class ExecutionCondition extends OrderCondition {
    secType: string | null;
    exchange: string | null;
    symbol: string | null;
    constructor(secType?: string | null, exch?: string | null, symbol?: string | null);
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    toString(): string;
}
export declare abstract class OperatorCondition extends OrderCondition {
    isMore: boolean | null;
    constructor(condType?: number | null, isMore?: boolean | null);
    abstract valueToString(): string;
    abstract setValueFromString(text: string): void;
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    toString(): string;
}
export declare class MarginCondition extends OperatorCondition {
    percent: number | null;
    constructor(isMore?: boolean | null, percent?: number | null);
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    valueToString(): string;
    setValueFromString(text: string): void;
    toString(): string;
}
export declare class ContractCondition extends OperatorCondition {
    conId: number | null;
    exchange: string | null;
    constructor(condType?: number | null, conId?: number | null, exch?: string | null, isMore?: boolean | null);
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    valueToString(): string;
    setValueFromString(_text: string): void;
    toString(): string;
}
export declare class TimeCondition extends OperatorCondition {
    time: string | null;
    constructor(isMore?: boolean | null, time?: string | null);
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    valueToString(): string;
    setValueFromString(text: string): void;
    toString(): string;
}
export declare const TriggerMethodEnum: {
    readonly Default: 0;
    readonly DoubleBidAsk: 1;
    readonly Last: 2;
    readonly DoubleLast: 3;
    readonly BidAsk: 4;
    readonly 'N/A1': 5;
    readonly 'N/A2': 6;
    readonly LastBidAsk: 7;
    readonly MidPoint: 8;
};
export declare class PriceCondition extends ContractCondition {
    price: number | null;
    triggerMethod: number | null;
    constructor(triggerMethod?: number | null, conId?: number | null, exch?: string | null, isMore?: boolean | null, price?: number | null);
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    valueToString(): string;
    setValueFromString(text: string): void;
    toString(): string;
}
export declare class PercentChangeCondition extends ContractCondition {
    changePercent: number;
    constructor(conId?: number | null, exch?: string | null, isMore?: boolean | null, changePercent?: number);
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    valueToString(): string;
    setValueFromString(text: string): void;
    toString(): string;
}
export declare class VolumeCondition extends ContractCondition {
    volume: number | null;
    constructor(conId?: number | null, exch?: string | null, isMore?: boolean | null, volume?: number | null);
    decode(fields: Iterator<string>): void;
    makeFields(): string[];
    valueToString(): string;
    setValueFromString(text: string): void;
    toString(): string;
}
export declare function Create(condType: number): OrderCondition | null;
