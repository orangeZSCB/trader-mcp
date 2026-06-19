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
import { toValues } from './types';
import * as DataAccess from './functions/data-access';
import * as Statistics from './functions/statistics';
import * as Technical from './functions/technical';
export class IndicatorCalculator {
    context;
    dataSources = {};
    constructor(context) {
        this.context = context;
    }
    async calculate(formula, precision = 4) {
        this.dataSources = {};
        const ast = this.parse(formula);
        const result = await this.evaluate(ast);
        if (typeof result === 'string') {
            throw new Error(`Invalid formula: result cannot be a string. Got: "${result}"`);
        }
        return {
            value: this.applyPrecision(result, precision),
            dataRange: this.dataSources,
        };
    }
    applyPrecision(result, precision) {
        if (typeof result === 'number') {
            return parseFloat(result.toFixed(precision));
        }
        // TrackedValues — apply precision to values array
        if (!Array.isArray(result) && typeof result === 'object' && 'values' in result && 'source' in result) {
            return result.values.map((v) => parseFloat(v.toFixed(precision)));
        }
        if (Array.isArray(result)) {
            return result.map((v) => parseFloat(v.toFixed(precision)));
        }
        if (typeof result === 'string') {
            throw new Error(`Invalid formula: result cannot be a string. Got: "${result}"`);
        }
        const rounded = {};
        for (const [key, value] of Object.entries(result)) {
            rounded[key] = parseFloat(value.toFixed(precision));
        }
        return rounded;
    }
    // ==================== Parser ====================
    parse(formula) {
        let pos = 0;
        const parseExpression = () => {
            let left = parseTerm();
            skipWhitespace();
            while (pos < formula.length && (peek() === '+' || peek() === '-')) {
                const operator = consume();
                skipWhitespace();
                const right = parseTerm();
                skipWhitespace();
                left = { type: 'binaryOp', operator, left, right };
            }
            return left;
        };
        const parseTerm = () => {
            let left = parseFactor();
            skipWhitespace();
            while (pos < formula.length && (peek() === '*' || peek() === '/')) {
                const operator = consume();
                skipWhitespace();
                const right = parseFactor();
                skipWhitespace();
                left = { type: 'binaryOp', operator, left, right };
            }
            return left;
        };
        const parseFactor = () => {
            skipWhitespace();
            if (peek() === '(') {
                consume();
                const expr = parseExpression();
                skipWhitespace();
                if (peek() !== ')')
                    throw new Error(`Expected ')' at position ${pos}`);
                consume();
                return expr;
            }
            if (peek() === "'" || peek() === '"')
                return parseString();
            if (isDigit(peek()))
                return parseNumber();
            if (peek() === '-') {
                const nextPos = pos + 1;
                if (nextPos < formula.length) {
                    const nextChar = formula[nextPos];
                    if (isDigit(nextChar) || nextChar === '.')
                        return parseNumber();
                }
                throw new Error(`Unexpected character '${peek()}' at position ${pos}`);
            }
            if (isAlpha(peek()))
                return parseFunctionOrIdentifier();
            throw new Error(`Unexpected character '${peek()}' at position ${pos}`);
        };
        const parseFunctionOrIdentifier = () => {
            const name = parseIdentifier();
            skipWhitespace();
            if (peek() === '(') {
                consume();
                skipWhitespace();
                const args = [];
                if (peek() !== ')') {
                    args.push(parseArgument());
                    skipWhitespace();
                    while (peek() === ',') {
                        consume();
                        skipWhitespace();
                        args.push(parseArgument());
                        skipWhitespace();
                    }
                }
                if (peek() !== ')')
                    throw new Error(`Expected ')' at position ${pos}`);
                consume();
                const node = { type: 'function', name, args };
                skipWhitespace();
                if (peek() === '[')
                    return parseArrayAccess(node);
                return node;
            }
            throw new Error(`Unknown identifier '${name}' at position ${pos}`);
        };
        const parseArgument = () => {
            skipWhitespace();
            if (peek() === "'" || peek() === '"')
                return parseString();
            return parseExpression();
        };
        const parseString = () => {
            const quote = consume();
            let value = '';
            while (pos < formula.length && peek() !== quote) {
                value += consume();
            }
            if (peek() !== quote)
                throw new Error(`Unterminated string at position ${pos}`);
            consume();
            return { type: 'string', value };
        };
        const parseNumber = () => {
            let numStr = '';
            if (peek() === '-')
                numStr += consume();
            while (pos < formula.length && (isDigit(peek()) || peek() === '.')) {
                numStr += consume();
            }
            return { type: 'number', value: parseFloat(numStr) };
        };
        const parseIdentifier = () => {
            let name = '';
            while (pos < formula.length && (isAlpha(peek()) || isDigit(peek()))) {
                name += consume();
            }
            return name;
        };
        const parseArrayAccess = (array) => {
            consume(); // [
            skipWhitespace();
            const index = parseExpression();
            skipWhitespace();
            if (peek() !== ']')
                throw new Error(`Expected ']' at position ${pos}`);
            consume(); // ]
            return { type: 'arrayAccess', array, index };
        };
        const peek = () => formula[pos] || '';
        const consume = () => formula[pos++] || '';
        const isDigit = (ch) => /[0-9]/.test(ch);
        const isAlpha = (ch) => /[a-zA-Z_]/.test(ch);
        const skipWhitespace = () => {
            while (pos < formula.length && /\s/.test(peek()))
                consume();
        };
        skipWhitespace();
        const result = parseExpression();
        skipWhitespace();
        if (pos < formula.length) {
            throw new Error(`Unexpected character '${peek()}' at position ${pos}. Expected end of expression.`);
        }
        return result;
    }
    // ==================== Evaluator ====================
    async evaluate(node) {
        switch (node.type) {
            case 'number':
                return node.value;
            case 'string':
                return node.value;
            case 'array':
                return node.value;
            case 'function':
                return await this.executeFunction(node);
            case 'binaryOp':
                return await this.executeBinaryOp(node);
            case 'arrayAccess':
                return await this.executeArrayAccess(node);
            default:
                throw new Error(`Unknown node type: ${node.type}`);
        }
    }
    collectSource(result) {
        if (result && typeof result === 'object' && 'source' in result && 'values' in result) {
            const tracked = result;
            this.dataSources[tracked.source.symbol] = tracked.source;
        }
    }
    async executeFunction(node) {
        const { name, args } = node;
        const evaluatedArgs = await Promise.all(args.map((arg) => this.evaluate(arg)));
        // Data access functions: FUNC('symbol', 'interval') → TrackedValues
        if (name === 'CLOSE' || name === 'HIGH' || name === 'LOW' || name === 'OPEN' || name === 'VOLUME') {
            const fn = DataAccess[name];
            const result = await fn(evaluatedArgs[0], evaluatedArgs[1], this.context);
            this.collectSource(result);
            return result;
        }
        // Statistics functions — accept number[] | TrackedValues
        if (name === 'SMA')
            return Statistics.SMA(evaluatedArgs[0], evaluatedArgs[1]);
        if (name === 'EMA')
            return Statistics.EMA(evaluatedArgs[0], evaluatedArgs[1]);
        if (name === 'STDEV')
            return Statistics.STDEV(evaluatedArgs[0]);
        if (name === 'MAX')
            return Statistics.MAX(evaluatedArgs[0]);
        if (name === 'MIN')
            return Statistics.MIN(evaluatedArgs[0]);
        if (name === 'SUM')
            return Statistics.SUM(evaluatedArgs[0]);
        if (name === 'AVERAGE')
            return Statistics.AVERAGE(evaluatedArgs[0]);
        // Technical indicator functions — accept number[] | TrackedValues
        if (name === 'RSI')
            return Technical.RSI(evaluatedArgs[0], evaluatedArgs[1]);
        if (name === 'BBANDS')
            return Technical.BBANDS(evaluatedArgs[0], evaluatedArgs[1], evaluatedArgs[2]);
        if (name === 'MACD')
            return Technical.MACD(evaluatedArgs[0], evaluatedArgs[1], evaluatedArgs[2], evaluatedArgs[3]);
        if (name === 'ATR')
            return Technical.ATR(evaluatedArgs[0], evaluatedArgs[1], evaluatedArgs[2], evaluatedArgs[3]);
        // Volume (right-side) indicators
        if (name === 'RVOL')
            return Technical.RVOL(evaluatedArgs[0], evaluatedArgs[1]);
        if (name === 'OBV')
            return Technical.OBV(evaluatedArgs[0], evaluatedArgs[1]);
        if (name === 'MFI')
            return Technical.MFI(evaluatedArgs[0], evaluatedArgs[1], evaluatedArgs[2], evaluatedArgs[3], evaluatedArgs[4]);
        if (name === 'VWAP')
            return Technical.VWAP(evaluatedArgs[0], evaluatedArgs[1], evaluatedArgs[2], evaluatedArgs[3]);
        throw new Error(`Unknown function: ${name}`);
    }
    async executeBinaryOp(node) {
        const left = await this.evaluate(node.left);
        const right = await this.evaluate(node.right);
        if (typeof left !== 'number' || typeof right !== 'number') {
            const leftType = left && typeof left === 'object' && 'values' in left ? 'TrackedValues' : typeof left;
            const rightType = right && typeof right === 'object' && 'values' in right ? 'TrackedValues' : typeof right;
            throw new Error(`Binary operations require numbers, got ${leftType} and ${rightType}`);
        }
        switch (node.operator) {
            case '+': return left + right;
            case '-': return left - right;
            case '*': return left * right;
            case '/':
                if (right === 0)
                    throw new Error('Division by zero');
                return left / right;
            default:
                throw new Error(`Unknown operator: ${String(node.operator)}`);
        }
    }
    async executeArrayAccess(node) {
        const array = await this.evaluate(node.array);
        const index = await this.evaluate(node.index);
        // Extract values from TrackedValues or use raw array
        const values = toValues(array);
        if (!Array.isArray(values)) {
            throw new Error(`Array access requires an array, got ${typeof array}`);
        }
        if (typeof index !== 'number') {
            throw new Error(`Array index must be a number, got ${typeof index}`);
        }
        const actualIndex = index < 0 ? values.length + index : index;
        if (actualIndex < 0 || actualIndex >= values.length) {
            throw new Error(`Array index out of bounds: ${index}`);
        }
        return values[actualIndex];
    }
}
//# sourceMappingURL=calculator.js.map