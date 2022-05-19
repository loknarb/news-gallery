import React from 'react';
import { Item, ItemParams, Menu } from 'react-contexify';
import useArticles from '../hooks/useArticleHook';
import NewsItem from './NewsItem';

import 'react-contexify/dist/ReactContexify.css';
import { NewsItemType } from '../../pages/types/types';
import usePopUp from '../hooks/usePopUpHook';
import 'reactjs-popup/dist/index.css';
interface ItemProps {
  id: string;
}
type ItemData = any;
const NewsList = () => {
  const { filteredArticles, filterSource, hideArticle } = useArticles((state) => state);
  const { openPopUp, closePopup } = usePopUp((state) => state);
  // function handleItemClick({ event, props, data }: ItemParams<ItemProps, ItemData>) {}
  const handleClipboardCopy = (url: NewsItemType['url']) => {
    navigator.clipboard.writeText(url);
    openPopUp();
    setTimeout(closePopup, 3000);
  };
  return (
    <main
      className='w-full h-full grid gap-6 justify-center'
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(300px, 300px))` }}>
      {filteredArticles.map(
        ({ uuid, categories, title, description, url, image_url, source, published_at }) => (
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
        )
      )}
    </main>
  );
};

export default NewsList;
