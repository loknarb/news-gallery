import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Item, ItemParams, Menu } from 'react-contexify';
import useArticles from '../hooks/useArticleHook';
import NewsItem from './NewsItem';

import 'react-contexify/dist/ReactContexify.css';
import { NewsItemType } from '../../pages/types/types';
import usePopUp from '../hooks/usePopUpHook';
import 'reactjs-popup/dist/index.css';
const NewsList = () => {
  const { filteredArticles, filterSource, hideArticle, scroll, scrollAmount, scrollIncrementer } =
    useArticles((state) => state);
  const [counter, setCounter] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);
  const { openPopUp, closePopup } = usePopUp((state) => state);
  const handleClipboardCopy = (url: NewsItemType['url']) => {
    navigator.clipboard.writeText(url);
    openPopUp();
    setTimeout(closePopup, 3000);
  };
  const articleElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          scrollIncrementer();
        }
      });
      if (node) observer.current.observe(node);
    },
    [observer]
  );
  useEffect(() => {
    let isApiSubscribed = true;

    if (isApiSubscribed && scrollAmount > 0) {
      console.log(scrollAmount);
      scroll(scrollAmount);
    }
    return () => {
      isApiSubscribed = false;
    };
    // return () => scroll(scrollAmount);
  }, [scrollAmount]);
  return (
    <main
      className='w-full h-full grid gap-6 justify-center'
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(300px, 300px))` }}>
      {filteredArticles.map(
        ({ uuid, categories, title, description, url, image_url, source, published_at }, index) => {
          if (filteredArticles.length === index + 1) {
            return (
              <>
                <div ref={articleElementRef}></div>
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
                />

                <Menu key={`Menu${uuid}`} id={uuid}>
                  <Item onClick={() => hideArticle(uuid)}>Hide Post</Item>
                  <Item onClick={() => filterSource(source)}>Hide Posts from {source}</Item>
                  <Item onClick={() => handleClipboardCopy(url)}>Share this post</Item>
                </Menu>
              </>
            );
          } else {
            return (
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
                />

                <Menu key={`Menu${uuid}`} id={uuid}>
                  <Item onClick={() => hideArticle(uuid)}>Hide Post</Item>
                  <Item onClick={() => filterSource(source)}>Hide Posts from {source}</Item>
                  <Item onClick={() => handleClipboardCopy(url)}>Share this post</Item>
                </Menu>
              </>
            );
          }
        }
      )}
    </main>
  );
};

export default NewsList;
