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
import { keccak256, stringToHex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
// ---- Domain ----
export function buildDomain(chainId, oneClickAgent) {
    return {
        name: 'OneClickAgent',
        version: '1',
        chainId,
        verifyingContract: oneClickAgent,
    };
}
// ---- Type definitions: Open Position (nested — matches viem code example) ----
export const OPEN_TYPES_NESTED = {
    OneClickOpenDataInput: [
        { name: 'openData', type: 'OpenDataInput' },
        { name: 'trader', type: 'address' },
        { name: 'salt', type: 'bytes32' },
        { name: 'deadline', type: 'uint128' },
    ],
    OpenDataInput: [
        { name: 'pairBase', type: 'address' },
        { name: 'isLong', type: 'bool' },
        { name: 'tokenIn', type: 'address' },
        { name: 'lvToken', type: 'address' },
        { name: 'amountIn', type: 'uint96' },
        { name: 'qty', type: 'uint128' },
        { name: 'price', type: 'uint128' },
        { name: 'stopLoss', type: 'uint128' },
        { name: 'takeProfit', type: 'uint128' },
        { name: 'broker', type: 'uint24' },
    ],
};
export const OPEN_PRIMARY_TYPE_NESTED = 'OneClickOpenDataInput';
// ---- Type definitions: Open Position (flat — matches doc prose body) ----
export const OPEN_TYPES_FLAT = {
    OneClickOpenPosition: [
        { name: 'pairBase', type: 'address' },
        { name: 'isLong', type: 'bool' },
        { name: 'tokenIn', type: 'address' },
        { name: 'lvToken', type: 'address' },
        { name: 'amountIn', type: 'uint96' },
        { name: 'qty', type: 'uint128' },
        { name: 'price', type: 'uint128' },
        { name: 'stopLoss', type: 'uint128' },
        { name: 'takeProfit', type: 'uint128' },
        { name: 'broker', type: 'uint24' },
        { name: 'trader', type: 'address' },
        { name: 'salt', type: 'bytes32' },
        { name: 'deadline', type: 'uint128' },
    ],
};
export const OPEN_PRIMARY_TYPE_FLAT = 'OneClickOpenPosition';
// ---- Type definitions: Close Position ----
export const CLOSE_TYPES_NESTED = {
    OneClickCloseDataInput: [
        { name: 'positionHash', type: 'bytes32' },
        { name: 'deadline', type: 'uint128' },
    ],
};
export const CLOSE_PRIMARY_TYPE_NESTED = 'OneClickCloseDataInput';
export const CLOSE_TYPES_FLAT = {
    OneClickClosePosition: [
        { name: 'positionHash', type: 'bytes32' },
        { name: 'deadline', type: 'uint128' },
    ],
};
export const CLOSE_PRIMARY_TYPE_FLAT = 'OneClickClosePosition';
// ---- Salt ----
/** Generate a unique 32-byte salt for an open-position request. */
export function generateOpenSalt() {
    return keccak256(stringToHex(`leverup-1ct-open:${Date.now()}:${Math.random()}`));
}
export async function signOpenPosition(input) {
    const { account, chainId, oneClickAgent, message, variant = 'nested' } = input;
    const domain = buildDomain(chainId, oneClickAgent);
    if (variant === 'nested') {
        return account.signTypedData({
            domain,
            types: OPEN_TYPES_NESTED,
            primaryType: OPEN_PRIMARY_TYPE_NESTED,
            message,
        });
    }
    // Flat variant: hoist openData fields up
    const flat = {
        ...message.openData,
        trader: message.trader,
        salt: message.salt,
        deadline: message.deadline,
    };
    return account.signTypedData({
        domain,
        types: OPEN_TYPES_FLAT,
        primaryType: OPEN_PRIMARY_TYPE_FLAT,
        message: flat,
    });
}
export async function signClosePosition(input) {
    const { account, chainId, oneClickAgent, message, variant = 'nested' } = input;
    const domain = buildDomain(chainId, oneClickAgent);
    if (variant === 'nested') {
        return account.signTypedData({
            domain,
            types: CLOSE_TYPES_NESTED,
            primaryType: CLOSE_PRIMARY_TYPE_NESTED,
            message,
        });
    }
    return account.signTypedData({
        domain,
        types: CLOSE_TYPES_FLAT,
        primaryType: CLOSE_PRIMARY_TYPE_FLAT,
        message,
    });
}
// ---- Account loading ----
export function accountFromPrivateKey(privateKey) {
    return privateKeyToAccount(privateKey);
}
//# sourceMappingURL=eip712.js.map