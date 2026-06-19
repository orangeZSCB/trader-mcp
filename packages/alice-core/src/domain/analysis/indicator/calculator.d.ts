/**
 * Indicator Calculator — AST 表达式解析与求值
 *
 * 通用量化因子计算器，支持 equity / crypto / currency。
 *
 * 支持类 Excel 公式语法：
 * - SMA(CLOSE('AAPL', '1d'), 50)
 * - RSI(CLOSE('BTCUSD', '1d'), 14)
 * - (CLOSE('EURUSD', '1d')[-1] - SMA(CLOSE('EURUSD', '1d'), 50)) / SMA(CLOSE('EURUSD', '1d'), 50) * 100
 */
import type { IndicatorContext, DataSourceMeta } from './types';
export interface CalculateOutput {
    value: number | number[] | Record<string, number>;
    dataRange: Record<string, DataSourceMeta>;
}
export declare class IndicatorCalculator {
    private context;
    private dataSources;
    constructor(context: IndicatorContext);
    calculate(formula: string, precision?: number): Promise<CalculateOutput>;
    private applyPrecision;
    private parse;
    private evaluate;
    private collectSource;
    private executeFunction;
    private executeBinaryOp;
    private executeArrayAccess;
}
