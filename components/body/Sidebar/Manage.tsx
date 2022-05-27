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

const Manage: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const openModalAuth = useUserAuth((state) => state.openModalAuth);
  const { bookmarkStatus, loadingHandler } = useArticles((state) => state);
  const openModal = useModal((state) => state.openModal);
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  const { sideBar } = useSideBar((state) => state);
  return (
    <>
      <span
        className={`text-xs font-bold pt-3 pb-1 text-slate-500 tracking-wider ${
          sideBar ? 'opacity-0' : 'opacity-100'
        }`}>
        Manage
      </span>
      <ul className={`list-none ${mobile && sideBar ? 'pl-0 pr-0' : 'p-1'}`}>
        <List
          className={`transition-all duration-500 cursor-pointer ${
            mobile && sideBar ? 'pl-0 pr-0' : 'p-1'
          }`}>
          <Button
            className={`${
              sideBar ? 'h-6' : ''
            } transition-all duration-500 flex flex-grow w-full hover:text-slate-400 text-slate-100 font-semibold`}
            onClick={() => {
              loadingHandler(), bookmarkStatus(), scrollToTopHandler();
            }}>
            <span
              className={`${
                mobile && sideBar ? 'w-0' : 'w-4'
              } flex align-middle mt-0.5 mr-1 duration-700 transition-all text-orange-300`}>
              <Bookmark />
            </span>
            <span className={`flex-1 text-left  ${sideBar ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Bookmark
            </span>
          </Button>
        </List>
        <List
          className={`transition-all duration-500 cursor-pointer ${
            mobile && sideBar ? 'pl-0 pr-0' : 'p-1'
          }`}>
          <Button
            className={`${
              sideBar ? 'h-6' : ''
            } transition-all duration-500 flex flex-grow w-full hover:text-slate-400 text-slate-100 font-semibold`}
            onClick={() => openModalAuth()}>
            <span
              className={`${
                mobile && sideBar ? 'w-0' : 'w-4'
              } flex align-middle mt-0.5 mr-1 duration-700 transition-all text-blue-300`}>
              <ReadingHistory />
            </span>
            <span className={`flex-1 text-left  ${sideBar ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Reading History
            </span>
          </Button>
        </List>
        <List
          className={`transition-all duration-500 cursor-pointer ${
            mobile && sideBar ? 'pl-0 pr-0' : 'p-1'
          }`}>
          <Button
            className={`${
              sideBar ? 'h-6' : ''
            } transition-all duration-500 flex flex-grow w-full hover:text-slate-400 text-slate-100 font-semibold`}
            onClick={() => openModal()}>
            <span
              className={`${
                mobile && sideBar ? 'w-0' : 'w-4'
              } flex align-middle mt-0.5 mr-1 duration-700 transition-all text-gray-300`}>
              <Settings />
            </span>
            <span className={`flex-1 text-left  ${sideBar ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Settings
            </span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default React.memo(Manage);
