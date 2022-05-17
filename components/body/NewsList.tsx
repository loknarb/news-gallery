import React from 'react';
import testData from '../../pages/api/fakeNewsApi.json';
import useWindowSize from '../hooks/useWindowSize';
import NewsItem from './NewsItem';
const NewsList = () => {
  let cards = 4;
  // const { width } = useWindowSize();
  // if (width! > 1920) {
  //   cards = 4;
  // }
  // if (width! < 1668) {
  //   cards = 3;
  // }
  // if (width! < 1360) {
  //   cards = 2;
  // }
  // console.log(cards);
  return (
    <main
      className='w-full h-full grid gap-6 justify-center'
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(300px, 300px))` }}>
      {testData.data.map(
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
            time={published_at}
          />
        )
      )}
    </main>
  );
};

export default NewsList;
