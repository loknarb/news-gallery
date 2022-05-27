import React, { useState } from 'react';
import Card from '../UI/Card';
import Bookmark from '../UI/Bookmark';
import Discussion from '../UI/Discussions';
import Upvote from '../UI/Upvote';
import { NewsItemType } from '../../pages/types/types';
import ArticleDate from './ArticleDate';
import Link from 'next/link';
import VerticalDots from '../UI/VerticalDots';
import Button from '../UI/Button';
import { useContextMenu } from 'react-contexify';
import useArticles from '../hooks/useArticleHook';
import ImageWithFallback from '../UI/ImageWithFallback';
import UnoptimizedImageFallback from '../UI/UnoptimizedImageFallback';
const NewsItem: React.FC<NewsItemType> = ({
  uuid,
  title,
  url,
  image_url,
  published_at,
  bookmark,
  upvoted,
  upvoteAmount,
  snippet,
}) => {
  const domain = new URL(url).hostname.replace('www.', '');
  const [hovered, setHovered] = useState(false);
  const { show } = useContextMenu({ id: uuid });
  const { bookmarkHandler, upvoteHandler } = useArticles((state) => state);
  function displayMenu(e: React.MouseEvent) {
    show(e, {
      props: { id: uuid },
    });
  }
  return (
    <>
      <Card>
        <article
          className='w-full h-80 flex flex-col justify-between'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          <a className='cursor-pointer z-0 w-full h-80 flex flex-col justify-between' href={url}>
            <div className='flex justify-between align-middle mt-1'>
              <Link href={url}>
                <div className='mx-4 relative h-6 w-6  rounded-full overflow-hidden'>
                  <ImageWithFallback
                    src={`https://logo.clearbit.com/${domain}`}
                    layout='fill'
                    alt={`${snippet}`}
                    fallbackSrc='/favicon.png'
                  />
                </div>
              </Link>
              <div className='h-6'>
                {hovered ? (
                  <Button className='z-20' onClick={displayMenu}>
                    <span className='text-gray-900 dark:text-[#AAB6C1] flex w-6'>
                      <VerticalDots />
                    </span>
                  </Button>
                ) : (
                  ''
                )}
              </div>
            </div>
            <h3 className='font-bold break-words text-gray-900 dark:text-[#AAB6C1] text-base line-clamp-3 mx-4'>
              {title}
            </h3>
            <div className='flex-1'></div>
            <div className='mx-4 text-xs text-gray-900 dark:text-[#AAB6C1] mb-1'>
              <ArticleDate published_at={published_at} />
            </div>
            <div className='relative h-40 w-full border rounded-lg border-slate-800 overflow-hidden'>
              <UnoptimizedImageFallback
                layout='fill'
                className='object-cover'
                src={image_url}
                alt={`${snippet}`}
              />
              {/* <Image layout='fill' className='object-cover' src={image_url} /> */}
            </div>
          </a>
          <div className='flex flex-row justify-around justify-self-end mt-2 border  border-[#33415524] rounded bg-slate-600 shadow-sm shadow-black border-b-0 '>
            <Button
              className={
                upvoted
                  ? 'flex flex-row  text-green-300  border-none rounded-none z-10 p-1 transition-all duration-300'
                  : 'flex flex-row text-slate-400 dark:text-[#AAB6C1] hover:text-green-300  rounded-md z-10 p-1 transition-all duration-300'
              }
              onClick={
                !upvoted ? () => upvoteHandler(uuid, 'ADD') : () => upvoteHandler(uuid, 'SUBTRACT')
              }>
              <Upvote />
              <span className='font-mono font-semibold tracking-tight'>{upvoteAmount}</span>
            </Button>
            <Button className='text-slate-400 dark:text-[#AAB6C1] hover:text-fuchsia-300  rounded-md z-10 p-1 transition-all duration-300'>
              <Discussion />
            </Button>
            <Button
              className={
                bookmark
                  ? '  hover:text-orange-300 p-1 z-10 text-orange-300 border-none rounded-none transition-all duration-300'
                  : 'text-slate-400 dark:text-[#AAB6C1] hover:text-orange-300   rounded-md p-1 z-10 transition-all duration-300'
              }
              onClick={
                !bookmark
                  ? () => bookmarkHandler(uuid, 'ADD')
                  : () => bookmarkHandler(uuid, 'REMOVE')
              }>
              <Bookmark />
            </Button>
          </div>
        </article>
      </Card>
    </>
  );
};

export default React.memo(NewsItem);
