import Image from 'next/image';
import React from 'react';
import MenuLogo from './MenuLogo';
import Search from './Search';
import icon from '../../public/favicon.png';

const HeaderDesktop = () => {
  return (
    <header className='w-full flex z-10 flex-row top-0 fixed items-center h-14 px-4 justify-between'>
      <div className='flex'>
        <Image className='px-4' width={'28px'} height={'28px'} src={icon} />
        <h1 className='text-2xl px-2 italic'>Tech News</h1>
      </div>
      <div className='border border-slate-200'>
        <Search />
      </div>
    </header>
  );
};

export default HeaderDesktop;
