import React from 'react';
import useArticles from '../../hooks/useArticleHook';
import useSideBar from '../../hooks/useSideBarHook';
import Button from '../../UI/Button';
import Discussions from '../../UI/Discussions';
import List from '../../UI/List';
import Popular from '../../UI/Popular';
import Upvote from '../../UI/Upvote';
const Discover: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const { popularStatus, upvoteStatus, loadingHandler } = useArticles((state) => state);
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  const { sideBar } = useSideBar((state) => state);
  return (
    <>
      <span
        className={`text-xs font-bold pb-1 text-slate-500 tracking-wide ${
          sideBar ? 'opacity-0' : 'opacity-100'
        }`}>
        Discover
      </span>
      <ul className={`list-none ${mobile && sideBar ? 'pl-0 pr-0' : 'p-1'}`}>
        <List
          className={`transition-all  cursor-pointer ${mobile && sideBar ? 'pl-0 pr-0' : 'p-1'}`}>
          <Button
            className={`${
              sideBar ? 'h-6' : ''
            } transition-all duration-250 flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold`}
            onClick={() => {
              loadingHandler(), popularStatus(), scrollToTopHandler();
            }}>
            <span
              className={`${
                mobile && sideBar ? 'w-0' : 'w-4'
              } flex align-middle mt-0.5 mr-1 duration-700 transition-all text-red-300 `}>
              <Popular />
            </span>
            <span className={`flex-1 text-left ${sideBar ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Popular
            </span>
          </Button>
        </List>
        <List
          className={`transition-all  cursor-pointer ${mobile && sideBar ? 'pl-0 pr-0' : 'p-1'}`}>
          <Button
            className={`${
              sideBar ? 'h-6' : ''
            } transition-all duration-250 flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold`}
            onClick={() => {
              loadingHandler(), upvoteStatus(), scrollToTopHandler();
            }}>
            <span
              className={`${
                mobile && sideBar ? 'w-0' : 'w-4'
              } flex align-middle mt-0.5 mr-1 duration-700 transition-all text-green-300`}>
              <Upvote />
            </span>
            <span className={`flex-1 text-left ${sideBar ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Most Upvoted
            </span>
          </Button>
        </List>
        <List
          className={`transition-all  cursor-pointer ${mobile && sideBar ? 'pl-0 pr-0' : 'p-1'}`}>
          <Button
            className={`${
              sideBar ? 'h-6' : ''
            } transition-all duration-250 flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold`}>
            <span
              className={`${
                mobile && sideBar ? 'w-0' : 'w-4'
              } flex align-middle mt-0.5 mr-1 duration-700 transition-all text-fuchsia-300`}>
              <Discussions />
            </span>
            <span className={`flex-1 text-left ${sideBar ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Best Discussions
            </span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default React.memo(Discover);
