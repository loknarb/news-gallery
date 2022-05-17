import React from 'react';
import Bookmark from '../../UI/Bookmark';
import Button from '../../UI/Button';
import List from '../../UI/List';
import ReadingHistory from '../../UI/ReadingHistory';
import Settings from '../../UI/Settings';

const Manage = () => {
  return (
    <>
      <span className='text-xs font-bold pt-3 pb-1 text-slate-500 tracking-wider '>Manage</span>
      <ul className='list-none'>
        <List>
          <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-orange-300'>
              <Bookmark />
            </span>
            Bookmarks
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-blue-300'>
              <ReadingHistory />
            </span>
            Reading History
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-gray-300'>
              <Settings />
            </span>
            Settings
          </Button>
        </List>
      </ul>
    </>
  );
};

export default Manage;
