export interface NovelSearchOption {
  Query: string;
  ttbkey: string;
  QueryType?: 'Keyword' | 'Title' | 'Author' | 'Publisher';
  SearchTarget?:
    | 'Book'
    | 'Foreign'
    | 'Music'
    | 'DVD'
    | 'Used'
    | 'eBook'
    | 'All';

  Start?: number;
  MaxResult?: number;
  Sort?:
    | 'Accuracy'
    | 'PublishTime'
    | 'Title'
    | 'SalesPOint'
    | 'CustomerRating'
    | 'MyReviewCount';
  Cover?: 'Big' | 'MidBig' | 'Mid' | 'Small' | 'Mini' | 'None';
  output?: 'js' | 'xml';
}

export interface Item {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  creator: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  customerReviewRank: number;
}

export interface QueryResult {
  readonly version: string;
  readonly title: string;
  readonly link: string;
  readonly pubDate: string;
  readonly imageUrl: string;
  readonly totalResults: number;
  readonly startIndex: number;
  readonly itemsPerPage: number;
  readonly query: string;
  readonly searchCategoryId: number;
  readonly searchCategoryName: string;
  readonly item: Item[];
}

export interface Search {
  (keyword: string): Promise<string[]>;
}
