/**
 * OBBject — the universal response envelope.
 * Maps to: openbb_core/app/model/obbject.py
 *
 * In Python, OBBject is a Generic[T] Pydantic model with:
 *   results: T | None
 *   provider: str | None
 *   warnings: List[Warning_] | None
 *   chart: Chart | None
 *   extra: Dict[str, Any]
 *
 * It also has from_query() classmethod, to_dataframe(), to_dict(), etc.
 * In TypeScript, we skip the DataFrame/Polars/NumPy conversion methods.
 */
export interface Warning {
    category: string;
    message: string;
}
export interface OBBjectData<T> {
    results: T[] | null;
    provider: string | null;
    warnings: Warning[] | null;
    chart: unknown | null;
    extra: Record<string, unknown>;
}
export declare class OBBject<T> {
    results: T[] | null;
    provider: string | null;
    warnings: Warning[] | null;
    chart: unknown | null;
    extra: Record<string, unknown>;
    private _route;
    private _standardParams;
    private _extraParams;
    constructor(data?: Partial<OBBjectData<T>>);
    /** Set route metadata. */
    setRoute(route: string): this;
    /** Set standard params metadata. */
    setStandardParams(params: Record<string, unknown>): this;
    /** Set extra params metadata. */
    setExtraParams(params: Record<string, unknown>): this;
    /** Get route metadata. */
    get route(): string | null;
    /** JSON-serializable representation for HTTP responses. */
    toJSON(): OBBjectData<T>;
    /**
     * Create OBBject from query execution result.
     * Maps to: OBBject.from_query() in obbject.py
     *
     * In the simplified TypeScript version, this directly wraps
     * the fetcher result rather than going through the full
     * Query → ProviderInterface → CommandRunner pipeline.
     */
    static fromResults<R>(results: R[], provider: string, extra?: Record<string, unknown>): OBBject<R>;
}
