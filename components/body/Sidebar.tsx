import React, { useState } from 'react';
import useSideBar from '../hooks/useSideBarHook';
import Button from '../UI/Button';
import RightArrow from '../UI/RightArrow';

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const { hideSideBar } = useSideBar((state) => state);
  return (
    <aside
      className='flex-col flex fixed left-0 w-60 border-r bg-slate-100 border-r-slate-400 h-screen p-4'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {hovered ? (
        <div className='self-end' onClick={() => hideSideBar()}>
          <Button>
            <RightArrow />
          </Button>
        </div>
      ) : (
        ''
      )}
    </aside>
  );
};

export default Sidebar;
