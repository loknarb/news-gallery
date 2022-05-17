import React from 'react';
import Card from '../UI/Card';
import Bookmark from '../UI/Bookmark';
import Discussion from '../UI/Discussions';
import Upvote from '../UI/Upvote';
import { NewsItemType } from '../../pages/types/types';
import Image from 'next/image';
import ArticleDate from './ArticleDate';

const NewsItem: React.FC<{
  uuid: NewsItemType['uuid'];
  categories: NewsItemType['categories'];
  title: NewsItemType['title'];
  description: NewsItemType['description'];
  url: NewsItemType['url'];
  image_url: NewsItemType['image_url'];
  source: NewsItemType['source'];
  time: NewsItemType['time'];
}> = ({ uuid, categories, title, description, url, image_url, source, time }) => {
  return (
    <>
      <Card>
        <div className='w-full h-full flex flex-col justify-between'>
          <span>{title}</span>
          <div className='flex-1'></div>
          <ArticleDate time={time} />
          {/* <span>{description}</span> */}
          <div className='h-40 object-cover'>
            <Image width={100} height={51} layout='responsive' src={image_url} />
          </div>
          <a href={url}>{source}</a>
          <div className='flex flex-row justify-around justify-self-end'>
            <Upvote />
            <Discussion />
            <Bookmark />
          </div>
        </div>
      </Card>
    </>
  );
};

export default NewsItem;
