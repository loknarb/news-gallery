/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import HeaderTablet from './HeaderTablet';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  const { width } = useWindowSize();
  return (
    <header className='w-full flex z-40 flex-row top-0 fixed items-center h-14 px-4 justify-between bg-slate-700 dark:bg-[#1F2937] dark:border-[#1A1E1F] shadow-lg'>
      {width! >= 992 ? <HeaderDesktop /> : ''}
      {width! > 768 && width! < 992 ? <HeaderTablet /> : ''}
      {width! <= 768 ? <HeaderMobile /> : ''}
    </header>
  );
};

export default Header;
