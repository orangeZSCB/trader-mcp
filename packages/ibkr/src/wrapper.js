/**
 * Mirrors: ibapi/wrapper.py
 *
 * EWrapper is the callback interface that must be implemented to receive
 * responses from TWS/IBGW.  DefaultEWrapper provides no-op defaults for
 * every method so callers can override only the callbacks they need.
 */
// ---------------------------------------------------------------------------
// DefaultEWrapper — no-op implementation
// ---------------------------------------------------------------------------
/* eslint-disable @typescript-eslint/no-unused-vars */
export class DefaultEWrapper {
    // ── Connection & server ──────────────────────────────────────────────
    error(_reqId, _errorTime, _errorCode, _errorString, _advancedOrderRejectJson) { }
    winError(_text, _lastError) { }
    connectAck() { }
    connectionClosed() { }
    // ── Market data ──────────────────────────────────────────────────────
    marketDataType(_reqId, _marketDataType) { }
    tickPrice(_reqId, _tickType, _price, _attrib) { }
    tickSize(_reqId, _tickType, _size) { }
    tickSnapshotEnd(_reqId) { }
    tickGeneric(_reqId, _tickType, _value) { }
    tickString(_reqId, _tickType, _value) { }
    tickEFP(_reqId, _tickType, _basisPoints, _formattedBasisPoints, _totalDividends, _holdDays, _futureLastTradeDate, _dividendImpact, _dividendsToLastTradeDate) { }
    tickOptionComputation(_reqId, _tickType, _tickAttrib, _impliedVol, _delta, _optPrice, _pvDividend, _gamma, _vega, _theta, _undPrice) { }
    tickReqParams(_tickerId, _minTick, _bboExchange, _snapshotPermissions) { }
    tickNews(_tickerId, _timeStamp, _providerCode, _articleId, _headline, _extraData) { }
    // ── Orders ───────────────────────────────────────────────────────────
    orderStatus(_orderId, _status, _filled, _remaining, _avgFillPrice, _permId, _parentId, _lastFillPrice, _clientId, _whyHeld, _mktCapPrice) { }
    openOrder(_orderId, _contract, _order, _orderState) { }
    openOrderEnd() { }
    completedOrder(_contract, _order, _orderState) { }
    completedOrdersEnd() { }
    orderBound(_permId, _clientId, _orderId) { }
    // ── Account ──────────────────────────────────────────────────────────
    updateAccountValue(_key, _val, _currency, _accountName) { }
    updatePortfolio(_contract, _position, _marketPrice, _marketValue, _averageCost, _unrealizedPNL, _realizedPNL, _accountName) { }
    updateAccountTime(_timeStamp) { }
    accountDownloadEnd(_accountName) { }
    managedAccounts(_accountsList) { }
    accountSummary(_reqId, _account, _tag, _value, _currency) { }
    accountSummaryEnd(_reqId) { }
    accountUpdateMulti(_reqId, _account, _modelCode, _key, _value, _currency) { }
    accountUpdateMultiEnd(_reqId) { }
    // ── Positions ────────────────────────────────────────────────────────
    position(_account, _contract, _position, _avgCost) { }
    positionEnd() { }
    positionMulti(_reqId, _account, _modelCode, _contract, _pos, _avgCost) { }
    positionMultiEnd(_reqId) { }
    // ── Contract details ─────────────────────────────────────────────────
    nextValidId(_orderId) { }
    contractDetails(_reqId, _contractDetails) { }
    bondContractDetails(_reqId, _contractDetails) { }
    contractDetailsEnd(_reqId) { }
    // ── Executions ───────────────────────────────────────────────────────
    execDetails(_reqId, _contract, _execution) { }
    execDetailsEnd(_reqId) { }
    commissionAndFeesReport(_commissionAndFeesReport) { }
    // ── Market depth ─────────────────────────────────────────────────────
    updateMktDepth(_reqId, _position, _operation, _side, _price, _size) { }
    updateMktDepthL2(_reqId, _position, _marketMaker, _operation, _side, _price, _size, _isSmartDepth) { }
    mktDepthExchanges(_depthMktDataDescriptions) { }
    // ── News ─────────────────────────────────────────────────────────────
    updateNewsBulletin(_msgId, _msgType, _newsMessage, _originExch) { }
    newsProviders(_newsProviders) { }
    newsArticle(_requestId, _articleType, _articleText) { }
    historicalNews(_requestId, _time, _providerCode, _articleId, _headline) { }
    historicalNewsEnd(_requestId, _hasMore) { }
    // ── Financial Advisor ────────────────────────────────────────────────
    receiveFA(_faData, _cxml) { }
    replaceFAEnd(_reqId, _text) { }
    // ── Historical data ──────────────────────────────────────────────────
    historicalData(_reqId, _bar) { }
    historicalDataEnd(_reqId, _start, _end) { }
    historicalDataUpdate(_reqId, _bar) { }
    historicalSchedule(_reqId, _startDateTime, _endDateTime, _timeZone, _sessions) { }
    headTimestamp(_reqId, _headTimestamp) { }
    histogramData(_reqId, _items) { }
    historicalTicks(_reqId, _ticks, _done) { }
    historicalTicksBidAsk(_reqId, _ticks, _done) { }
    historicalTicksLast(_reqId, _ticks, _done) { }
    // ── Scanner ──────────────────────────────────────────────────────────
    scannerParameters(_xml) { }
    scannerData(_reqId, _rank, _contractDetails, _distance, _benchmark, _projection, _legsStr) { }
    scannerDataEnd(_reqId) { }
    // ── Real-time bars ───────────────────────────────────────────────────
    realtimeBar(_reqId, _time, _open_, _high, _low, _close, _volume, _wap, _count) { }
    // ── Tick-by-tick ─────────────────────────────────────────────────────
    tickByTickAllLast(_reqId, _tickType, _time, _price, _size, _tickAttribLast, _exchange, _specialConditions) { }
    tickByTickBidAsk(_reqId, _time, _bidPrice, _askPrice, _bidSize, _askSize, _tickAttribBidAsk) { }
    tickByTickMidPoint(_reqId, _time, _midPoint) { }
    // ── Fundamentals & misc ──────────────────────────────────────────────
    currentTime(_time) { }
    currentTimeInMillis(_timeInMillis) { }
    fundamentalData(_reqId, _data) { }
    deltaNeutralValidation(_reqId, _deltaNeutralContract) { }
    // ── Option chains ────────────────────────────────────────────────────
    securityDefinitionOptionParameter(_reqId, _exchange, _underlyingConId, _tradingClass, _multiplier, _expirations, _strikes) { }
    securityDefinitionOptionParameterEnd(_reqId) { }
    // ── Soft dollar tiers ────────────────────────────────────────────────
    softDollarTiers(_reqId, _tiers) { }
    // ── Symbol / family / smart / market rules ───────────────────────────
    familyCodes(_familyCodes) { }
    symbolSamples(_reqId, _contractDescriptions) { }
    smartComponents(_reqId, _smartComponentMap) { }
    marketRule(_marketRuleId, _priceIncrements) { }
    // ── PnL ──────────────────────────────────────────────────────────────
    pnl(_reqId, _dailyPnL, _unrealizedPnL, _realizedPnL) { }
    pnlSingle(_reqId, _pos, _dailyPnL, _unrealizedPnL, _realizedPnL, _value) { }
    // ── Reroute ──────────────────────────────────────────────────────────
    rerouteMktDataReq(_reqId, _conId, _exchange) { }
    rerouteMktDepthReq(_reqId, _conId, _exchange) { }
    // ── Display groups ───────────────────────────────────────────────────
    displayGroupList(_reqId, _groups) { }
    displayGroupUpdated(_reqId, _contractInfo) { }
    // ── Verify (deprecated) ──────────────────────────────────────────────
    verifyMessageAPI(_apiData) { }
    verifyCompleted(_isSuccessful, _errorText) { }
    verifyAndAuthMessageAPI(_apiData, _xyzChallange) { }
    verifyAndAuthCompleted(_isSuccessful, _errorText) { }
    // ── WSH ──────────────────────────────────────────────────────────────
    wshMetaData(_reqId, _dataJson) { }
    wshEventData(_reqId, _dataJson) { }
    // ── User info ────────────────────────────────────────────────────────
    userInfo(_reqId, _whiteBrandingId) { }
    // ── Protobuf callbacks ───────────────────────────────────────────────
    orderStatusProtoBuf(_orderStatusProto) { }
    openOrderProtoBuf(_openOrderProto) { }
    openOrdersEndProtoBuf(_openOrdersEndProto) { }
    errorProtoBuf(_errorMessageProto) { }
    executionDetailsProtoBuf(_executionDetailsProto) { }
    executionDetailsEndProtoBuf(_executionDetailsProto) { }
    completedOrderProtoBuf(_completedOrderProto) { }
    completedOrdersEndProtoBuf(_completedOrdersEndProto) { }
    orderBoundProtoBuf(_orderBoundProto) { }
    contractDataProtoBuf(_contractDataProto) { }
    bondContractDataProtoBuf(_contractDataProto) { }
    contractDataEndProtoBuf(_contractDataEndProto) { }
    tickPriceProtoBuf(_tickPriceProto) { }
    tickSizeProtoBuf(_tickSizeProto) { }
    tickOptionComputationProtoBuf(_tickOptionComputationProto) { }
    tickGenericProtoBuf(_tickGenericProto) { }
    tickStringProtoBuf(_tickStringProto) { }
    tickSnapshotEndProtoBuf(_tickSnapshotEndProto) { }
    updateMarketDepthProtoBuf(_marketDepthProto) { }
    updateMarketDepthL2ProtoBuf(_marketDepthL2Proto) { }
    updateMarketDataTypeProtoBuf(_marketDataTypeProto) { }
    tickReqParamsProtoBuf(_tickReqParamsProto) { }
    updateAccountValueProtoBuf(_accountValueProto) { }
    updatePortfolioProtoBuf(_portfolioValueProto) { }
    updateAccountTimeProtoBuf(_accountUpdateTimeProto) { }
    accountDataEndProtoBuf(_accountDataEndProto) { }
    managedAccountsProtoBuf(_managedAccountsProto) { }
    positionProtoBuf(_positionProto) { }
    positionEndProtoBuf(_positionEndProto) { }
    accountSummaryProtoBuf(_accountSummaryProto) { }
    accountSummaryEndProtoBuf(_accountSummaryEndProto) { }
    positionMultiProtoBuf(_positionMultiProto) { }
    positionMultiEndProtoBuf(_positionMultiEndProto) { }
    accountUpdateMultiProtoBuf(_accountUpdateMultiProto) { }
    accountUpdateMultiEndProtoBuf(_accountUpdateMultiEndProto) { }
    historicalDataProtoBuf(_historicalDataProto) { }
    historicalDataUpdateProtoBuf(_historicalDataUpdateProto) { }
    historicalDataEndProtoBuf(_historicalDataEndProto) { }
    realTimeBarTickProtoBuf(_realTimeBarTickProto) { }
    headTimestampProtoBuf(_headTimestampProto) { }
    histogramDataProtoBuf(_histogramDataProto) { }
    historicalTicksProtoBuf(_historicalTicksProto) { }
    historicalTicksBidAskProtoBuf(_historicalTicksBidAskProto) { }
    historicalTicksLastProtoBuf(_historicalTicksLastProto) { }
    tickByTickDataProtoBuf(_tickByTickDataProto) { }
    updateNewsBulletinProtoBuf(_newsBulletinProto) { }
    newsArticleProtoBuf(_newsArticleProto) { }
    newsProvidersProtoBuf(_newsProvidersProto) { }
    historicalNewsProtoBuf(_historicalNewsProto) { }
    historicalNewsEndProtoBuf(_historicalNewsEndProto) { }
    wshMetaDataProtoBuf(_wshMetaDataProto) { }
    wshEventDataProtoBuf(_wshEventDataProto) { }
    tickNewsProtoBuf(_tickNewsProto) { }
    scannerParametersProtoBuf(_scannerParametersProto) { }
    scannerDataProtoBuf(_scannerDataProto) { }
    fundamentalsDataProtoBuf(_fundamentalsDataProto) { }
    pnlProtoBuf(_pnlProto) { }
    pnlSingleProtoBuf(_pnlSingleProto) { }
    receiveFAProtoBuf(_receiveFAProto) { }
    replaceFAEndProtoBuf(_replaceFAEndProto) { }
    commissionAndFeesReportProtoBuf(_commissionAndFeesReportProto) { }
    historicalScheduleProtoBuf(_historicalScheduleProto) { }
    rerouteMarketDataRequestProtoBuf(_rerouteMarketDataRequestProto) { }
    rerouteMarketDepthRequestProtoBuf(_rerouteMarketDepthRequestProto) { }
    secDefOptParameterProtoBuf(_secDefOptParameterProto) { }
    secDefOptParameterEndProtoBuf(_secDefOptParameterEndProto) { }
    softDollarTiersProtoBuf(_softDollarTiersProto) { }
    familyCodesProtoBuf(_familyCodesProto) { }
    symbolSamplesProtoBuf(_symbolSamplesProto) { }
    smartComponentsProtoBuf(_smartComponentsProto) { }
    marketRuleProtoBuf(_marketRuleProto) { }
    userInfoProtoBuf(_userInfoProto) { }
    nextValidIdProtoBuf(_nextValidIdProto) { }
    currentTimeProtoBuf(_currentTimeProto) { }
    currentTimeInMillisProtoBuf(_currentTimeInMillisProto) { }
    verifyMessageApiProtoBuf(_verifyMessageApiProto) { }
    verifyCompletedProtoBuf(_verifyCompletedProto) { }
    displayGroupListProtoBuf(_displayGroupListProto) { }
    displayGroupUpdatedProtoBuf(_displayGroupUpdatedProto) { }
    marketDepthExchangesProtoBuf(_marketDepthExchangesProto) { }
    configResponseProtoBuf(_configResponseProto) { }
    updateConfigResponseProtoBuf(_updateConfigResponseProto) { }
}
//# sourceMappingURL=wrapper.js.map