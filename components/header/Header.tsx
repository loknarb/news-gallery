import Image from 'next/image';
import React from 'react';
import icon from '../../public/favicon.png';
import useWindowSize from '../hooks/useWindowSize';
import MenuLogo from './MenuLogo';
import Search from './Search';

import useDebounce from '../hooks/useDebounce';
import HeaderTablet from './HeaderTablet';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  const { width } = useWindowSize();
  const debouncedValue = useDebounce<number | undefined>(width, 500);
  // TODO left side company icon
  // TODO header about 55px
  return (
    <header className='w-full flex z-10 flex-row top-0 fixed items-center h-14 px-4 justify-between'>
      {width! >= 992 ? <HeaderDesktop /> : ''}
      {width! > 768 && width! < 992 ? <HeaderTablet /> : ''}
      {width! <= 768 ? <HeaderMobile /> : ''}
    </header>
  );
};

export default Header;
