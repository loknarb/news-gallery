import { StaticImageData } from 'next/image';

export interface NewsItemType {
  uuid: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  image_url: StaticImageData | string;
  source: string;
  categories: string | string[];
}

export interface NewsItemProps {
  newsItems: NewsItemType[];
}

export interface NewsItemProp {
  specificNews: NewsItemType;
}
