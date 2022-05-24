import { StaticImageData } from 'next/image';
import { Property } from 'csstype';
export interface NewsItemType {
  uuid: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  image_url: StaticImageData | string;
  source: string;
  categories: string | string[];
  published_at: string;
  upvote?: boolean;
  upvoteAmount?: number;
  bookmark?: boolean;
}

export interface NewsItemProps {
  newsItems: NewsItemType[];
}

export interface NewsItemProp {
  specificNews: NewsItemType;
}

export interface LayoutProps {
  display: string;
  flexDirection?: Property.FlexDirection;
  gridTemplateColumns?: string;
  gap: string;
}
