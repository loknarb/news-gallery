import React from 'react';
import NewsList from './NewsList';
import Sidebar from './Sidebar';

const MainDesktop = () => {
  return (
    <div className='flex flex-row md:pl-52 pt-14 h-screen'>
      <Sidebar />
      <NewsList />
    </div>
  );
};

export default MainDesktop;
