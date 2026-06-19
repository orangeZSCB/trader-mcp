/**
 * Decoder module — assembles base + all handler groups.
 *
 * Usage:
 *   import { Decoder, applyAllHandlers } from './decoder'
 *   const decoder = new Decoder(wrapper, serverVersion)
 *   applyAllHandlers(decoder)
 */
import { Decoder } from './base.js';
export declare function applyAllHandlers(decoder: Decoder): void;
export { Decoder };
