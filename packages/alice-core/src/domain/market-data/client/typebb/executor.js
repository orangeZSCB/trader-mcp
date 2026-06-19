/**
 * SDK Executor Singleton
 *
 * Creates and caches a QueryExecutor instance from OpenTypeBB.
 * The executor can call any of the 114 fetcher models across 11 providers
 * without HTTP overhead.
 */
import { createExecutor } from '@traderalice/opentypebb';
let _executor = null;
export function getSDKExecutor() {
    if (!_executor)
        _executor = createExecutor();
    return _executor;
}
//# sourceMappingURL=executor.js.map