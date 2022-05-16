import { StaticImageData } from 'next/image';

export interface NewsItem {
  uuid: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  image_url: StaticImageData | string;
  source: string;
}

export interface NewsItemProps {
  newsItems: NewsItem[];
}

export interface NewsItemProp {
  specificNews: NewsItem;
}
