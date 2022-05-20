import React, { useEffect, useState } from 'react';
import MenuLogo from '../UI/MenuLogo';
import Image from 'next/image';
import icon from '../../public/favicon.png';
import SearchMobile from './SearchMobile';
import useSideBar from '../hooks/useSideBarHook';
import Button from '../UI/Button';
import useSearchArticles from '../hooks/useSearchArticles';
import useArticles from '../hooks/useArticleHook';
const HeaderMobile = () => {
  const { showSideBar } = useSideBar((state) => state);
  const scroll = useArticles((state) => state.scroll);
  const [count, setCount] = useState(1);
  const [searchShown, setSearchShown] = useState(false);
  const counter = () => {
    setCount(count + 1);
    scroll(count);
  };
  return (
    <>
      <div className='flex-1'>
        <Button className='text-slate-200' onClick={() => showSideBar()}>
          <MenuLogo />
        </Button>
      </div>
      {!searchShown ? (
        <div className='flex justify-center flex-1'>
          <button onClick={counter}>
            <Image width={'28px'} height={'28px'} src={icon} />
          </button>
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
