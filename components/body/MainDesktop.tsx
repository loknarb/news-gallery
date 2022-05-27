import React from 'react';
import useSideBar from '../hooks/useSideBarHook';
import NewsList from './NewsList';
import Sidebar from './Sidebar/Sidebar';
const MainDesktop = () => {
  const { sideBar } = useSideBar((state) => state);
  return (
    <div className='flex flex-row md:pl-52 pt-14 bg-slate-100 dark:bg-[#151718]'>
      <main className={`${sideBar ? 'pl-16' : 'pl-64'} pr-6 pt-8 w-full h-full mx-auto`}>
        <NewsList />
      </main>
      <Sidebar />
    </div>
  );
};

export default MainDesktop;
