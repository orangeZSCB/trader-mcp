/**
 * Mirrors: ibapi/orderdecoder.py
 */
import Decimal from 'decimal.js';
import { UNSET_DOUBLE, UNSET_DECIMAL } from './const.js';
import { ComboLeg, DeltaNeutralContract, coerceSecType } from './contract.js';
import { OrderComboLeg } from './order.js';
import { OrderAllocation } from './order-state.js';
import { Create as createOrderCondition } from './order-condition.js';
import { SoftDollarTier } from './softdollartier.js';
import { TagValue } from './tag-value.js';
import { decodeStr, decodeInt, decodeFloat, decodeBool, decodeDecimal, SHOW_UNSET, isPegBenchOrder, } from './utils.js';
import { MIN_SERVER_VER_FA_PROFILE_DESUPPORT, MIN_SERVER_VER_MODELS_SUPPORT, MIN_SERVER_VER_SSHORTX_OLD, MIN_SERVER_VER_WHAT_IF_EXT_FIELDS, MIN_SERVER_VER_PEGGED_TO_BENCHMARK, MIN_SERVER_VER_SOFT_DOLLAR_TIER, MIN_SERVER_VER_CASH_QTY, MIN_SERVER_VER_AUTO_PRICE_FOR_HEDGE, MIN_SERVER_VER_ORDER_CONTAINER, MIN_SERVER_VER_D_PEG_ORDERS, MIN_CLIENT_VER, MIN_SERVER_VER_PRICE_MGMT_ALGO, MIN_SERVER_VER_DURATION, MIN_SERVER_VER_POST_TO_ATS, MIN_SERVER_VER_PEGBEST_PEGMID_OFFSETS, MIN_SERVER_VER_CUSTOMER_ACCOUNT, MIN_SERVER_VER_PROFESSIONAL_CUSTOMER, MIN_SERVER_VER_BOND_ACCRUED_INTEREST, MIN_SERVER_VER_INCLUDE_OVERNIGHT, MIN_SERVER_VER_CME_TAGGING_FIELDS_IN_OPEN_ORDER, MIN_SERVER_VER_FULL_ORDER_PREVIEW_FIELDS, MIN_SERVER_VER_SUBMITTER, } from './server-versions.js';
export class OrderDecoder {
    contract;
    order;
    orderState;
    version;
    serverVersion;
    constructor(contract, order, orderState, version, serverVersion) {
        this.contract = contract;
        this.order = order;
        this.orderState = orderState;
        this.version = version;
        this.serverVersion = serverVersion;
    }
    decodeOrderId(fields) {
        this.order.orderId = decodeInt(fields);
    }
    decodeContractFields(fields) {
        this.contract.conId = decodeInt(fields);
        this.contract.symbol = decodeStr(fields);
        this.contract.secType = coerceSecType(decodeStr(fields));
        this.contract.lastTradeDateOrContractMonth = decodeStr(fields);
        this.contract.strike = decodeFloat(fields);
        this.contract.right = decodeStr(fields);
        if (this.version >= 32) {
            this.contract.multiplier = decodeStr(fields);
        }
        this.contract.exchange = decodeStr(fields);
        this.contract.currency = decodeStr(fields);
        this.contract.localSymbol = decodeStr(fields);
        if (this.version >= 32) {
            this.contract.tradingClass = decodeStr(fields);
        }
    }
    decodeAction(fields) {
        this.order.action = decodeStr(fields);
    }
    decodeTotalQuantity(fields) {
        this.order.totalQuantity = decodeDecimal(fields);
    }
    decodeOrderType(fields) {
        this.order.orderType = decodeStr(fields);
    }
    decodeLmtPrice(fields) {
        if (this.version < 29) {
            // Pre-v29: empty wire field meant 0 (not unset). Preserve that.
            const raw = decodeDecimal(fields);
            this.order.lmtPrice = raw.equals(UNSET_DECIMAL) ? new Decimal(0) : raw;
        }
        else {
            this.order.lmtPrice = decodeDecimal(fields);
        }
    }
    decodeAuxPrice(fields) {
        if (this.version < 30) {
            const raw = decodeDecimal(fields);
            this.order.auxPrice = raw.equals(UNSET_DECIMAL) ? new Decimal(0) : raw;
        }
        else {
            this.order.auxPrice = decodeDecimal(fields);
        }
    }
    decodeTIF(fields) {
        this.order.tif = decodeStr(fields);
    }
    decodeOcaGroup(fields) {
        this.order.ocaGroup = decodeStr(fields);
    }
    decodeAccount(fields) {
        this.order.account = decodeStr(fields);
    }
    decodeOpenClose(fields) {
        this.order.openClose = decodeStr(fields);
    }
    decodeOrigin(fields) {
        this.order.origin = decodeInt(fields);
    }
    decodeOrderRef(fields) {
        this.order.orderRef = decodeStr(fields);
    }
    decodeClientId(fields) {
        this.order.clientId = decodeInt(fields);
    }
    decodePermId(fields) {
        this.order.permId = decodeInt(fields);
    }
    decodeOutsideRth(fields) {
        this.order.outsideRth = decodeBool(fields);
    }
    decodeHidden(fields) {
        this.order.hidden = decodeBool(fields);
    }
    decodeDiscretionaryAmt(fields) {
        this.order.discretionaryAmt = decodeFloat(fields);
    }
    decodeGoodAfterTime(fields) {
        this.order.goodAfterTime = decodeStr(fields);
    }
    skipSharesAllocation(fields) {
        decodeStr(fields); // deprecated
    }
    decodeFAParams(fields) {
        this.order.faGroup = decodeStr(fields);
        this.order.faMethod = decodeStr(fields);
        this.order.faPercentage = decodeStr(fields);
        if (this.serverVersion < MIN_SERVER_VER_FA_PROFILE_DESUPPORT) {
            decodeStr(fields); // skip deprecated faProfile field
        }
    }
    decodeModelCode(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_MODELS_SUPPORT) {
            this.order.modelCode = decodeStr(fields);
        }
    }
    decodeGoodTillDate(fields) {
        this.order.goodTillDate = decodeStr(fields);
    }
    decodeRule80A(fields) {
        this.order.rule80A = decodeStr(fields);
    }
    decodePercentOffset(fields) {
        this.order.percentOffset = decodeFloat(fields, SHOW_UNSET);
    }
    decodeSettlingFirm(fields) {
        this.order.settlingFirm = decodeStr(fields);
    }
    decodeShortSaleParams(fields) {
        this.order.shortSaleSlot = decodeInt(fields);
        this.order.designatedLocation = decodeStr(fields);
        if (this.serverVersion === MIN_SERVER_VER_SSHORTX_OLD) {
            decodeInt(fields);
        }
        else if (this.version >= 23) {
            this.order.exemptCode = decodeInt(fields);
        }
    }
    decodeAuctionStrategy(fields) {
        this.order.auctionStrategy = decodeInt(fields);
    }
    decodeBoxOrderParams(fields) {
        this.order.startingPrice = decodeFloat(fields, SHOW_UNSET);
        this.order.stockRefPrice = decodeFloat(fields, SHOW_UNSET);
        this.order.delta = decodeFloat(fields, SHOW_UNSET);
    }
    decodePegToStkOrVolOrderParams(fields) {
        this.order.stockRangeLower = decodeFloat(fields, SHOW_UNSET);
        this.order.stockRangeUpper = decodeFloat(fields, SHOW_UNSET);
    }
    decodeDisplaySize(fields) {
        this.order.displaySize = decodeInt(fields, SHOW_UNSET);
    }
    decodeBlockOrder(fields) {
        this.order.blockOrder = decodeBool(fields);
    }
    decodeSweepToFill(fields) {
        this.order.sweepToFill = decodeBool(fields);
    }
    decodeAllOrNone(fields) {
        this.order.allOrNone = decodeBool(fields);
    }
    decodeMinQty(fields) {
        this.order.minQty = decodeInt(fields, SHOW_UNSET);
    }
    decodeOcaType(fields) {
        this.order.ocaType = decodeInt(fields);
    }
    skipETradeOnly(fields) {
        decodeBool(fields); // deprecated
    }
    skipFirmQuoteOnly(fields) {
        decodeBool(fields); // deprecated
    }
    skipNbboPriceCap(fields) {
        decodeFloat(fields, SHOW_UNSET); // deprecated
    }
    decodeParentId(fields) {
        this.order.parentId = decodeInt(fields);
    }
    decodeTriggerMethod(fields) {
        this.order.triggerMethod = decodeInt(fields);
    }
    decodeVolOrderParams(fields, readOpenOrderAttribs) {
        this.order.volatility = decodeFloat(fields, SHOW_UNSET);
        this.order.volatilityType = decodeInt(fields);
        this.order.deltaNeutralOrderType = decodeStr(fields);
        this.order.deltaNeutralAuxPrice = decodeFloat(fields, SHOW_UNSET);
        if (this.version >= 27 && this.order.deltaNeutralOrderType) {
            this.order.deltaNeutralConId = decodeInt(fields);
            if (readOpenOrderAttribs) {
                this.order.deltaNeutralSettlingFirm = decodeStr(fields);
                this.order.deltaNeutralClearingAccount = decodeStr(fields);
                this.order.deltaNeutralClearingIntent = decodeStr(fields);
            }
        }
        if (this.version >= 31 && this.order.deltaNeutralOrderType) {
            if (readOpenOrderAttribs) {
                this.order.deltaNeutralOpenClose = decodeStr(fields);
            }
            this.order.deltaNeutralShortSale = decodeBool(fields);
            this.order.deltaNeutralShortSaleSlot = decodeInt(fields);
            this.order.deltaNeutralDesignatedLocation = decodeStr(fields);
        }
        this.order.continuousUpdate = decodeBool(fields);
        this.order.referencePriceType = decodeInt(fields);
    }
    decodeTrailParams(fields) {
        this.order.trailStopPrice = decodeDecimal(fields);
        if (this.version >= 30) {
            this.order.trailingPercent = decodeDecimal(fields);
        }
    }
    decodeBasisPoints(fields) {
        this.order.basisPoints = decodeFloat(fields, SHOW_UNSET);
        this.order.basisPointsType = decodeInt(fields, SHOW_UNSET);
    }
    decodeComboLegs(fields) {
        this.contract.comboLegsDescrip = decodeStr(fields);
        if (this.version >= 29) {
            const comboLegsCount = decodeInt(fields);
            if (comboLegsCount > 0) {
                this.contract.comboLegs = [];
                for (let i = 0; i < comboLegsCount; i++) {
                    const comboLeg = new ComboLeg();
                    comboLeg.conId = decodeInt(fields);
                    comboLeg.ratio = decodeInt(fields);
                    comboLeg.action = decodeStr(fields);
                    comboLeg.exchange = decodeStr(fields);
                    comboLeg.openClose = decodeInt(fields);
                    comboLeg.shortSaleSlot = decodeInt(fields);
                    comboLeg.designatedLocation = decodeStr(fields);
                    comboLeg.exemptCode = decodeInt(fields);
                    this.contract.comboLegs.push(comboLeg);
                }
            }
            const orderComboLegsCount = decodeInt(fields);
            if (orderComboLegsCount > 0) {
                this.order.orderComboLegs = [];
                for (let i = 0; i < orderComboLegsCount; i++) {
                    const orderComboLeg = new OrderComboLeg();
                    orderComboLeg.price = decodeFloat(fields, SHOW_UNSET);
                    this.order.orderComboLegs.push(orderComboLeg);
                }
            }
        }
    }
    decodeSmartComboRoutingParams(fields) {
        if (this.version >= 26) {
            const smartComboRoutingParamsCount = decodeInt(fields);
            if (smartComboRoutingParamsCount > 0) {
                this.order.smartComboRoutingParams = [];
                for (let i = 0; i < smartComboRoutingParamsCount; i++) {
                    const tagValue = new TagValue();
                    tagValue.tag = decodeStr(fields);
                    tagValue.value = decodeStr(fields);
                    this.order.smartComboRoutingParams.push(tagValue);
                }
            }
        }
    }
    decodeScaleOrderParams(fields) {
        if (this.version >= 20) {
            this.order.scaleInitLevelSize = decodeInt(fields, SHOW_UNSET);
            this.order.scaleSubsLevelSize = decodeInt(fields, SHOW_UNSET);
        }
        else {
            decodeInt(fields, SHOW_UNSET); // notSuppScaleNumComponents (deprecated)
            this.order.scaleInitLevelSize = decodeInt(fields, SHOW_UNSET);
        }
        this.order.scalePriceIncrement = decodeFloat(fields, SHOW_UNSET);
        if (this.version >= 28 &&
            this.order.scalePriceIncrement !== UNSET_DOUBLE &&
            this.order.scalePriceIncrement > 0.0) {
            this.order.scalePriceAdjustValue = decodeFloat(fields, SHOW_UNSET);
            this.order.scalePriceAdjustInterval = decodeInt(fields, SHOW_UNSET);
            this.order.scaleProfitOffset = decodeFloat(fields, SHOW_UNSET);
            this.order.scaleAutoReset = decodeBool(fields);
            this.order.scaleInitPosition = decodeInt(fields, SHOW_UNSET);
            this.order.scaleInitFillQty = decodeInt(fields, SHOW_UNSET);
            this.order.scaleRandomPercent = decodeBool(fields);
        }
    }
    decodeHedgeParams(fields) {
        if (this.version >= 24) {
            this.order.hedgeType = decodeStr(fields);
            if (this.order.hedgeType) {
                this.order.hedgeParam = decodeStr(fields);
            }
        }
    }
    decodeOptOutSmartRouting(fields) {
        if (this.version >= 25) {
            this.order.optOutSmartRouting = decodeBool(fields);
        }
    }
    decodeClearingParams(fields) {
        this.order.clearingAccount = decodeStr(fields);
        this.order.clearingIntent = decodeStr(fields);
    }
    decodeNotHeld(fields) {
        if (this.version >= 22) {
            this.order.notHeld = decodeBool(fields);
        }
    }
    decodeDeltaNeutral(fields) {
        if (this.version >= 20) {
            const deltaNeutralContractPresent = decodeBool(fields);
            if (deltaNeutralContractPresent) {
                this.contract.deltaNeutralContract = new DeltaNeutralContract();
                this.contract.deltaNeutralContract.conId = decodeInt(fields);
                this.contract.deltaNeutralContract.delta = decodeFloat(fields);
                this.contract.deltaNeutralContract.price = decodeFloat(fields);
            }
        }
    }
    decodeAlgoParams(fields) {
        if (this.version >= 21) {
            this.order.algoStrategy = decodeStr(fields);
            if (this.order.algoStrategy) {
                const algoParamsCount = decodeInt(fields);
                if (algoParamsCount > 0) {
                    this.order.algoParams = [];
                    for (let i = 0; i < algoParamsCount; i++) {
                        const tagValue = new TagValue();
                        tagValue.tag = decodeStr(fields);
                        tagValue.value = decodeStr(fields);
                        this.order.algoParams.push(tagValue);
                    }
                }
            }
        }
    }
    decodeSolicited(fields) {
        if (this.version >= 33) {
            this.order.solicited = decodeBool(fields);
        }
    }
    decodeOrderStatus(fields) {
        this.orderState.status = decodeStr(fields);
    }
    decodeWhatIfInfoAndCommissionAndFees(fields) {
        this.order.whatIf = decodeBool(fields);
        this.decodeOrderStatus(fields);
        if (this.serverVersion >= MIN_SERVER_VER_WHAT_IF_EXT_FIELDS) {
            this.orderState.initMarginBefore = decodeStr(fields);
            this.orderState.maintMarginBefore = decodeStr(fields);
            this.orderState.equityWithLoanBefore = decodeStr(fields);
            this.orderState.initMarginChange = decodeStr(fields);
            this.orderState.maintMarginChange = decodeStr(fields);
            this.orderState.equityWithLoanChange = decodeStr(fields);
        }
        this.orderState.initMarginAfter = decodeStr(fields);
        this.orderState.maintMarginAfter = decodeStr(fields);
        this.orderState.equityWithLoanAfter = decodeStr(fields);
        this.orderState.commissionAndFees = decodeFloat(fields, SHOW_UNSET);
        this.orderState.minCommissionAndFees = decodeFloat(fields, SHOW_UNSET);
        this.orderState.maxCommissionAndFees = decodeFloat(fields, SHOW_UNSET);
        this.orderState.commissionAndFeesCurrency = decodeStr(fields);
        if (this.serverVersion >= MIN_SERVER_VER_FULL_ORDER_PREVIEW_FIELDS) {
            this.orderState.marginCurrency = decodeStr(fields);
            this.orderState.initMarginBeforeOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.maintMarginBeforeOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.equityWithLoanBeforeOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.initMarginChangeOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.maintMarginChangeOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.equityWithLoanChangeOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.initMarginAfterOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.maintMarginAfterOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.equityWithLoanAfterOutsideRTH = decodeFloat(fields, SHOW_UNSET);
            this.orderState.suggestedSize = decodeDecimal(fields);
            this.orderState.rejectReason = decodeStr(fields);
            const accountsCount = decodeInt(fields);
            if (accountsCount > 0) {
                this.orderState.orderAllocations = [];
                for (let i = 0; i < accountsCount; i++) {
                    const orderAllocation = new OrderAllocation();
                    orderAllocation.account = decodeStr(fields);
                    orderAllocation.position = decodeDecimal(fields);
                    orderAllocation.positionDesired = decodeDecimal(fields);
                    orderAllocation.positionAfter = decodeDecimal(fields);
                    orderAllocation.desiredAllocQty = decodeDecimal(fields);
                    orderAllocation.allowedAllocQty = decodeDecimal(fields);
                    orderAllocation.isMonetary = decodeBool(fields);
                    this.orderState.orderAllocations.push(orderAllocation);
                }
            }
        }
        this.orderState.warningText = decodeStr(fields);
    }
    decodeVolRandomizeFlags(fields) {
        if (this.version >= 34) {
            this.order.randomizeSize = decodeBool(fields);
            this.order.randomizePrice = decodeBool(fields);
        }
    }
    decodePegToBenchParams(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_PEGGED_TO_BENCHMARK) {
            if (isPegBenchOrder(this.order.orderType)) {
                this.order.referenceContractId = decodeInt(fields);
                this.order.isPeggedChangeAmountDecrease = decodeBool(fields);
                this.order.peggedChangeAmount = decodeFloat(fields);
                this.order.referenceChangeAmount = decodeFloat(fields);
                this.order.referenceExchangeId = decodeStr(fields);
            }
        }
    }
    decodeConditions(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_PEGGED_TO_BENCHMARK) {
            const conditionsSize = decodeInt(fields);
            if (conditionsSize > 0) {
                this.order.conditions = [];
                for (let i = 0; i < conditionsSize; i++) {
                    const conditionType = decodeInt(fields);
                    const condition = createOrderCondition(conditionType);
                    if (condition) {
                        condition.decode(fields);
                        this.order.conditions.push(condition);
                    }
                }
                this.order.conditionsIgnoreRth = decodeBool(fields);
                this.order.conditionsCancelOrder = decodeBool(fields);
            }
        }
    }
    decodeAdjustedOrderParams(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_PEGGED_TO_BENCHMARK) {
            this.order.adjustedOrderType = decodeStr(fields);
            this.order.triggerPrice = decodeFloat(fields);
            this.decodeStopPriceAndLmtPriceOffset(fields);
            this.order.adjustedStopPrice = decodeFloat(fields);
            this.order.adjustedStopLimitPrice = decodeFloat(fields);
            this.order.adjustedTrailingAmount = decodeFloat(fields);
            this.order.adjustableTrailingUnit = decodeInt(fields);
        }
    }
    decodeStopPriceAndLmtPriceOffset(fields) {
        const raw = decodeDecimal(fields);
        this.order.trailStopPrice = raw.equals(UNSET_DECIMAL) ? new Decimal(0) : raw;
        this.order.lmtPriceOffset = decodeFloat(fields);
    }
    decodeSoftDollarTier(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_SOFT_DOLLAR_TIER) {
            const name = decodeStr(fields);
            const value = decodeStr(fields);
            const displayName = decodeStr(fields);
            this.order.softDollarTier = new SoftDollarTier(name, value, displayName);
        }
    }
    decodeCashQty(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_CASH_QTY) {
            this.order.cashQty = decodeDecimal(fields);
        }
    }
    decodeDontUseAutoPriceForHedge(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_AUTO_PRICE_FOR_HEDGE) {
            this.order.dontUseAutoPriceForHedge = decodeBool(fields);
        }
    }
    decodeIsOmsContainers(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_ORDER_CONTAINER) {
            this.order.isOmsContainer = decodeBool(fields);
        }
    }
    decodeDiscretionaryUpToLimitPrice(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_D_PEG_ORDERS) {
            this.order.discretionaryUpToLimitPrice = decodeBool(fields);
        }
    }
    decodeAutoCancelDate(fields) {
        this.order.autoCancelDate = decodeStr(fields);
    }
    decodeFilledQuantity(fields) {
        this.order.filledQuantity = decodeDecimal(fields);
    }
    decodeRefFuturesConId(fields) {
        this.order.refFuturesConId = decodeInt(fields);
    }
    decodeAutoCancelParent(fields, minVersionAutoCancelParent = MIN_CLIENT_VER) {
        if (this.serverVersion >= minVersionAutoCancelParent) {
            this.order.autoCancelParent = decodeBool(fields);
        }
    }
    decodeShareholder(fields) {
        this.order.shareholder = decodeStr(fields);
    }
    decodeImbalanceOnly(fields, minVersionImbalanceOnly = MIN_CLIENT_VER) {
        if (this.serverVersion >= minVersionImbalanceOnly) {
            this.order.imbalanceOnly = decodeBool(fields);
        }
    }
    decodeRouteMarketableToBbo(fields) {
        this.order.routeMarketableToBbo = decodeBool(fields);
    }
    decodeParentPermId(fields) {
        this.order.parentPermId = decodeInt(fields);
    }
    decodeCompletedTime(fields) {
        this.orderState.completedTime = decodeStr(fields);
    }
    decodeCompletedStatus(fields) {
        this.orderState.completedStatus = decodeStr(fields);
    }
    decodeUsePriceMgmtAlgo(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_PRICE_MGMT_ALGO) {
            this.order.usePriceMgmtAlgo = decodeBool(fields);
        }
    }
    decodeDuration(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_DURATION) {
            this.order.duration = decodeInt(fields, SHOW_UNSET);
        }
    }
    decodePostToAts(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_POST_TO_ATS) {
            this.order.postToAts = decodeInt(fields, SHOW_UNSET);
        }
    }
    decodePegBestPegMidOrderAttributes(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_PEGBEST_PEGMID_OFFSETS) {
            this.order.minTradeQty = decodeInt(fields, SHOW_UNSET);
            this.order.minCompeteSize = decodeInt(fields, SHOW_UNSET);
            this.order.competeAgainstBestOffset = decodeFloat(fields, SHOW_UNSET);
            this.order.midOffsetAtWhole = decodeFloat(fields, SHOW_UNSET);
            this.order.midOffsetAtHalf = decodeFloat(fields, SHOW_UNSET);
        }
    }
    decodeCustomerAccount(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_CUSTOMER_ACCOUNT) {
            this.order.customerAccount = decodeStr(fields);
        }
    }
    decodeProfessionalCustomer(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_PROFESSIONAL_CUSTOMER) {
            this.order.professionalCustomer = decodeBool(fields);
        }
    }
    decodeBondAccruedInterest(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_BOND_ACCRUED_INTEREST) {
            this.order.bondAccruedInterest = decodeStr(fields);
        }
    }
    decodeIncludeOvernight(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_INCLUDE_OVERNIGHT) {
            this.order.includeOvernight = decodeBool(fields);
        }
    }
    decodeCMETaggingFields(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_CME_TAGGING_FIELDS_IN_OPEN_ORDER) {
            this.order.extOperator = decodeStr(fields);
            this.order.manualOrderIndicator = decodeInt(fields, SHOW_UNSET);
        }
    }
    decodeSubmitter(fields) {
        if (this.serverVersion >= MIN_SERVER_VER_SUBMITTER) {
            this.order.submitter = decodeStr(fields);
        }
    }
}
//# sourceMappingURL=order-decoder.js.map