import React, { useState } from 'react';
import useSideBar from '../../hooks/useSideBarHook';
import Button from '../../UI/Button';
import LeftArrow from '../../UI/LeftArrow';
import Discover from './Discover';
import Manage from './Manage';
const Sidebar = () => {
  const [hovered, setHovered] = useState(false);
  const { hideSideBar, sideBar, showSideBar } = useSideBar((state) => state);
  return (
    <aside
      className={`flex-col flex fixed left-0 border-r-2 bg-slate-700 dark:bg-[#1F2937] dark:border-[#1A1E1F] shadow-md transition-all duration-500 rounded-br-lg ${
        sideBar ? 'w-11 p-1' : 'w-60 p-4'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {hovered ? (
        <div
          className={`self-end -mr-7 absolute transition-transform ${
            sideBar ? '-translate-x-2 z-10' : ''
          }`}
          onClick={sideBar ? () => hideSideBar() : () => showSideBar()}>
          <Button
            className={`${
              sideBar ? 'rotate-180' : ''
            } bg-slate-100 text-slate-700 border-2 rounded border-slate-700 dark:bg-[#141717] dark:text-[#dad7d1] dark:border-[#1a1f24] `}>
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

export default React.memo(Sidebar);
