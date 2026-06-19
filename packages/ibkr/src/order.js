/**
 * Mirrors: ibapi/order.py
 */
import { UNSET_DOUBLE, UNSET_INTEGER, UNSET_DECIMAL, DOUBLE_INFINITY } from './const.js';
import { SoftDollarTier } from './softdollartier.js';
// enum Origin
export const CUSTOMER = 0;
export const FIRM = 1;
export const UNKNOWN = 2;
// enum AuctionStrategy
export const AUCTION_UNSET = 0;
export const AUCTION_MATCH = 1;
export const AUCTION_IMPROVEMENT = 2;
export const AUCTION_TRANSPARENT = 3;
export const COMPETE_AGAINST_BEST_OFFSET_UP_TO_MID = DOUBLE_INFINITY;
function floatMaxString(val) { return val === UNSET_DOUBLE ? '' : String(val); }
function intMaxString(val) { return val === UNSET_INTEGER ? '' : String(val); }
function decimalMaxString(val) { return val.equals(UNSET_DECIMAL) ? '' : val.toString(); }
function longMaxString(val) { return val === UNSET_INTEGER ? '' : String(val); }
export class OrderComboLeg {
    price = UNSET_DOUBLE;
    toString() {
        return `${floatMaxString(this.price)}`;
    }
}
export class Order {
    softDollarTier = new SoftDollarTier('', '', '');
    // order identifier
    orderId = 0;
    clientId = 0;
    permId = 0;
    // main order fields
    action = '';
    totalQuantity = UNSET_DECIMAL;
    orderType = '';
    lmtPrice = UNSET_DECIMAL;
    auxPrice = UNSET_DECIMAL;
    // extended order fields
    tif = ''; // "Time in Force" - DAY, GTC, etc.
    activeStartTime = ''; // for GTC orders
    activeStopTime = ''; // for GTC orders
    ocaGroup = ''; // one cancels all group name
    ocaType = 0; // 1 = CANCEL_WITH_BLOCK, 2 = REDUCE_WITH_BLOCK, 3 = REDUCE_NON_BLOCK
    orderRef = '';
    transmit = true; // if false, order will be created but not transmitted
    parentId = 0; // Parent order id, to associate Auto STP or TRAIL orders with the original order.
    blockOrder = false;
    sweepToFill = false;
    displaySize = 0;
    triggerMethod = 0; // 0=Default, 1=Double_Bid_Ask, 2=Last, 3=Double_Last, 4=Bid_Ask, 7=Last_or_Bid_Ask, 8=Mid-point
    outsideRth = false;
    hidden = false;
    goodAfterTime = ''; // Format: 20060505 08:00:00 {time zone}
    goodTillDate = ''; // Format: 20060505 08:00:00 {time zone}
    rule80A = ''; // Individual = 'I', Agency = 'A', AgentOtherMember = 'W', IndividualPTIA = 'J', AgencyPTIA = 'U', AgentOtherMemberPTIA = 'M', IndividualPT = 'K', AgencyPT = 'Y', AgentOtherMemberPT = 'N'
    allOrNone = false;
    minQty = UNSET_INTEGER;
    percentOffset = UNSET_DOUBLE; // REL orders only
    overridePercentageConstraints = false;
    trailStopPrice = UNSET_DECIMAL;
    trailingPercent = UNSET_DECIMAL; // TRAILLIMIT orders only
    // financial advisors only
    faGroup = '';
    faMethod = '';
    faPercentage = '';
    // institutional (ie non-cleared) only
    designatedLocation = ''; // used only when shortSaleSlot=2
    openClose = ''; // O=Open, C=Close
    origin = CUSTOMER; // 0=Customer, 1=Firm
    shortSaleSlot = 0; // 1 if you hold the shares, 2 if they will be delivered from elsewhere. Only for Action=SSHORT
    exemptCode = -1;
    // SMART routing only
    discretionaryAmt = 0;
    optOutSmartRouting = false;
    // BOX exchange orders only
    auctionStrategy = AUCTION_UNSET; // AUCTION_MATCH, AUCTION_IMPROVEMENT, AUCTION_TRANSPARENT
    startingPrice = UNSET_DOUBLE;
    stockRefPrice = UNSET_DOUBLE;
    delta = UNSET_DOUBLE;
    // pegged to stock and VOL orders only
    stockRangeLower = UNSET_DOUBLE;
    stockRangeUpper = UNSET_DOUBLE;
    randomizePrice = false;
    randomizeSize = false;
    // VOLATILITY ORDERS ONLY
    volatility = UNSET_DOUBLE;
    volatilityType = UNSET_INTEGER; // 1=daily, 2=annual
    deltaNeutralOrderType = '';
    deltaNeutralAuxPrice = UNSET_DOUBLE;
    deltaNeutralConId = 0;
    deltaNeutralSettlingFirm = '';
    deltaNeutralClearingAccount = '';
    deltaNeutralClearingIntent = '';
    deltaNeutralOpenClose = '';
    deltaNeutralShortSale = false;
    deltaNeutralShortSaleSlot = 0;
    deltaNeutralDesignatedLocation = '';
    continuousUpdate = false;
    referencePriceType = UNSET_INTEGER; // 1=Average, 2 = BidOrAsk
    // COMBO ORDERS ONLY
    basisPoints = UNSET_DOUBLE; // EFP orders only
    basisPointsType = UNSET_INTEGER; // EFP orders only
    // SCALE ORDERS ONLY
    scaleInitLevelSize = UNSET_INTEGER;
    scaleSubsLevelSize = UNSET_INTEGER;
    scalePriceIncrement = UNSET_DOUBLE;
    scalePriceAdjustValue = UNSET_DOUBLE;
    scalePriceAdjustInterval = UNSET_INTEGER;
    scaleProfitOffset = UNSET_DOUBLE;
    scaleAutoReset = false;
    scaleInitPosition = UNSET_INTEGER;
    scaleInitFillQty = UNSET_INTEGER;
    scaleRandomPercent = false;
    scaleTable = '';
    // HEDGE ORDERS
    hedgeType = ''; // 'D' - delta, 'B' - beta, 'F' - FX, 'P' - pair
    hedgeParam = ''; // 'beta=X' value for beta hedge, 'ratio=Y' for pair hedge
    // Clearing info
    account = ''; // IB account
    settlingFirm = '';
    clearingAccount = ''; // True beneficiary of the order
    clearingIntent = ''; // "" (Default), "IB", "Away", "PTA" (PostTrade)
    // ALGO ORDERS ONLY
    algoStrategy = '';
    algoParams = null;
    smartComboRoutingParams = null;
    algoId = '';
    // What-if
    whatIf = false;
    // Not Held
    notHeld = false;
    solicited = false;
    // models
    modelCode = '';
    // order combo legs
    orderComboLegs = null;
    orderMiscOptions = null;
    // VER PEG2BENCH fields:
    referenceContractId = 0;
    peggedChangeAmount = 0.0;
    isPeggedChangeAmountDecrease = false;
    referenceChangeAmount = 0.0;
    referenceExchangeId = '';
    adjustedOrderType = '';
    triggerPrice = UNSET_DOUBLE;
    adjustedStopPrice = UNSET_DOUBLE;
    adjustedStopLimitPrice = UNSET_DOUBLE;
    adjustedTrailingAmount = UNSET_DOUBLE;
    adjustableTrailingUnit = 0;
    lmtPriceOffset = UNSET_DOUBLE;
    conditions = [];
    conditionsCancelOrder = false;
    conditionsIgnoreRth = false;
    // ext operator
    extOperator = '';
    // native cash quantity
    cashQty = UNSET_DECIMAL;
    mifid2DecisionMaker = '';
    mifid2DecisionAlgo = '';
    mifid2ExecutionTrader = '';
    mifid2ExecutionAlgo = '';
    dontUseAutoPriceForHedge = false;
    isOmsContainer = false;
    discretionaryUpToLimitPrice = false;
    autoCancelDate = '';
    filledQuantity = UNSET_DECIMAL;
    refFuturesConId = 0;
    autoCancelParent = false;
    shareholder = '';
    imbalanceOnly = false;
    routeMarketableToBbo = null;
    parentPermId = 0;
    usePriceMgmtAlgo = null;
    duration = UNSET_INTEGER;
    postToAts = UNSET_INTEGER;
    advancedErrorOverride = '';
    manualOrderTime = '';
    minTradeQty = UNSET_INTEGER;
    minCompeteSize = UNSET_INTEGER;
    competeAgainstBestOffset = UNSET_DOUBLE;
    midOffsetAtWhole = UNSET_DOUBLE;
    midOffsetAtHalf = UNSET_DOUBLE;
    customerAccount = '';
    professionalCustomer = false;
    bondAccruedInterest = '';
    includeOvernight = false;
    manualOrderIndicator = UNSET_INTEGER;
    submitter = '';
    postOnly = false;
    allowPreOpen = false;
    ignoreOpenAuction = false;
    deactivate = false;
    seekPriceImprovement = null;
    whatIfType = UNSET_INTEGER;
    // attached orders
    slOrderId = UNSET_INTEGER;
    slOrderType = '';
    ptOrderId = UNSET_INTEGER;
    ptOrderType = '';
    toString() {
        let s = `${intMaxString(this.orderId)},${intMaxString(this.clientId)},${longMaxString(this.permId)}:`;
        s += ` ${this.orderType} ${this.action} ${decimalMaxString(this.totalQuantity)}@${decimalMaxString(this.lmtPrice)}`;
        s += ` ${this.tif}`;
        if (this.orderComboLegs) {
            s += ' CMB(';
            for (const leg of this.orderComboLegs) {
                s += leg.toString() + ',';
            }
            s += ')';
        }
        if (this.conditions.length > 0) {
            s += ' COND(';
            for (const cond of this.conditions) {
                s += String(cond) + ',';
            }
            s += ')';
        }
        return s;
    }
}
//# sourceMappingURL=order.js.map