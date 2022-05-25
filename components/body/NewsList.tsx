import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Item, ItemParams, Menu } from 'react-contexify';
import useArticles from '../hooks/useArticleHook';
import NewsItem from './NewsItem';

import 'react-contexify/dist/ReactContexify.css';
import { LayoutProps, NewsItemType } from '../../pages/types/types';
import usePopUp from '../hooks/usePopUpHook';
import 'reactjs-popup/dist/index.css';
import useLayout from '../hooks/useLayout';
import SkeletonCard from '../UI/SkeletonCard';
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
    scrollFunctionEnabled,
  } = useArticles((state) => state);
  const { spacingType, layoutType } = useLayout((state) => state);
  const [initLayout, setLayout] = useState<LayoutProps>({
    display: `${layoutType}`,
    gridTemplateColumns: `repeat(auto-fit, minmax(300px, 300px))`,
    gap: `${spacingType}`,
  });
  useEffect(() => {
    if (layoutType === 'flex') {
      setLayout({
        display: `${layoutType}`,
        flexDirection: 'column',
        gap: `${spacingType}`,
      });
    } else if (layoutType === 'grid') {
      setLayout({
        display: `${layoutType}`,
        gridTemplateColumns: `repeat(auto-fit, minmax(300px, 300px))`,
        gap: `${spacingType}`,
      });
    } else {
      setLayout({
        display: `${layoutType}`,
        gridTemplateColumns: `repeat(auto-fit, minmax(300px, 300px))`,
        gap: `${spacingType}`,
      });
    }
  }, [spacingType, layoutType]);
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

    if (isApiSubscribed && scrollAmount > 0 && scrollFunctionEnabled) {
      scroll(scrollAmount);
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [scrollAmount]);

  let skeletonCards = Array(20).fill(0);
  return (
    <main className='w-full h-full justify-center' style={initLayout}>
      {skeletonCards.map((index: number) => (
        <SkeletonCard key={index} />
      ))}
      {/* {filteredArticles.map(
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
            upvoted,
            upvoteAmount,
            commentAmount,
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
                upvoted={upvoted}
                upvoteAmount={upvoteAmount}
                commentAmount={commentAmount}
              />
              <Menu key={`Menu${uuid}`} id={uuid}>
                <Item key={`hide${uuid}`} onClick={() => hideArticle(uuid)}>
                  Hide Post
                </Item>
                <Item key={`filter${uuid}`} onClick={() => filterSource(source)}>
                  Hide Posts from {source}
                </Item>
                <Item key={`clip${uuid}`} onClick={() => handleClipboardCopy(url)}>
                  Share this post
                </Item>
              </Menu>
            </>
          );
          if (index === 10) {
            return (
              <ul>
                <div ref={scrollDivRef} className='absolute h-1'></div>
                {body}
              </ul>
            );
          } else if (filteredArticles.length === index + 1) {
            return (
              <ul>
                <div ref={articleElementRef}></div>
                {body}
              </ul>
            );
          } else {
            return <ul>{body}</ul>;
          }
        }
      )} */}
    </main>
  );
};

export default React.memo(NewsList);
