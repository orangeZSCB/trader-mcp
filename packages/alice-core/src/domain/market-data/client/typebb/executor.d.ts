/**
 * SDK Executor Singleton
 *
 * Creates and caches a QueryExecutor instance from OpenTypeBB.
 * The executor can call any of the 114 fetcher models across 11 providers
 * without HTTP overhead.
 */
import { type QueryExecutor } from '@traderalice/opentypebb';
export declare function getSDKExecutor(): QueryExecutor;
