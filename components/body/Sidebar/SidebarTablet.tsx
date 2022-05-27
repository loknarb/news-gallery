import React from 'react';
import useSideBar from '../../hooks/useSideBarHook';
import Button from '../../UI/Button';
import RightArrow from '../../UI/RightArrow';
import Discover from './Discover';
import Manage from './Manage';

const SidebarTablet = () => {
  const { showSideBar, sideBar } = useSideBar((state) => state);
  console.log('targgetted');
  console.log(sideBar);
  return (
    <>
      <div
        className={`fixed w-full h-full bg-zinc-800 bg-opacity-50 z-30 cursor-pointer inset-0 ${
          sideBar ? 'opacity-0 w-0 h-0' : 'opacity-100 w-full h-full'
        }`}
        onClick={() => showSideBar()}></div>
      <aside
        className={`p-4 h-full z-40 w-60 flex-col flex fixed left-0 bg-slate-700 top-0 shadow-slate-900 shadow-lg dark:bg-[#1F2937] transition-transform ease-in-out duration-300 -translate-x-64 ${
          sideBar ? '-translate-x-64' : '-translate-x-0'
        }`}>
        <div className='self-end' onClick={() => showSideBar()}>
          <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-200 font-semibold'>
            <RightArrow />
          </Button>
        </div>
        <Discover mobile={true} />
        <Manage mobile={true} />
      </aside>
    </>
  );
};

export default SidebarTablet;
