import React from 'react';
import useSideBar from '../hooks/useSideBarHook';
import NewsList from './NewsList';
import SidebarMobile from './Sidebar/SidebarMobile';
const MainMobile = () => {
  const { sideBar } = useSideBar((state) => state);
  return (
    <div className='flex flex-row md:pl-52 pt-14 bg-slate-100 dark:bg-[#141717]'>
      <main className='pt-8 w-full mx-auto '>
        <NewsList />
      </main>
      <SidebarMobile />
    </div>
  );
};

export default MainMobile;
