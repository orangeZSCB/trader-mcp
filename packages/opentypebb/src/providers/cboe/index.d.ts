/**
 * CBOE Provider Module.
 * Maps to: openbb_platform/providers/cboe/openbb_cboe/__init__.py
 *
 * We only implement IndexSearch here. The full CBOE provider in Python
 * has 11 endpoints, but we only need the missing ones.
 */
import { Provider } from '../../core/provider/abstract/provider.js';
export declare const cboeProvider: Provider;
