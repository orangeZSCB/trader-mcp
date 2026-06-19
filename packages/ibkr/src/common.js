/**
 * Mirrors: ibapi/common.py
 */
import { UNSET_INTEGER, UNSET_DECIMAL } from './const.js';
import { OUT } from './message.js';
import { MIN_SERVER_VER_PROTOBUF, MIN_SERVER_VER_PROTOBUF_PLACE_ORDER, MIN_SERVER_VER_PROTOBUF_COMPLETED_ORDER, MIN_SERVER_VER_PROTOBUF_CONTRACT_DATA, MIN_SERVER_VER_PROTOBUF_MARKET_DATA, MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS, MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA, MIN_SERVER_VER_PROTOBUF_NEWS_DATA, MIN_SERVER_VER_PROTOBUF_SCAN_DATA, MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_1, MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_2, MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3, } from './server-versions.js';
function floatMaxString(val) {
    return val === Number.MAX_VALUE ? '' : String(val);
}
function decimalMaxString(val) {
    return val.eq(UNSET_DECIMAL) ? '' : val.toString();
}
function intMaxString(val) {
    return val === UNSET_INTEGER ? '' : String(val);
}
export const FaDataTypeEnum = {
    'N/A': 0,
    GROUPS: 1,
    'N/A2': 2,
    ALIASES: 3,
};
export const MarketDataTypeEnum = {
    'N/A': 0,
    REALTIME: 1,
    FROZEN: 2,
    DELAYED: 3,
    DELAYED_FROZEN: 4,
};
export const LiquiditiesEnum = {
    None: 0,
    Added: 1,
    Remove: 2,
    RoudedOut: 3,
};
// --- Protobuf message ID map ---
export const PROTOBUF_MSG_ID = 200;
export const PROTOBUF_MSG_IDS = {
    [OUT.REQ_EXECUTIONS]: MIN_SERVER_VER_PROTOBUF,
    [OUT.PLACE_ORDER]: MIN_SERVER_VER_PROTOBUF_PLACE_ORDER,
    [OUT.CANCEL_ORDER]: MIN_SERVER_VER_PROTOBUF_PLACE_ORDER,
    [OUT.REQ_GLOBAL_CANCEL]: MIN_SERVER_VER_PROTOBUF_PLACE_ORDER,
    [OUT.REQ_ALL_OPEN_ORDERS]: MIN_SERVER_VER_PROTOBUF_COMPLETED_ORDER,
    [OUT.REQ_AUTO_OPEN_ORDERS]: MIN_SERVER_VER_PROTOBUF_COMPLETED_ORDER,
    [OUT.REQ_OPEN_ORDERS]: MIN_SERVER_VER_PROTOBUF_COMPLETED_ORDER,
    [OUT.REQ_COMPLETED_ORDERS]: MIN_SERVER_VER_PROTOBUF_COMPLETED_ORDER,
    [OUT.REQ_CONTRACT_DATA]: MIN_SERVER_VER_PROTOBUF_CONTRACT_DATA,
    [OUT.REQ_MKT_DATA]: MIN_SERVER_VER_PROTOBUF_MARKET_DATA,
    [OUT.CANCEL_MKT_DATA]: MIN_SERVER_VER_PROTOBUF_MARKET_DATA,
    [OUT.REQ_MKT_DEPTH]: MIN_SERVER_VER_PROTOBUF_MARKET_DATA,
    [OUT.CANCEL_MKT_DEPTH]: MIN_SERVER_VER_PROTOBUF_MARKET_DATA,
    [OUT.REQ_MARKET_DATA_TYPE]: MIN_SERVER_VER_PROTOBUF_MARKET_DATA,
    [OUT.REQ_ACCT_DATA]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.REQ_MANAGED_ACCTS]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.REQ_POSITIONS]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.CANCEL_POSITIONS]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.REQ_ACCOUNT_SUMMARY]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.CANCEL_ACCOUNT_SUMMARY]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.REQ_POSITIONS_MULTI]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.CANCEL_POSITIONS_MULTI]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.REQ_ACCOUNT_UPDATES_MULTI]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.CANCEL_ACCOUNT_UPDATES_MULTI]: MIN_SERVER_VER_PROTOBUF_ACCOUNTS_POSITIONS,
    [OUT.REQ_HISTORICAL_DATA]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.CANCEL_HISTORICAL_DATA]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.REQ_REAL_TIME_BARS]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.CANCEL_REAL_TIME_BARS]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.REQ_HEAD_TIMESTAMP]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.CANCEL_HEAD_TIMESTAMP]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.REQ_HISTOGRAM_DATA]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.CANCEL_HISTOGRAM_DATA]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.REQ_HISTORICAL_TICKS]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.REQ_TICK_BY_TICK_DATA]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.CANCEL_TICK_BY_TICK_DATA]: MIN_SERVER_VER_PROTOBUF_HISTORICAL_DATA,
    [OUT.REQ_NEWS_BULLETINS]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.CANCEL_NEWS_BULLETINS]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.REQ_NEWS_ARTICLE]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.REQ_NEWS_PROVIDERS]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.REQ_HISTORICAL_NEWS]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.REQ_WSH_META_DATA]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.CANCEL_WSH_META_DATA]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.REQ_WSH_EVENT_DATA]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.CANCEL_WSH_EVENT_DATA]: MIN_SERVER_VER_PROTOBUF_NEWS_DATA,
    [OUT.REQ_SCANNER_PARAMETERS]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.REQ_SCANNER_SUBSCRIPTION]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.CANCEL_SCANNER_SUBSCRIPTION]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.REQ_FUNDAMENTAL_DATA]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.CANCEL_FUNDAMENTAL_DATA]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.REQ_PNL]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.CANCEL_PNL]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.REQ_PNL_SINGLE]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.CANCEL_PNL_SINGLE]: MIN_SERVER_VER_PROTOBUF_SCAN_DATA,
    [OUT.REQ_FA]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_1,
    [OUT.REPLACE_FA]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_1,
    [OUT.EXERCISE_OPTIONS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_1,
    [OUT.REQ_CALC_IMPLIED_VOLAT]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_1,
    [OUT.CANCEL_CALC_IMPLIED_VOLAT]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_1,
    [OUT.REQ_CALC_OPTION_PRICE]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_1,
    [OUT.CANCEL_CALC_OPTION_PRICE]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_1,
    [OUT.REQ_SEC_DEF_OPT_PARAMS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_2,
    [OUT.REQ_SOFT_DOLLAR_TIERS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_2,
    [OUT.REQ_FAMILY_CODES]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_2,
    [OUT.REQ_MATCHING_SYMBOLS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_2,
    [OUT.REQ_SMART_COMPONENTS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_2,
    [OUT.REQ_MARKET_RULE]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_2,
    [OUT.REQ_USER_INFO]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_2,
    [OUT.REQ_IDS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.REQ_CURRENT_TIME]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.REQ_CURRENT_TIME_IN_MILLIS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.START_API]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.SET_SERVER_LOGLEVEL]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.VERIFY_REQUEST]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.VERIFY_MESSAGE]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.QUERY_DISPLAY_GROUPS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.SUBSCRIBE_TO_GROUP_EVENTS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.UPDATE_DISPLAY_GROUP]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.UNSUBSCRIBE_FROM_GROUP_EVENTS]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
    [OUT.REQ_MKT_DEPTH_EXCHANGES]: MIN_SERVER_VER_PROTOBUF_REST_MESSAGES_3,
};
// --- Data classes ---
export class BarData {
    date = '';
    open = 0.0;
    high = 0.0;
    low = 0.0;
    close = 0.0;
    volume = UNSET_DECIMAL;
    wap = UNSET_DECIMAL;
    barCount = 0;
    toString() {
        return (`Date: ${this.date}, ` +
            `Open: ${floatMaxString(this.open)}, ` +
            `High: ${floatMaxString(this.high)}, ` +
            `Low: ${floatMaxString(this.low)}, ` +
            `Close: ${floatMaxString(this.close)}, ` +
            `Volume: ${decimalMaxString(this.volume)}, ` +
            `WAP: ${decimalMaxString(this.wap)}, ` +
            `BarCount: ${intMaxString(this.barCount)}`);
    }
}
export class RealTimeBar {
    time;
    endTime;
    open_;
    high;
    low;
    close;
    volume;
    wap;
    count;
    constructor(time = 0, endTime = -1, open_ = 0.0, high = 0.0, low = 0.0, close = 0.0, volume = UNSET_DECIMAL, wap = UNSET_DECIMAL, count = 0) {
        this.time = time;
        this.endTime = endTime;
        this.open_ = open_;
        this.high = high;
        this.low = low;
        this.close = close;
        this.volume = volume;
        this.wap = wap;
        this.count = count;
    }
    toString() {
        return (`Time: ${intMaxString(this.time)}, Open: ${floatMaxString(this.open_)}, ` +
            `High: ${floatMaxString(this.high)}, Low: ${floatMaxString(this.low)}, ` +
            `Close: ${floatMaxString(this.close)}, Volume: ${decimalMaxString(this.volume)}, ` +
            `WAP: ${decimalMaxString(this.wap)}, Count: ${intMaxString(this.count)}`);
    }
}
export class HistogramData {
    price = 0.0;
    size = UNSET_DECIMAL;
    toString() {
        return `Price: ${floatMaxString(this.price)}, Size: ${decimalMaxString(this.size)}`;
    }
}
export class NewsProvider {
    code = '';
    name = '';
    toString() {
        return `Code: ${this.code}, Name: ${this.name}`;
    }
}
export class DepthMktDataDescription {
    exchange = '';
    secType = '';
    listingExch = '';
    serviceDataType = '';
    aggGroup = UNSET_INTEGER;
    toString() {
        const aggGroup = this.aggGroup !== UNSET_INTEGER ? intMaxString(this.aggGroup) : '';
        return (`Exchange: ${this.exchange}, SecType: ${this.secType}, ` +
            `ListingExchange: ${this.listingExch}, ServiceDataType: ${this.serviceDataType}, ` +
            `AggGroup: ${aggGroup}, `);
    }
}
export class SmartComponent {
    bitNumber = 0;
    exchange = '';
    exchangeLetter = '';
    toString() {
        return `BitNumber: ${this.bitNumber}, Exchange: ${this.exchange}, ExchangeLetter: ${this.exchangeLetter}`;
    }
}
export class TickAttrib {
    canAutoExecute = false;
    pastLimit = false;
    preOpen = false;
    toString() {
        return `CanAutoExecute: ${+this.canAutoExecute}, PastLimit: ${+this.pastLimit}, PreOpen: ${+this.preOpen}`;
    }
}
export class TickAttribBidAsk {
    bidPastLow = false;
    askPastHigh = false;
    toString() {
        return `BidPastLow: ${+this.bidPastLow}, AskPastHigh: ${+this.askPastHigh}`;
    }
}
export class TickAttribLast {
    pastLimit = false;
    unreported = false;
    toString() {
        return `PastLimit: ${+this.pastLimit}, Unreported: ${+this.unreported}`;
    }
}
export class FamilyCode {
    accountID = '';
    familyCodeStr = '';
    toString() {
        return `AccountId: ${this.accountID}, FamilyCodeStr: ${this.familyCodeStr}`;
    }
}
export class PriceIncrement {
    lowEdge = 0.0;
    increment = 0.0;
    toString() {
        return `LowEdge: ${floatMaxString(this.lowEdge)}, Increment: ${floatMaxString(this.increment)}`;
    }
}
export class HistoricalTick {
    time = 0;
    price = 0.0;
    size = UNSET_DECIMAL;
    toString() {
        return `Time: ${intMaxString(this.time)}, Price: ${floatMaxString(this.price)}, Size: ${decimalMaxString(this.size)}`;
    }
}
export class HistoricalTickBidAsk {
    time = 0;
    tickAttribBidAsk = new TickAttribBidAsk();
    priceBid = 0.0;
    priceAsk = 0.0;
    sizeBid = UNSET_DECIMAL;
    sizeAsk = UNSET_DECIMAL;
    toString() {
        return (`Time: ${intMaxString(this.time)}, ` +
            `TickAttriBidAsk: ${this.tickAttribBidAsk.toString()}, ` +
            `PriceBid: ${floatMaxString(this.priceBid)}, ` +
            `PriceAsk: ${floatMaxString(this.priceAsk)}, ` +
            `SizeBid: ${decimalMaxString(this.sizeBid)}, ` +
            `SizeAsk: ${decimalMaxString(this.sizeAsk)}`);
    }
}
export class HistoricalTickLast {
    time = 0;
    tickAttribLast = new TickAttribLast();
    price = 0.0;
    size = UNSET_DECIMAL;
    exchange = '';
    specialConditions = '';
    toString() {
        return (`Time: ${intMaxString(this.time)}, ` +
            `TickAttribLast: ${this.tickAttribLast.toString()}, ` +
            `Price: ${floatMaxString(this.price)}, ` +
            `Size: ${decimalMaxString(this.size)}, ` +
            `Exchange: ${this.exchange}, ` +
            `SpecialConditions: ${this.specialConditions}`);
    }
}
export class HistoricalSession {
    startDateTime = '';
    endDateTime = '';
    refDate = '';
    toString() {
        return `Start: ${this.startDateTime}, End: ${this.endDateTime}, Ref Date: ${this.refDate}`;
    }
}
export class WshEventData {
    conId = UNSET_INTEGER;
    filter = '';
    fillWatchlist = false;
    fillPortfolio = false;
    fillCompetitors = false;
    startDate = '';
    endDate = '';
    totalLimit = UNSET_INTEGER;
    toString() {
        return (`WshEventData. ConId: ${intMaxString(this.conId)}, ` +
            `Filter: ${this.filter}, ` +
            `Fill Watchlist: ${+this.fillWatchlist}, ` +
            `Fill Portfolio: ${+this.fillPortfolio}, ` +
            `Fill Competitors: ${+this.fillCompetitors}`);
    }
}
//# sourceMappingURL=common.js.map