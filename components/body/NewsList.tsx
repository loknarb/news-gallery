import React from 'react';
import testData from '../../pages/api/fakeNewsApi.json';
import { NewsItemType } from '../../pages/types/types';
import List from '../UI/List';
import NewsItem from './NewsItem';
const NewsList = () => {
  // console.log(testData);

  return (
    <main className='w-full h-full grid grid-cols-4 gap-3 bg-red-200'>
      {testData.data.map(({ uuid, categories, title, description, url, image_url, source }) => (
        <NewsItem
          key={uuid}
          uuid={uuid}
          categories={categories}
          title={title}
          description={description}
          url={url}
          image_url={image_url}
          source={source}
        />
      ))}
    </main>
  );
};

export default NewsList;
