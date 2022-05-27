import Image from 'next/image';
import React from 'react';
import Search from './Search';
import icon from '../../public/favicon.png';

const HeaderDesktop = () => {
  return (
    <>
      <div className='flex'>
        <Image
          className='px-4'
          width={'28px'}
          height={'28px'}
          src={icon}
          alt={'picture of a newspaper icon'}
        />
        <h1 className='text-2xl px-4 font-bold text-slate-200 tracking-tight dark:text-slate-400'>
          TECH NEWS{' '}
        </h1>
      </div>
      <div>
        <Search />
      </div>
    </>
  );
};

export default HeaderDesktop;
