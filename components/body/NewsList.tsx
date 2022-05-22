import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Item, ItemParams, Menu } from 'react-contexify';
import useArticles from '../hooks/useArticleHook';
import NewsItem from './NewsItem';

import 'react-contexify/dist/ReactContexify.css';
import { NewsItemType } from '../../pages/types/types';
import usePopUp from '../hooks/usePopUpHook';
import 'reactjs-popup/dist/index.css';
const NewsList = () => {
  const {
    filteredArticles,
    filterSource,
    hideArticle,
    scroll,
    scrollAmount,
    scrollIncrementer,
    scrollButtonShower,
    scrollButtonHider,
  } = useArticles((state) => state);
  const observerAPI = useRef<IntersectionObserver | null>(null);
  const observerScroll = useRef<IntersectionObserver | null>(null);
  const { openPopUp, closePopup } = usePopUp((state) => state);
  const handleClipboardCopy = (url: NewsItemType['url']) => {
    navigator.clipboard.writeText(url);
    openPopUp();
    setTimeout(closePopup, 3000);
  };
  const articleElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (observerAPI.current) observerAPI.current.disconnect();
      observerAPI.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          scrollIncrementer();
        }
      });
      if (node) observerAPI.current.observe(node);
    },
    [observerAPI]
  );
  const scrollDivRef = useCallback(
    (node: HTMLDivElement) => {
      observerScroll.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          scrollButtonHider();
        } else {
          scrollButtonShower();
        }
      });
      if (node) observerScroll.current.observe(node);
    },
    [observerScroll]
  );
  useEffect(() => {
    let isApiSubscribed = true;

    if (isApiSubscribed && scrollAmount > 0) {
      scroll(scrollAmount);
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [scrollAmount]);

  return (
    <main
      className='w-full h-full grid gap-6 justify-center'
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(300px, 300px))` }}>
      {filteredArticles.map(
        (
          {
            uuid,
            categories,
            title,
            description,
            url,
            image_url,
            source,
            published_at,
            bookmark,
            upvote,
          },
          index
        ) => {
          const body = (
            <>
              <NewsItem
                key={uuid}
                uuid={uuid}
                categories={categories}
                title={title}
                description={description}
                url={url}
                image_url={image_url}
                source={source}
                published_at={published_at}
                bookmark={bookmark}
                upvote={upvote}
              />
              <Menu key={`Menu${uuid}`} id={uuid}>
                <Item onClick={() => hideArticle(uuid)}>Hide Post</Item>
                <Item onClick={() => filterSource(source)}>Hide Posts from {source}</Item>
                <Item onClick={() => handleClipboardCopy(url)}>Share this post</Item>
              </Menu>
            </>
          );
          if (index === 10) {
            return (
              <>
                <div ref={scrollDivRef} className='absolute h-1'></div>
                {body}
              </>
            );
          } else if (filteredArticles.length === index + 1) {
            return (
              <>
                <div ref={articleElementRef}></div>
                {body}
              </>
            );
          } else {
            return <>{body}</>;
          }
        }
      )}
    </main>
  );
};

export default React.memo(NewsList);
