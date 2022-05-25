import React from 'react';
import useSideBar from '../hooks/useSideBarHook';
import NewsList from './NewsList';
import Sidebar from './Sidebar/Sidebar';
import SideBarLogos from './Sidebar/SideBarLogos';
import { AnimatePresence, motion } from 'framer-motion';
const MainDesktop = () => {
  const sidebar = {
    open: {
      width: '240px',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      width: '0px',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const { sideBar, showSideBar } = useSideBar((state) => state);
  console.log(sideBar);
  return (
    <div className='flex flex-row md:pl-52 pt-14 bg-slate-100 dark:bg-[#151718]'>
      <main className='pl-64 pr-6 pt-8 w-full mx-auto '>
        <NewsList />
      </main>
      <AnimatePresence>{sideBar ? <Sidebar /> : <SideBarLogos />}</AnimatePresence>
    </div>
  );
};

export default MainDesktop;
