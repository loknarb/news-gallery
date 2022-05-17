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
        <article className='w-full h-80 flex flex-col justify-between cursor-pointer'>
          {/* <a href={url} className='w-full h-full inset-0 absolute'></a> */}
          <h3 className='font-bold break-words text-gray-900 truncate text-lg line-clamp-3 '>
            {title}
          </h3>
          <div className='flex-1'></div>
          <ArticleDate time={time} />
          {/* <span>{description}</span> */}
          <div className=''>
            <div className='relative h-40 w-full object-cover border rounded-md'>
              <Image layout='fill' src={image_url} />
            </div>
          </div>
          <a href={url}>{source}</a>
          <div className='flex flex-row justify-around justify-self-end'>
            <span className='text-green-300'>
              <Upvote />
            </span>
            <span className='text-fuchsia-300'>
              <Discussion />
            </span>
            <span className='text-orange-300'>
              <Bookmark />
            </span>
          </div>
        </article>
      </Card>
    </>
  );
};

export default React.memo(NewsItem);
