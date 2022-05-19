import React, { useState } from 'react';
import Card from '../UI/Card';
import Bookmark from '../UI/Bookmark';
import Discussion from '../UI/Discussions';
import Upvote from '../UI/Upvote';
import { NewsItemType } from '../../pages/types/types';
import Image from 'next/image';
import ArticleDate from './ArticleDate';
import Link from 'next/link';
import VerticalDots from '../UI/VerticalDots';
import Button from '../UI/Button';
import { useContextMenu } from 'react-contexify';
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
  const [hovered, setHovered] = useState(false);
  const { show } = useContextMenu({ id: uuid });

  function displayMenu(e: React.MouseEvent) {
    show(e, {
      props: { id: uuid },
    });
  }
  return (
    <>
      <Card>
        <Link className='cursor-pointer' href={url}>
          <article
            className='w-full h-80 flex flex-col justify-between'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className='flex justify-between align-middle mt-1'>
              <Link href={url}>
                <div className='mx-4 relative h-6 w-6  rounded-full overflow-hidden'>
                  <Image layout='fill' src={`https://logo.clearbit.com/${domain}`} />
                </div>
              </Link>
              <div className='h-6'>
                {hovered ? (
                  <Button className='z-20' onClick={displayMenu}>
                    <span className='text-gray-900 flex w-6'>
                      <VerticalDots />
                    </span>
                  </Button>
                ) : (
                  ''
                )}
              </div>
            </div>
            <h3 className='font-bold break-words text-gray-900 text-base line-clamp-3 mx-4'>
              {title}
            </h3>
            <div className='flex-1'></div>
            <div className='mx-4 text-xs text-gray-900 mb-1'>
              <ArticleDate published_at={published_at} />
            </div>
            <div className=''>
              <div className='relative h-40 w-full border rounded-lg border-slate-800 overflow-hidden'>
                <Image unoptimized layout='fill' className='object-cover' src={image_url} />
              </div>
            </div>
            <div className='flex flex-row justify-around justify-self-end mt-2'>
              <span className='text-gray-900 hover:text-green-300 hover:bg-gray-900 rounded-md z-10 p-1'>
                <Upvote />
              </span>
              <span className='text-gray-900 hover:text-fuchsia-300 hover:bg-gray-900 rounded-md z-10 p-1'>
                <Discussion />
              </span>
              <span className='text-gray-900 hover:text-orange-300  hover:bg-gray-900 rounded-md p-1 z-10'>
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
