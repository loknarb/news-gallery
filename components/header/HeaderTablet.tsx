import React from 'react';
import Search from './Search';
import MenuLogo from './MenuLogo';
import Image from 'next/image';
import icon from '../../public/favicon.png';
const HeaderMobile = () => {
  return (
    <>
      <div className='flex-1'>
        <MenuLogo />
      </div>
      <div className='flex justify-center flex-1'>
        <Image width={'28px'} height={'28px'} src={icon} />
      </div>
      <div className='flex justify-end flex-1'>
        <Search />
      </div>
    </>
  );
};

export default HeaderMobile;
