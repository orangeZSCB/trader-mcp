/**
 * Helper for e2e tests — checks if TWS/IB Gateway is reachable.
 * If not, tests in the suite are skipped instead of failing.
 */
declare const TWS_HOST: string;
declare const TWS_PORT: number;
export { TWS_HOST, TWS_PORT };
export declare function isTwsAvailable(host?: string, port?: number, timeoutMs?: number): Promise<boolean>;
