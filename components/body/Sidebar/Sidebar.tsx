import React, { useState } from 'react';
import useSideBar from '../../hooks/useSideBarHook';
import Button from '../../UI/Button';
import LeftArrow from '../../UI/LeftArrow';
import Discover from './Discover';
import Manage from './Manage';
import { AnimatePresence, motion } from 'framer-motion';
const Sidebar = () => {
  const sidebar = {
    closed: {
      width: '46px',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    open: {
      width: '240px',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const [hovered, setHovered] = useState(false);
  const { hideSideBar, sideBar } = useSideBar((state) => state);
  return (
    <motion.aside
      animate={sideBar ? 'open' : 'closed'}
      variants={sidebar}
      exit={'closed'}
      className='flex-col flex fixed left-0 border-r-2 bg-slate-700  h-screen p-4 dark:bg-[#1F2937] dark:border-[#1A1E1F] shadow-md'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {hovered ? (
        <div className='self-end -mr-7 absolute' onClick={() => hideSideBar()}>
          <Button className='bg-slate-100 text-slate-700 border-2 rounded border-slate-700 dark:bg-[#141717] dark:text-[#dad7d1] dark:border-[#1a1f24]'>
            <LeftArrow />
          </Button>
        </div>
      ) : (
        ''
      )}
      <Discover />
      <Manage />
    </motion.aside>
  );
};

export default Sidebar;
