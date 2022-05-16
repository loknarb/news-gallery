import React from 'react';
import useSideBar from '../../hooks/useSideBarHook';
import Button from '../../UI/Button';
import RightArrow from '../../UI/RightArrow';
import Discover from './Discover';
import Manage from './Manage';

const SidebarTablet = () => {
  const { hideSideBar } = useSideBar((state) => state);

  return (
    <>
      <div
        className='fixed w-full h-full bg-zinc-800 bg-opacity-50 z-20 cursor-pointer inset-0 '
        onClick={() => hideSideBar()}></div>
      <aside className='p-4 h-full z-30 w-60 flex-col flex fixed left-0 bg-slate-100 top-0 border-r border-r-slate-400'>
        <div className='self-end' onClick={() => hideSideBar()}>
          <Button>
            <RightArrow />
          </Button>
        </div>
        <Discover />
        <Manage />
      </aside>
    </>
  );
};

export default SidebarTablet;
