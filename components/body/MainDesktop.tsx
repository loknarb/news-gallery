import React from 'react';
import useSideBar from '../hooks/useSideBarHook';
import NewsList from './NewsList';
import Sidebar from './Sidebar/Sidebar';
import SideBarLogos from './Sidebar/SideBarLogos';

const MainDesktop = () => {
  const { sideBar, showSideBar } = useSideBar((state) => state);
  return (
    <div className='flex flex-row md:pl-52 pt-14 bg-slate-100 dark:bg-[#151718]'>
      {sideBar ? (
        <>
          <Sidebar />
          <main className='pl-64 pr-6 pt-8 w-full mx-auto '>
            <NewsList />
          </main>
        </>
      ) : (
        <>
          <SideBarLogos />
          <main className='pl-20 pr-6 pt-8 w-full mx-auto '>
            <NewsList />
          </main>
        </>
      )}
    </div>
  );
};

export default MainDesktop;
