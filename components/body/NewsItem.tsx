import React, { useState } from 'react';
import Card from '../UI/Card';
import Bookmark from '../UI/Bookmark';
import Discussion from '../UI/Discussions';
import Upvote from '../UI/Upvote';
import { NewsItemType } from '../../pages/types/types';
import Image from 'next/image';
import ArticleDate from './ArticleDate';
import Link from 'next/link';
const useElement = (initialValue: Element) => {
  useState<Element>(initialValue);
};
const NewsItem: React.FC<{
  uuid: NewsItemType['uuid'];
  categories: NewsItemType['categories'];
  title: NewsItemType['title'];
  description: NewsItemType['description'];
  url: NewsItemType['url'];
  image_url: NewsItemType['image_url'];
  source: NewsItemType['source'];
  published_at: NewsItemType['published_at'];
}> = ({ uuid, categories, title, description, url, image_url, source, published_at }) => {
  const domain = new URL(url).hostname.replace('www.', '');

  return (
    <>
      <Card>
        <Link className='cursor-pointer' href={url}>
          <article className='w-full h-80 flex flex-col justify-between'>
            <Link href={url}>
              <div className='relative h-5 w-5 overflow-hidden'>
                <Image layout='fill' src={`https://logo.clearbit.com/${domain}`} />
              </div>
            </Link>
            <h3 className='font-bold break-words text-gray-900 text-lg line-clamp-3 mx-4'>
              {title}
            </h3>
            <div className='flex-1'></div>
            <div className='mx-4 text-xs text-gray-900 mb-1'>
              <ArticleDate published_at={published_at} />
            </div>
            {/* <span>{description}</span> */}
            <div className=''>
              <div className='relative h-40 w-full border rounded-lg overflow-hidden'>
                <Image unoptimized layout='fill' className='object-cover' src={image_url} />
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
        </Link>
      </Card>
    </>
  );
};

export default React.memo(NewsItem);
