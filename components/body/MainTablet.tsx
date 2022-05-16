import React from 'react';
import useSideBar from '../hooks/useSideBarHook';
import NewsList from './NewsList';
import SidebarTablet from './Sidebar/SidebarTablet';

const MainTablet = () => {
  const { sideBar } = useSideBar((state) => state);
  return (
    <div className='flex flex-row md:pl-52 pt-14 h-screen'>
      {sideBar ? <SidebarTablet /> : ''}
      <NewsList />
    </div>
  );
};

export default MainTablet;
