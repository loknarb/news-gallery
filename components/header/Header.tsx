import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

import useDebounce from '../hooks/useDebounce';
import HeaderTablet from './HeaderTablet';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  const { width } = useWindowSize();
  const debouncedValue = useDebounce<number | undefined>(width, 500);
  return (
    <header className='w-full flex z-20 flex-row top-0 fixed items-center h-14 px-4 justify-between border-b-slate-400 border-b bg-slate-700'>
      {width! >= 992 ? <HeaderDesktop /> : ''}
      {width! > 768 && width! < 992 ? <HeaderTablet /> : ''}
      {width! <= 768 ? <HeaderMobile /> : ''}
    </header>
  );
};

export default Header;
