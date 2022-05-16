import Image from 'next/image';
import React from 'react';
import icon from '../../public/favicon.png';
import useWindowSize from '../hooks/useWindowSize';
import MenuLogo from './MenuLogo';
import Search from './Search';

import useDebounce from '../hooks/useDebounce';

const Header = () => {
  const { width } = useWindowSize();
  const debouncedValue = useDebounce<number | undefined>(width, 500);
  console.log(width);
  console.log(debouncedValue);
  // TODO search bar
  // TODO left side company icon
  // TODO header about 55px
  return (
    <header className='w-full flex z-10 flex-row top-0 fixed items-center h-14 '>
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

export default Header;
