/**
 * News Collector — Zero-dependency RSS / Atom parser
 *
 * Handles standard RSS 2.0 (<item>) and Atom (<entry>) feeds.
 * Extracts: title, description/summary, link, guid/id, pubDate.
 * Supports CDATA-wrapped content.
 */
export interface ParsedFeedItem {
    title: string;
    content: string;
    link: string | null;
    guid: string | null;
    pubDate: Date | null;
}
/**
 * Fetch a feed URL and return parsed items.
 * Retries once after a 2s delay on failure.
 */
export declare function fetchAndParseFeed(url: string, retries?: number): Promise<ParsedFeedItem[]>;
/**
 * Parse an RSS/Atom XML string into structured items.
 */
export declare function parseRSSXml(xml: string): ParsedFeedItem[];
