/**
 * Broker Preset serialization layer.
 *
 * Reads BrokerPresetDef from preset-catalog.ts and converts each Zod
 * schema to a JSON Schema that the frontend can render via the
 * shared `useSchemaForm` hook (ui/src/hooks/useSchemaForm.ts).
 *
 * Mirrors src/ai-providers/presets.ts — same buildJsonSchema pipeline,
 * same writeOnly + oneOf-with-titles conventions for password inputs and
 * labeled dropdowns.
 */
import { z } from 'zod';
import { BROKER_PRESET_CATALOG } from './preset-catalog.js';
// ==================== Schema post-processing ====================
function buildJsonSchema(def) {
    const raw = z.toJSONSchema(def.zodSchema);
    const props = (raw.properties ?? {});
    // Mode field: render as labeled dropdown using preset.modes (label > id).
    if (def.modes?.length && props['mode']) {
        const oneOf = def.modes.map(m => ({ const: m.id, title: m.label }));
        const { enum: _e, ...rest } = props['mode'];
        props['mode'] = { ...rest, oneOf };
    }
    // writeOnly markers for password fields.
    for (const field of def.writeOnlyFields ?? []) {
        if (props[field])
            props[field].writeOnly = true;
    }
    raw.properties = props;
    return raw;
}
// ==================== Exported ====================
export const BUILTIN_BROKER_PRESETS = BROKER_PRESET_CATALOG.map(def => ({
    id: def.id,
    label: def.label,
    description: def.description,
    category: def.category,
    hint: def.hint,
    defaultName: def.defaultName,
    badge: def.badge,
    badgeColor: def.badgeColor,
    engine: def.engine,
    guardCategory: def.guardCategory,
    modes: def.modes,
    subtitleFields: def.subtitleFields,
    schema: buildJsonSchema(def),
}));
//# sourceMappingURL=presets.js.map