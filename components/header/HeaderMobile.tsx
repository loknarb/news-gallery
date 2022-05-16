import React, { useState } from 'react';
import MenuLogo from './MenuLogo';
import Image from 'next/image';
import icon from '../../public/favicon.png';
import SearchMobile from './SearchMobile';
const HeaderMobile = () => {
  const [searchShown, setSearchShown] = useState(false);
  console.log(searchShown);
  return (
    <header className='w-full flex z-10 flex-row top-0 fixed items-center h-14 justify-between px-4'>
      <div className='flex-1'>
        <MenuLogo />
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
    </header>
  );
};

export default HeaderMobile;
