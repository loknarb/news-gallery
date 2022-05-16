import React from 'react';
import useSideBar from '../hooks/useSideBarHook';
import NewsList from './NewsList';
import SidebarMobile from './Sidebar/SidebarMobile';
const MainMobile = () => {
  const { sideBar } = useSideBar((state) => state);
  return (
    <div className='flex flex-row md:pl-52 pt-14 h-screen'>
      {sideBar ? <SidebarMobile /> : ''}
      <NewsList />
    </div>
  );
};

export default MainMobile;
