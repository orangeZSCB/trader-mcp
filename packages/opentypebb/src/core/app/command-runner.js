/**
 * Command Runner.
 * Maps to: openbb_core/app/command_runner.py
 *
 * In Python, CommandRunner orchestrates:
 *   1. ParametersBuilder.build() — validate & coerce params
 *   2. Execute the command function
 *   3. Attach metadata (duration, route, timestamp)
 *   4. Trigger on_command_output callbacks
 *
 * In TypeScript, this is simplified since we don't have FastAPI's
 * dependency injection system. The command is just a function that
 * creates a Query and executes it.
 */
import { Query } from './query.js';
export class CommandRunner {
    executor;
    constructor(executor) {
        this.executor = executor;
    }
    /**
     * Run a command by creating and executing a Query.
     */
    async run(config) {
        const query = new Query(this.executor, config);
        return query.execute();
    }
}
//# sourceMappingURL=command-runner.js.map