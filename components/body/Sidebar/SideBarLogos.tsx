import React from 'react';
import useSideBar from '../../hooks/useSideBarHook';
import Button from '../../UI/Button';
import RightArrow from '../../UI/RightArrow';
import DiscoverLogos from './DiscoverLogos';
import ManageLogos from './ManageLogos';

const SideBarLogos = () => {
  const { showSideBar } = useSideBar((state) => state);
  return (
    <aside className='flex-col flex fixed left-0 w-15 border-r-2 bg-slate-700 border-r-slate-300 h-screen p-2'>
      <div className='self-end -mr-4 absolute' onClick={() => showSideBar()}>
        <Button className='bg-slate-100 text-slate-700 border-2 rounded border-slate-700'>
          <RightArrow />
        </Button>
      </div>
      <div className='mt-10'>
        <DiscoverLogos />
      </div>
      <div className='mt-5'>
        <ManageLogos />
      </div>
    </aside>
  );
};

export default SideBarLogos;
