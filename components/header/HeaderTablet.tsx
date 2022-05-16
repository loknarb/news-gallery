import React from 'react';
import Search from './Search';
import MenuLogo from './MenuLogo';
import Image from 'next/image';
import icon from '../../public/favicon.png';
const HeaderMobile = () => {
  return (
    <header className='w-full flex z-10 flex-row top-0 fixed items-center h-14 '>
      <MenuLogo />
      <div className='flex'>
        <Image width={'28px'} height={'28px'} src={icon} />
        <h1 className='text-2xl'>Tech News</h1>
      </div>
    </header>
  );
};

export default HeaderMobile;
