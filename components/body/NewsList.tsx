import React from 'react';
import useArticles from '../hooks/useArticleHook';
import NewsItem from './NewsItem';
const NewsList = () => {
  const { articles } = useArticles((state) => state);
  return (
    <main
      className='w-full h-full grid gap-6 justify-center'
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(300px, 300px))` }}>
      {articles.map(
        ({ uuid, categories, title, description, url, image_url, source, published_at }) => (
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
        )
      )}
    </main>
  );
};

export default React.memo(NewsList);
