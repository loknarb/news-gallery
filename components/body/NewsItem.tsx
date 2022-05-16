import React from 'react';
import Card from '../UI/Card';
import Bookmark from '../UI/Bookmark';
import Discussion from '../UI/Discussions';
import Upvote from '../UI/Upvote';
import { NewsItemType } from '../../pages/types/types';
import Image from 'next/image';

const NewsItem: React.FC<{
  uuid: NewsItemType['uuid'];
  categories: NewsItemType['categories'];
  title: NewsItemType['title'];
  description: NewsItemType['description'];
  url: NewsItemType['url'];
  image_url: NewsItemType['image_url'];
  source: NewsItemType['source'];
}> = ({ uuid, categories, title, description, url, image_url, source }) => {
  return (
    <li>
      <Card>
        <span>{title}</span>
        <span>{description}</span>
        <Image width={100} height={100} src={image_url} />
        <a href={url}>{source}</a>
        <Upvote />
        <Discussion />
        <Bookmark />
      </Card>
    </li>
  );
};

export default NewsItem;
