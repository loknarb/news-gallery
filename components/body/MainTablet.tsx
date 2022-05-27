import React from 'react';
import NewsList from './NewsList';
import SidebarTablet from './Sidebar/SidebarTablet';

const MainTablet = () => {
  return (
    <div className='flex flex-row h-screen w-screen md:pl-52 pt-14 bg-slate-100 dark:bg-[#141717]'>
      <SidebarTablet />
      <main className='pt-8 w-full h-full mx-auto'>
        <NewsList />
      </main>
    </div>
  );
};

export default MainTablet;
