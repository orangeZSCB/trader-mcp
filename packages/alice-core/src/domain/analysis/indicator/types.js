/**
 * Indicator Calculator — 类型定义
 *
 * 通用 OHLCV 量化因子计算器，支持 equity / crypto / currency / commodity。
 */
/** 从 number[] 或 TrackedValues 提取纯数组 */
export function toValues(input) {
    return Array.isArray(input) ? input : input.values;
}
//# sourceMappingURL=types.js.map