import React, { useState } from 'react';
import MenuLogo from '../UI/MenuLogo';
import Image from 'next/image';
import icon from '../../public/favicon.png';
import SearchMobile from './SearchMobile';
import useSideBar from '../hooks/useSideBarHook';
import Button from '../UI/Button';
const HeaderMobile = () => {
  const [searchShown, setSearchShown] = useState(false);
  const { showSideBar } = useSideBar((state) => state);
  return (
    <>
      <div className='flex-1'>
        <Button onClick={() => showSideBar()}>
          <MenuLogo />
        </Button>
      </div>
      {!searchShown ? (
        <div className='flex justify-center flex-1'>
          <Image width={'28px'} height={'28px'} src={icon} />
        </div>
      ) : (
        ''
      )}
      <div className='flex justify-end flex-1'>
        <SearchMobile onShown={setSearchShown} searchShown={searchShown} />
      </div>
    </>
  );
};

export default HeaderMobile;
