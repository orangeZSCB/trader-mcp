/**
 * Request metadata for tracking query execution.
 * Maps to metadata attached in command_runner.py's _execute_func.
 */
/**
 * Create request metadata for a query execution.
 */
export function createMetadata(route, args, startTime) {
    return {
        route,
        arguments: args,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
    };
}
//# sourceMappingURL=metadata.js.map