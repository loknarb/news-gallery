import React from 'react';
import useSideBar from '../hooks/useSideBarHook';
import NewsList from './NewsList';
import SidebarTablet from './Sidebar/SidebarTablet';

const MainTablet = () => {
  const { sideBar } = useSideBar((state) => state);
  return (
    <div className='flex flex-row md:pl-52 pt-14  bg-slate-100'>
      {sideBar ? <SidebarTablet /> : ''}
      <main className='pt-8 w-full mx-auto'>
        <NewsList />
      </main>
    </div>
  );
};

export default MainTablet;
