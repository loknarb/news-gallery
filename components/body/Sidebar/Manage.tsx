import React from 'react';
import useArticles from '../../hooks/useArticleHook';
import useModal from '../../hooks/useModalHook';
import useSideBar from '../../hooks/useSideBarHook';
import useUserAuth from '../../hooks/useUserAuthHook';
import Bookmark from '../../UI/Bookmark';
import Button from '../../UI/Button';
import List from '../../UI/List';
import ReadingHistory from '../../UI/ReadingHistory';
import Settings from '../../UI/Settings';

const Manage = () => {
  const openModalAuth = useUserAuth((state) => state.openModalAuth);
  const openModal = useModal((state) => state.openModal);
  const bookmarkStatus = useArticles((state) => state.bookmarkStatus);
  const { sideBar } = useSideBar((state) => state);
  return (
    <>
      <span
        className={`text-xs font-bold pt-3 pb-1 text-slate-500 tracking-wider transition-opacity ${
          sideBar ? 'opacity-0' : 'opacity-100'
        }`}>
        Manage
      </span>
      <ul className='list-none'>
        <List className='transition-all duration-500 cursor-pointer'>
          <Button
            className='transition-all duration-250 flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'
            onClick={() => bookmarkStatus()}>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-orange-300'>
              <Bookmark />
            </span>
            <span
              className={`flex-1 text-left transition-opacity ${
                sideBar ? 'opacity-0' : 'opacity-100'
              }`}>
              Bookmark
            </span>
          </Button>
        </List>
        <List className='transition-all duration-500 cursor-pointer'>
          <Button
            className='transition-all duration-250 flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'
            onClick={() => openModalAuth()}>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-blue-300'>
              <ReadingHistory />
            </span>
            <span className={`transition-opacity ${sideBar ? 'opacity-0' : 'opacity-100'}`}>
              Reading History
            </span>
          </Button>
        </List>
        <List className='transition-all duration-500 cursor-pointer'>
          <Button
            className='transition-all duration-250 flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'
            onClick={() => openModal()}>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-gray-300'>
              <Settings />
            </span>
            <span className={`transition-opacity ${sideBar ? 'opacity-0' : 'opacity-100'}`}>
              Settings
            </span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default React.memo(Manage);
