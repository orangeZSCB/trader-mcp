/**
 * Miscellaneous decoder handlers (text + protobuf).
 *
 * Message types:
 *   IN.ERR_MSG                                     (4)
 *   IN.CURRENT_TIME                                (49)
 *   IN.CURRENT_TIME_IN_MILLIS                      (109)
 *   IN.NEWS_BULLETINS                              (14)
 *   IN.RECEIVE_FA                                  (16)
 *   IN.SCANNER_PARAMETERS                          (19)
 *   IN.SCANNER_DATA                                (20)
 *   IN.FUNDAMENTAL_DATA                            (51)
 *   IN.NEWS_PROVIDERS                              (85)
 *   IN.NEWS_ARTICLE                                (83)
 *   IN.TICK_NEWS                                   (84)
 *   IN.HISTORICAL_NEWS                             (86)
 *   IN.HISTORICAL_NEWS_END                         (87)
 *   IN.SECURITY_DEFINITION_OPTION_PARAMETER        (75)
 *   IN.SECURITY_DEFINITION_OPTION_PARAMETER_END    (76)
 *   IN.SOFT_DOLLAR_TIERS                           (77)
 *   IN.FAMILY_CODES                                (78)
 *   IN.SMART_COMPONENTS                            (82)
 *   IN.MKT_DEPTH_EXCHANGES                         (80)
 *   IN.VERIFY_MESSAGE_API                          (65)
 *   IN.VERIFY_COMPLETED                            (66)
 *   IN.VERIFY_AND_AUTH_MESSAGE_API                  (69)
 *   IN.VERIFY_AND_AUTH_COMPLETED                    (70)
 *   IN.DISPLAY_GROUP_LIST                           (67)
 *   IN.DISPLAY_GROUP_UPDATED                        (68)
 *   IN.WSH_META_DATA                                (104)
 *   IN.WSH_EVENT_DATA                               (105)
 *   IN.USER_INFO                                    (107)
 *   IN.REPLACE_FA_END                               (103)
 *   IN.CONFIG_RESPONSE                              (110)
 *   IN.UPDATE_CONFIG_RESPONSE                       (111)
 */
import type { Decoder } from './base.js';
export declare function applyMiscHandlers(decoder: Decoder): void;
