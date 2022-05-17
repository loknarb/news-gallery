import React from 'react';
import Search from './Search';
import MenuLogo from '../UI/MenuLogo';
import Image from 'next/image';
import icon from '../../public/favicon.png';
import Button from '../UI/Button';
import useSideBar from '../hooks/useSideBarHook';
const HeaderMobile = () => {
  const { showSideBar } = useSideBar((state) => state);
  return (
    <>
      <div className='flex-1'>
        <Button className='text-slate-200' onClick={() => showSideBar()}>
          <MenuLogo />
        </Button>
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
