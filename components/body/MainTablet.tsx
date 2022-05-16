import React from 'react';
import NewsList from './NewsList';

const MainTablet = () => {
  return (
    <div className='flex flex-row md:pl-52 pt-14 h-50'>
      <NewsList />
    </div>
  );
};

export default MainTablet;