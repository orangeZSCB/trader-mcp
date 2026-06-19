/**
 * Read-only data sources for LeverUp.
 *
 * Two surfaces:
 *  1. service.leverup.xyz REST — paginated user positions (mainnet only;
 *     testnet uses api-testnet.leverup.xyz, but the prod base swap is
 *     handled at the network-constants layer).
 *  2. Monad RPC via viem PublicClient — USDC.balanceOf, plus future on-chain
 *     reads if needed.
 *
 * REST is preferred for positions because it's already indexed/paginated;
 * chain reads are reserved for things REST doesn't expose (USDC balance).
 */
import { createPublicClient, http, parseAbi } from 'viem';
// Minimal ERC-20 ABI fragment for balanceOf
const ERC20_ABI = parseAbi([
    'function balanceOf(address) view returns (uint256)',
    'function decimals() view returns (uint8)',
]);
export class ReaderClient {
    publicClient;
    net;
    constructor(net) {
        this.net = net;
        this.publicClient = createPublicClient({
            transport: http(net.rpcUrl),
        });
    }
    // ---- REST ----
    /** Fetch up to `limit` open positions for `userAddress`. */
    async fetchOpenPositions(userAddress, limit = 100) {
        const url = `${this.net.readerBase}/v1/user/${userAddress}/positions?size=${limit}&page=0`;
        const res = await fetch(url);
        if (!res.ok) {
            const body = await res.text().catch(() => '');
            throw new Error(`Reader REST failed (${res.status}): ${body.slice(0, 200)}`);
        }
        const page = (await res.json());
        return (page.content ?? []).filter(p => p.status === 'OPEN');
    }
    // ---- Chain reads ----
    async getUsdcBalance(address) {
        return this.publicClient.readContract({
            address: this.net.usdc,
            abi: ERC20_ABI,
            functionName: 'balanceOf',
            args: [address],
        });
    }
    async getUsdcDecimals() {
        const decimals = await this.publicClient.readContract({
            address: this.net.usdc,
            abi: ERC20_ABI,
            functionName: 'decimals',
        });
        return decimals;
    }
}
//# sourceMappingURL=reader-client.js.map