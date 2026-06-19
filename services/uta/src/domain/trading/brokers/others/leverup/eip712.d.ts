/**
 * EIP-712 typed-data signing for LeverUp One-Click Trading.
 *
 * NOTE — type-definition ambiguity: LeverUp's API doc has two conflicting
 * versions of the EIP-712 schema (a flat `OneClickOpenPosition` in the
 * prose body and a nested `OneClickOpenDataInput` in the viem code example).
 * We export both. The broker tries the nested version first (matches the
 * executable code example, more idiomatic); if the relayer rejects the
 * signature, fall back to flat. Once a real testnet round-trip confirms
 * which is correct, the loser gets deleted (see TODO.md).
 */
import { type PrivateKeyAccount } from 'viem/accounts';
export interface OpenDataInput {
    pairBase: `0x${string}`;
    isLong: boolean;
    tokenIn: `0x${string}`;
    lvToken: `0x${string}`;
    amountIn: bigint;
    qty: bigint;
    price: bigint;
    stopLoss: bigint;
    takeProfit: bigint;
    broker: number;
}
export interface OpenPositionMessage {
    openData: OpenDataInput;
    trader: `0x${string}`;
    salt: `0x${string}`;
    deadline: bigint;
}
export interface ClosePositionMessage {
    positionHash: `0x${string}`;
    deadline: bigint;
}
export declare function buildDomain(chainId: number, oneClickAgent: `0x${string}`): {
    readonly name: "OneClickAgent";
    readonly version: "1";
    readonly chainId: number;
    readonly verifyingContract: `0x${string}`;
};
export declare const OPEN_TYPES_NESTED: {
    readonly OneClickOpenDataInput: readonly [{
        readonly name: "openData";
        readonly type: "OpenDataInput";
    }, {
        readonly name: "trader";
        readonly type: "address";
    }, {
        readonly name: "salt";
        readonly type: "bytes32";
    }, {
        readonly name: "deadline";
        readonly type: "uint128";
    }];
    readonly OpenDataInput: readonly [{
        readonly name: "pairBase";
        readonly type: "address";
    }, {
        readonly name: "isLong";
        readonly type: "bool";
    }, {
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly name: "lvToken";
        readonly type: "address";
    }, {
        readonly name: "amountIn";
        readonly type: "uint96";
    }, {
        readonly name: "qty";
        readonly type: "uint128";
    }, {
        readonly name: "price";
        readonly type: "uint128";
    }, {
        readonly name: "stopLoss";
        readonly type: "uint128";
    }, {
        readonly name: "takeProfit";
        readonly type: "uint128";
    }, {
        readonly name: "broker";
        readonly type: "uint24";
    }];
};
export declare const OPEN_PRIMARY_TYPE_NESTED: "OneClickOpenDataInput";
export declare const OPEN_TYPES_FLAT: {
    readonly OneClickOpenPosition: readonly [{
        readonly name: "pairBase";
        readonly type: "address";
    }, {
        readonly name: "isLong";
        readonly type: "bool";
    }, {
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly name: "lvToken";
        readonly type: "address";
    }, {
        readonly name: "amountIn";
        readonly type: "uint96";
    }, {
        readonly name: "qty";
        readonly type: "uint128";
    }, {
        readonly name: "price";
        readonly type: "uint128";
    }, {
        readonly name: "stopLoss";
        readonly type: "uint128";
    }, {
        readonly name: "takeProfit";
        readonly type: "uint128";
    }, {
        readonly name: "broker";
        readonly type: "uint24";
    }, {
        readonly name: "trader";
        readonly type: "address";
    }, {
        readonly name: "salt";
        readonly type: "bytes32";
    }, {
        readonly name: "deadline";
        readonly type: "uint128";
    }];
};
export declare const OPEN_PRIMARY_TYPE_FLAT: "OneClickOpenPosition";
export declare const CLOSE_TYPES_NESTED: {
    readonly OneClickCloseDataInput: readonly [{
        readonly name: "positionHash";
        readonly type: "bytes32";
    }, {
        readonly name: "deadline";
        readonly type: "uint128";
    }];
};
export declare const CLOSE_PRIMARY_TYPE_NESTED: "OneClickCloseDataInput";
export declare const CLOSE_TYPES_FLAT: {
    readonly OneClickClosePosition: readonly [{
        readonly name: "positionHash";
        readonly type: "bytes32";
    }, {
        readonly name: "deadline";
        readonly type: "uint128";
    }];
};
export declare const CLOSE_PRIMARY_TYPE_FLAT: "OneClickClosePosition";
/** Generate a unique 32-byte salt for an open-position request. */
export declare function generateOpenSalt(): `0x${string}`;
export type SchemaVariant = 'nested' | 'flat';
export interface SignOpenInput {
    account: PrivateKeyAccount;
    chainId: number;
    oneClickAgent: `0x${string}`;
    message: OpenPositionMessage;
    variant?: SchemaVariant;
}
export declare function signOpenPosition(input: SignOpenInput): Promise<`0x${string}`>;
export interface SignCloseInput {
    account: PrivateKeyAccount;
    chainId: number;
    oneClickAgent: `0x${string}`;
    message: ClosePositionMessage;
    variant?: SchemaVariant;
}
export declare function signClosePosition(input: SignCloseInput): Promise<`0x${string}`>;
export declare function accountFromPrivateKey(privateKey: `0x${string}`): PrivateKeyAccount;
