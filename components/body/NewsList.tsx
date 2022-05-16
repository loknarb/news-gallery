import React from 'react';
import testData from '../../pages/api/fakeNewsApi.json';
const NewsList = () => {
  console.log(testData);
  return <div className='grid grid-cols-4 gap-3 bg-red-200'>Map here</div>;
};

export default NewsList;
