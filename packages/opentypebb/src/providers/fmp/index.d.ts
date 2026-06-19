/**
 * FMP Provider Module.
 * Maps to: openbb_platform/providers/fmp/openbb_fmp/__init__.py
 *
 * Only includes fetchers that have been ported to TypeScript.
 * The Python version has ~70 fetchers; we port only what open-alice uses.
 */
import { Provider } from '../../core/provider/abstract/provider.js';
export declare const fmpProvider: Provider;
