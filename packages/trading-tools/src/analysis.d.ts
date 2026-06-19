/**
 * Analysis Kit — 统一量化因子计算工具
 *
 * 通过 asset 参数区分资产类别（equity/crypto/currency），
 * 公式语法完全一样：CLOSE('AAPL', '1d')、SMA(...)、RSI(...) 等。
 * 数据按需从 OpenBB API 拉取 OHLCV，不缓存。
 */
import type { BarService } from '@openalice-trading/alice-core/domain/market-data/bars/index.js';
export declare function createAnalysisTools(barService: BarService): {
    calculateIndicator: import("ai").Tool<{
        asset: "currency" | "equity" | "crypto" | "commodity";
        formula: string;
        precision?: number | undefined;
    }, import("@openalice-trading/alice-core/domain/analysis/indicator/calculator.js").CalculateOutput>;
};
