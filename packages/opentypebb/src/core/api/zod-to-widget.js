/**
 * Zod-to-Widget — introspect Zod schemas to generate OpenBB Workspace widget params and column defs.
 *
 * The Python version parses OpenAPI specs (auto-generated from Pydantic models).
 * In TypeScript we skip OpenAPI and read Zod schemas directly via `.shape`.
 */
import { ZodOptional, ZodDefault, ZodNullable, ZodEnum, ZodNativeEnum } from 'zod';
// Strings that should always be uppercased in labels
const TO_CAPS = new Set([
    'pe', 'pb', 'ps', 'pcf', 'peg', 'eps', 'ebitda', 'ebitdar', 'ebit',
    'roa', 'roe', 'roi', 'roic', 'wacc', 'cik', 'lei', 'cusip', 'isin',
    'sedol', 'ip', 'gdp', 'cpi', 'ppi', 'pce', 'ipo', 'etf', 'sec',
    'fred', 'oecd', 'imf', 'ecb', 'bls', 'eia', 'url', 'sp', 'ny',
    'us', 'uk', 'id', 'sic', 'irs', 'esg',
]);
/**
 * Convert a snake_case or camelCase field name to a human-readable label.
 * e.g. "start_date" → "Start Date", "eps" → "EPS"
 */
function fieldNameToLabel(name) {
    const words = name
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .split(/[_\s]+/);
    return words
        .map((w) => {
        const lower = w.toLowerCase();
        if (TO_CAPS.has(lower))
            return lower.toUpperCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
        .join(' ');
}
/**
 * Unwrap ZodOptional / ZodDefault / ZodNullable to get the inner type.
 * Returns { inner, isOptional, defaultValue }.
 */
function unwrapZodType(zodType) {
    let current = zodType;
    let isOptional = false;
    let defaultValue = undefined;
    // Peel off wrappers in any order
    let changed = true;
    while (changed) {
        changed = false;
        if (current instanceof ZodOptional) {
            isOptional = true;
            current = current.unwrap();
            changed = true;
        }
        if (current instanceof ZodDefault) {
            defaultValue = current._def.defaultValue();
            current = current._def.innerType;
            changed = true;
        }
        if (current instanceof ZodNullable) {
            isOptional = true;
            current = current.unwrap();
            changed = true;
        }
    }
    return { inner: current, isOptional, defaultValue };
}
/** Map Zod type names to widget param types. */
function zodTypeToWidgetType(inner, fieldName) {
    const typeName = inner._def.typeName;
    // Date-like field names get "date" type
    if (fieldName.includes('date') || fieldName.includes('_date')) {
        return 'date';
    }
    switch (typeName) {
        case 'ZodString':
            return 'text';
        case 'ZodNumber':
        case 'ZodBigInt':
            return 'number';
        case 'ZodBoolean':
            return 'boolean';
        case 'ZodEnum':
        case 'ZodNativeEnum':
            return 'text'; // will have options
        default:
            return 'text';
    }
}
/** Map Zod type names to AG-Grid cell data types. */
function zodTypeToColumnType(inner, fieldName) {
    const typeName = inner._def.typeName;
    if (fieldName.includes('date'))
        return 'dateString';
    switch (typeName) {
        case 'ZodNumber':
        case 'ZodBigInt':
            return 'number';
        case 'ZodBoolean':
            return 'boolean';
        default:
            return undefined;
    }
}
/** Extract enum options from ZodEnum or ZodNativeEnum. */
function extractOptions(inner) {
    if (inner instanceof ZodEnum) {
        const values = inner._def.values;
        return values.map((v) => ({ label: v, value: v }));
    }
    if (inner instanceof ZodNativeEnum) {
        const enumObj = inner._def.values;
        return Object.entries(enumObj)
            .filter(([, v]) => typeof v === 'string')
            .map(([, v]) => ({ label: String(v), value: String(v) }));
    }
    return undefined;
}
/**
 * Extract widget params from a Zod query params schema.
 *
 * @param schema - ZodObject representing query parameters
 * @returns Array of widget param definitions
 */
export function zodSchemaToWidgetParams(schema) {
    const shape = schema.shape;
    const params = [];
    for (const [fieldName, zodType] of Object.entries(shape)) {
        // Skip "provider" — it's added separately per-provider
        if (fieldName === 'provider')
            continue;
        const { inner, isOptional, defaultValue } = unwrapZodType(zodType);
        const description = zodType.description ?? inner.description ?? '';
        const widgetType = zodTypeToWidgetType(inner, fieldName);
        const options = extractOptions(inner);
        params.push({
            paramName: fieldName,
            label: fieldNameToLabel(fieldName),
            description,
            type: widgetType,
            value: defaultValue !== undefined ? defaultValue : null,
            optional: isOptional,
            show: true,
            ...(options ? { options } : {}),
        });
    }
    return params;
}
/**
 * Extract column definitions from a Zod data schema.
 *
 * @param schema - ZodObject representing response data
 * @returns Array of column definitions for AG-Grid tables
 */
export function zodSchemaToColumnDefs(schema) {
    const shape = schema.shape;
    const columns = [];
    for (const [fieldName, zodType] of Object.entries(shape)) {
        const { inner } = unwrapZodType(zodType);
        const cellDataType = zodTypeToColumnType(inner, fieldName);
        const col = {
            field: fieldName,
            headerName: fieldNameToLabel(fieldName),
        };
        if (cellDataType) {
            col.cellDataType = cellDataType;
        }
        // Number columns get a formatter
        if (cellDataType === 'number') {
            col.formatterFn = 'int';
        }
        columns.push(col);
    }
    return columns;
}
//# sourceMappingURL=zod-to-widget.js.map