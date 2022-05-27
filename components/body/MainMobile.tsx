import React from 'react';
import NewsList from './NewsList';
import SidebarMobile from './Sidebar/SidebarMobile';
const MainMobile = () => {
  return (
    <div className='flex flex-row min-h-screen md:pl-52 pt-14 bg-slate-100 dark:bg-[#141717]'>
      <main className='pt-8 w-full h-full mx-auto '>
        <NewsList />
      </main>
      <SidebarMobile />
    </div>
  );
};

export default MainMobile;
