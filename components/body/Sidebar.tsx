import React, { useState } from 'react';
import useSideBar from '../hooks/useSideBarHook';
import Button from '../UI/Button';
import LeftArrow from '../UI/LeftArrow';
import RightArrow from '../UI/RightArrow';
import Discover from './Discover';
import Manage from './Manage';

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const { hideSideBar } = useSideBar((state) => state);
  return (
    <aside
      className='flex-col flex fixed left-0 w-60 border-r bg-slate-100 border-r-slate-400 h-screen p-4'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {hovered ? (
        <div className='self-end -mr-7' onClick={() => hideSideBar()}>
          <Button className='bg-white text-red-200 rounded-sm'>
            <LeftArrow />
          </Button>
        </div>
      ) : (
        ''
      )}
      <Discover />
      <Manage />
    </aside>
  );
};

export default Sidebar;
