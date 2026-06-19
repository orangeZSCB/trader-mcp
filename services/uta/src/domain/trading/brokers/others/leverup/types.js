/**
 * LeverupBroker types and network constants.
 *
 * Centralizes per-network addresses (Diamond, OneClickAgent, USDC, LVUSD, WMON)
 * and RPC URLs so the rest of the broker code reads them by network key only.
 */
export const NETWORK_CONSTANTS = {
    live: {
        chainId: 143,
        rpcUrl: 'https://rpc.monad.xyz/',
        diamond: '0xea1b8E4aB7f14F7dCA68c5B214303B13078FC5ec',
        oneClickAgent: '0x1567FB09f13653f63A047B4F11Fb11fD1D7567d0',
        usdc: '0x754704Bc059F8C67012fEd69BC8A327a5aafb603',
        lvusd: '0xFD44B35139Ae53FFF7d8F2A9869c503D987f00d1',
        wmon: '0x3bd359C1119dA7Da1D913D1C4D2B7c461115433A',
        relayerBase: 'https://oneclick-01-keeper.leverup.xyz',
        readerBase: 'https://service.leverup.xyz',
    },
    testnet: {
        chainId: 10143,
        rpcUrl: 'https://testnet-rpc.monad.xyz/',
        diamond: '0x1bA73F7ab65D9712D45BE5A8961a4609874f6D13',
        oneClickAgent: '0xd9d2ccF34E80906c6e132B755b0Ed591dc4A9938',
        usdc: '0xA1E873dFc5B1b69e268ab88de42E6e2090bc545a',
        lvusd: '0x76903262B1d4b70E3F2a5Af8Ed9F7E8Ace646Dcc',
        wmon: '0xFb8bf4c1CC7a94c73D209a149eA2AbEa852BC541',
        relayerBase: 'https://oneclick-01-keeper.leverup.xyz',
        readerBase: 'https://service.leverup.xyz',
    },
};
//# sourceMappingURL=types.js.map