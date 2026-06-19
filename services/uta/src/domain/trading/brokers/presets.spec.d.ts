/**
 * BROKER_PRESET_CATALOG round-trip tests.
 *
 * For every preset, ensure:
 *   1. A reasonable presetConfig sample passes the preset's zodSchema
 *   2. toEngineConfig(parsed) produces a dict accepted by the target
 *      engine's configSchema
 *   3. isPaper / default isPaper resolves predictably
 *
 * This catches drift between preset declarations and engine schemas
 * (e.g. a preset adding a field the engine doesn't know about).
 */
export {};
