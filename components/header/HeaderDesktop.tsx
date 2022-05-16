import Image from 'next/image';
import React from 'react';
import MenuLogo from './MenuLogo';
import Search from './Search';
import icon from '../../public/favicon.png';

const HeaderDesktop = () => {
  return (
    <header>
      <MenuLogo />
      <div className='flex'>
        <Image width={'28px'} height={'28px'} src={icon} />
        <h1 className='text-2xl'>Tech News</h1>
      </div>
      <div className=''>
        <Search />
      </div>
    </header>
  );
};

export default HeaderDesktop;
