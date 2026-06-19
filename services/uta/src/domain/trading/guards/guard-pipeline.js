/**
 * Guard Pipeline
 *
 * The only place that touches the account: assembles a GuardContext,
 * then passes it through the guard chain. Guards themselves never
 * see the account.
 */
export function createGuardPipeline(dispatcher, account, guards) {
    if (guards.length === 0)
        return dispatcher;
    return async (op) => {
        const [positions, accountInfo] = await Promise.all([
            account.getPositions(),
            account.getAccount(),
        ]);
        const ctx = { operation: op, positions, account: accountInfo };
        for (const guard of guards) {
            const rejection = await guard.check(ctx);
            if (rejection != null) {
                return { success: false, error: `[guard:${guard.name}] ${rejection}` };
            }
        }
        return dispatcher(op);
    };
}
//# sourceMappingURL=guard-pipeline.js.map