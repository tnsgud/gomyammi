import { ParsedUrlQueryInput } from 'querystring';

export interface ImageSearchOption {
  enginId: string;
  apiKey: string;
  keyword: string;
}

export interface QueryInput extends ParsedUrlQueryInput {
  key: string;
  cx: string;
  q: string;
  readonly searchType: undefined | 'image';
}

interface Promotion {
  readonly title: string;
  readonly htmlTitle: string;
  readonly link: string;
  readonly displayLink: string;
  readonly bodyLines: {
    readonly title: string;
    readonly htmlTitle: string;
    readonly url: string;
    readonly link: string;
  }[];
  readonly image: {
    readonly source: string;
    readonly width: number;
    readonly height: number;
  };
}

export interface QueryResult {
  readonly kind: string;
  readonly url: {
    readonly type: string;
    readonly template: string;
  };
  readonly queries: {
    readonly previousPage: [
      {
        readonly title: string;
        readonly totalResults: string;
        readonly searchTerms: string;
        readonly count: number;
        readonly startIndex: number;
        readonly startPage: number;
        readonly language: string;
        readonly inputEncoding: string;
        readonly outputEncoding: string;
        readonly safe: string;
        readonly cx: string;
        readonly sort: string;
        readonly filter: string;
        readonly gl: string;
        readonly cr: string;
        readonly googleHost: string;
        readonly disableCnTwTranslation: string;
        readonly hq: string;
        readonly hl: string;
        readonly siteSearch: string;
        readonly siteSearchFilter: string;
        readonly exactTerms: string;
        readonly excludeTerms: string;
        readonly linkSite: string;
        readonly orTerms: string;
        readonly relatedSite: string;
        readonly dateRestrict: string;
        readonly lowRange: string;
        readonly highRange: string;
        readonly fileType: string;
        readonly rights: string;
        readonly searchType: string;
        readonly imgSize: string;
        readonly imgType: string;
        readonly imgColorType: string;
        readonly imgDominantColor: string;
      }
    ];
    readonly request: [
      {
        readonly title: string;
        readonly totalResults: string;
        readonly searchTerms: string;
        readonly count: number;
        readonly startIndex: number;
        readonly startPage: number;
        readonly language: string;
        readonly inputEncoding: string;
        readonly outputEncoding: string;
        readonly safe: string;
        readonly cx: string;
        readonly sort: string;
        readonly filter: string;
        readonly gl: string;
        readonly cr: string;
        readonly googleHost: string;
        readonly disableCnTwTranslation: string;
        readonly hq: string;
        readonly hl: string;
        readonly siteSearch: string;
        readonly siteSearchFilter: string;
        readonly exactTerms: string;
        readonly excludeTerms: string;
        readonly linkSite: string;
        readonly orTerms: string;
        readonly relatedSite: string;
        readonly dateRestrict: string;
        readonly lowRange: string;
        readonly highRange: string;
        readonly fileType: string;
        readonly rights: string;
        readonly searchType: string;
        readonly imgSize: string;
        readonly imgType: string;
        readonly imgColorType: string;
        readonly imgDominantColor: string;
      }
    ];
    readonly nextPage: [
      {
        readonly title: string;
        readonly totalResults: string;
        readonly searchTerms: string;
        readonly count: number;
        readonly startIndex: number;
        readonly startPage: number;
        readonly language: string;
        readonly inputEncoding: string;
        readonly outputEncoding: string;
        readonly safe: string;
        readonly cx: string;
        readonly sort: string;
        readonly filter: string;
        readonly gl: string;
        readonly cr: string;
        readonly googleHost: string;
        readonly disableCnTwTranslation: string;
        readonly hq: string;
        readonly hl: string;
        readonly siteSearch: string;
        readonly siteSearchFilter: string;
        readonly exactTerms: string;
        readonly excludeTerms: string;
        readonly linkSite: string;
        readonly orTerms: string;
        readonly relatedSite: string;
        readonly dateRestrict: string;
        readonly lowRange: string;
        readonly highRange: string;
        readonly fileType: string;
        readonly rights: string;
        readonly searchType: string;
        readonly imgSize: string;
        readonly imgType: string;
        readonly imgColorType: string;
        readonly imgDominantColor: string;
      }
    ];
  };
  readonly promotions: Promotion[];
  readonly context: object;
  readonly searchInformation: {
    readonly searchTime: number;
    readonly formattedSearchTime: string;
    readonly totalResults: string;
    readonly formattedTotalResults: string;
  };
  readonly spelling: {
    readonly correctedQuery: string;
    readonly htmlCorrectedQuery: string;
  };
  readonly items: ResultItem[];
}

interface ResultItem {
  readonly kind: string;
  readonly title: string;
  readonly htmlTitle: string;
  readonly link: string;
  readonly displayLink: string;
  readonly snippet: string;
  readonly htmlSnippet: string;
  readonly cacheId: string;
  readonly formattedUrl: string;
  readonly htmlFormattedUrl: string;
  readonly pagemap: object;
  readonly mime: string;
  readonly fileFormat: string;
  readonly image: {
    readonly contextLink: string;
    readonly height: number;
    readonly width: number;
    readonly byteSize: number;
    readonly thumbnailLink: string;
    readonly thumbnailHeight: number;
    readonly thumbnailWidth: number;
  };
  readonly labels: {
    readonly name: string;
    readonly displayName: string;
    readonly label_with_op: string;
  }[];
}

export interface Search {
  (options: ImageSearchOption): Promise<QueryResult>;
}
