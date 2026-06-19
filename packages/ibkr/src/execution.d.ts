/**
 * Mirrors: ibapi/execution.py
 */
import Decimal from 'decimal.js';
export declare const OptionExerciseType: {
    readonly NoneItem: {
        readonly value: -1;
        readonly label: "None";
    };
    readonly Exercise: {
        readonly value: 1;
        readonly label: "Exercise";
    };
    readonly Lapse: {
        readonly value: 2;
        readonly label: "Lapse";
    };
    readonly DoNothing: {
        readonly value: 3;
        readonly label: "DoNothing";
    };
    readonly Assigned: {
        readonly value: 100;
        readonly label: "Assigned ";
    };
    readonly AutoexerciseClearing: {
        readonly value: 101;
        readonly label: "AutoexerciseClearing";
    };
    readonly Expired: {
        readonly value: 102;
        readonly label: "Expired";
    };
    readonly Netting: {
        readonly value: 103;
        readonly label: "Netting";
    };
    readonly AutoexerciseTrading: {
        readonly value: 200;
        readonly label: "AutoexerciseTrading";
    };
};
export type OptionExerciseTypeEntry = (typeof OptionExerciseType)[keyof typeof OptionExerciseType];
export declare class Execution {
    execId: string;
    time: string;
    acctNumber: string;
    exchange: string;
    side: string;
    shares: Decimal;
    price: number;
    permId: number;
    clientId: number;
    orderId: number;
    liquidation: number;
    cumQty: Decimal;
    avgPrice: number;
    orderRef: string;
    evRule: string;
    evMultiplier: number;
    modelCode: string;
    lastLiquidity: number;
    pendingPriceRevision: boolean;
    submitter: string;
    optExerciseOrLapseType: OptionExerciseTypeEntry;
    toString(): string;
}
export declare class ExecutionFilter {
    clientId: number;
    acctCode: string;
    time: string;
    symbol: string;
    secType: string;
    exchange: string;
    side: string;
    lastNDays: number;
    specificDates: string[] | null;
}
