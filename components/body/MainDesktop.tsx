import React from 'react';
import NewsList from './NewsList';
import Sidebar from './Sidebar/Sidebar';

const MainDesktop = () => {
  return (
    <div className='flex flex-row md:pl-52 pt-14 bg-slate-100'>
      <Sidebar />
      <main className='pl-64 pr-6 pt-8 w-full mx-auto '>
        <NewsList />
      </main>
    </div>
  );
};

export default MainDesktop;
