import React from 'react';
import useSideBar from '../../hooks/useSideBarHook';
import Button from '../../UI/Button';
import RightArrow from '../../UI/RightArrow';
import Discover from './Discover';
import Manage from './Manage';

const SidebarMobile = () => {
  const { hideSideBar } = useSideBar((state) => state);
  return (
    <>
      <div
        className='fixed w-full h-full bg-zinc-800 bg-opacity-50 z-30 cursor-pointer inset-0 '
        onClick={() => hideSideBar()}></div>
      <aside className='p-4 h-full z-40 w-60 flex-col flex fixed left-0 bg-slate-700 top-0 border-r border-r-slate-400'>
        <div className='self-end' onClick={() => hideSideBar()}>
          <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'>
            <RightArrow />
          </Button>
        </div>
        <Discover />
        <Manage />
      </aside>
    </>
  );
};

export default SidebarMobile;
