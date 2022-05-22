import React from 'react';
import useUserAuth from '../../hooks/useUserAuthHook';
import Bookmark from '../../UI/Bookmark';
import Button from '../../UI/Button';
import List from '../../UI/List';
import ReadingHistory from '../../UI/ReadingHistory';
import Settings from '../../UI/Settings';

const Manage = () => {
  const openModalAuth = useUserAuth((state) => state.openModalAuth);
  return (
    <>
      <ul className='list-none mt-0.5 mr-1'>
        <List>
          <Button
            className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'
            onClick={() => openModalAuth()}>
            <span className='w-4 flex align-middle  text-orange-300'>
              <Bookmark />
            </span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'>
            <span className='w-4 flex align-middle  text-blue-300'>
              <ReadingHistory />
            </span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'>
            <span className='w-4 flex align-middle  text-gray-300'>
              <Settings />
            </span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default Manage;
