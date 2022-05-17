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
        <a href={url}>
          <article className='w-full h-80 flex flex-col justify-between'>
            <a href={url}>{source}</a>
            <h3 className='font-bold break-words text-gray-900 text-lg line-clamp-3 mx-4'>
              {title}
            </h3>
            <div className='flex-1'></div>
            <div className='mx-4 text-xs text-gray-900 mb-1'>
              <ArticleDate time={time} />
            </div>
            {/* <span>{description}</span> */}
            <div className=''>
              <div className='relative h-40 w-full border rounded-lg overflow-hidden'>
                <Image layout='fill' className='object-cover' src={image_url} />
              </div>
            </div>
            <div className='flex flex-row justify-around justify-self-end mt-2'>
              <span className='text-gray-400 hover:text-green-300 z-10'>
                <Upvote />
              </span>
              <span className='text-gray-400 hover:text-fuchsia-300 z-10'>
                <Discussion />
              </span>
              <span className='text-gray-400 hover:text-orange-300 z-10'>
                <Bookmark />
              </span>
            </div>
          </article>
        </a>
      </Card>
    </>
  );
};

export default React.memo(NewsItem);
