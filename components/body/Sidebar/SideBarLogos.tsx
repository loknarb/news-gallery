import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import useSideBar from '../../hooks/useSideBarHook';
import Button from '../../UI/Button';
import RightArrow from '../../UI/RightArrow';
import DiscoverLogos from './DiscoverLogos';
import ManageLogos from './ManageLogos';

const SideBarLogos = () => {
  const sidebar = {
    closed: {
      width: '240px',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    open: {
      width: '46px',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const { showSideBar, sideBar } = useSideBar((state) => state);
  return (
    <motion.aside
      animate={sideBar ? 'closed' : 'open'}
      variants={sidebar}
      exit={'open'}
      className='flex-col flex fixed left-0 border-r-2 bg-slate-700 border-r-slate-300 h-screen p-2 dark:bg-[#1F2937] dark:border-[#1A1E1F]'>
      <div className='self-end -mr-4 absolute' onClick={() => showSideBar()}>
        <Button className='bg-slate-100 text-slate-700 border-2 rounded border-slate-700 dark:bg-[#141717] dark:text-[#dad7d1] dark:border-[#1a1f24]'>
          <RightArrow />
        </Button>
      </div>
      <div className='mt-10'>
        <DiscoverLogos />
      </div>
      <div className='mt-5'>
        <ManageLogos />
      </div>
    </motion.aside>
  );
};

export default SideBarLogos;
