/**
 * Agent-boundary compaction for trading tool outputs.
 *
 * The wire shapes are IBKR-superset objects: an Order serializes to ~120
 * fields, most carrying UNSET sentinels (1.7976931348623157e+308,
 * 2147483647, 1.70141…e+38 Decimal max). For an LLM that's not just token
 * waste — sentinels READ AS DATA ("minQty: 2147483647" looks like a real
 * constraint) and actively mislead analysis. Principle at this boundary:
 * **unset = absent**. Only fields that carry information leave the tool.
 *
 * Tolerant of all three value forms the SDK can hand us (Decimal instance,
 * Decimal-as-string, plain number) because rehydration depth varies by
 * call path.
 */
/** Normalize a maybe-Decimal/string/number to a string, or undefined when
 *  it's an UNSET sentinel / empty. */
export declare function val(v: unknown): string | undefined;
/** val() + decimal-place cap (display precision for money fields the AI
 *  reads but never feeds back into order entry). */
export declare function money(v: unknown, dp?: number): string | undefined;
/** val() with a looser cap for prices/costs (crypto needs sub-cent). */
export declare function price(v: unknown): string | undefined;
type AnyRec = Record<string, unknown>;
/** Contract → only the fields that identify the instrument (IBKR superset:
 *  derivative fields ride along exactly when set). */
export declare function compactContract(c: unknown): AnyRec;
/** Order → the set fields only (the ~115 others are IBKR defaults). */
export declare function compactOrderFields(o: unknown): AnyRec;
/** Operation (staged / committed) → human-scale summary. */
export declare function compactOperation(op: unknown): AnyRec;
/** OperationResult → status + execution data; never the raw echo or the
 *  120-field orderState. The reject reason is the one orderState field
 *  that carries signal. */
export declare function compactResult(r: unknown): AnyRec;
/** GitStatus → staged ops compacted; scalars pass through. */
export declare function compactStatus(status: unknown): AnyRec;
/** AddResult (stage echo) → confirmation, not a serialization dump. */
export declare function compactStageResult(r: unknown): AnyRec;
/** PushResult → per-op outcomes without raw/orderState noise. */
export declare function compactPushResult(r: unknown): AnyRec;
/** GitCommit (tradingShow) → ops + results compacted; stateAfter collapsed
 *  to the account-level numbers + counts (the full position/order arrays
 *  are reachable via getPortfolio/getOrders when actually needed). */
export declare function compactCommit(commit: unknown): AnyRec;
/** ContractDetails → contract compacted + primitive fields that carry
 *  signal (generic sentinel sweep over scalars; nested IBKR noise dropped). */
export declare function compactContractDetails(details: unknown): AnyRec;
/** AccountInfo → 2dp money (display precision; the ledger keeps full). */
export declare function compactAccountInfo(info: unknown): AnyRec;
export {};
