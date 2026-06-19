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
export class OBBject {
    results;
    provider;
    warnings;
    chart;
    extra;
    // Private metadata (matches Python's PrivateAttr fields)
    _route = null;
    _standardParams = null;
    _extraParams = null;
    constructor(data = {}) {
        this.results = data.results ?? null;
        this.provider = data.provider ?? null;
        this.warnings = data.warnings ?? null;
        this.chart = data.chart ?? null;
        this.extra = data.extra ?? {};
    }
    /** Set route metadata. */
    setRoute(route) {
        this._route = route;
        return this;
    }
    /** Set standard params metadata. */
    setStandardParams(params) {
        this._standardParams = params;
        return this;
    }
    /** Set extra params metadata. */
    setExtraParams(params) {
        this._extraParams = params;
        return this;
    }
    /** Get route metadata. */
    get route() {
        return this._route;
    }
    /** JSON-serializable representation for HTTP responses. */
    toJSON() {
        return {
            results: this.results,
            provider: this.provider,
            warnings: this.warnings,
            chart: this.chart,
            extra: this.extra,
        };
    }
    /**
     * Create OBBject from query execution result.
     * Maps to: OBBject.from_query() in obbject.py
     *
     * In the simplified TypeScript version, this directly wraps
     * the fetcher result rather than going through the full
     * Query → ProviderInterface → CommandRunner pipeline.
     */
    static fromResults(results, provider, extra) {
        return new OBBject({
            results,
            provider,
            extra,
        });
    }
}
//# sourceMappingURL=obbject.js.map