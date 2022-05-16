import React from 'react';
import Bookmark from '../../UI/Bookmark';
import Button from '../../UI/Button';
import List from '../../UI/List';
import ReadingHistory from '../../UI/ReadingHistory';
import Settings from '../../UI/Settings';

const Manage = () => {
  return (
    <>
      <span className='text-xs font-bold pt-3 pb-1'>Manage</span>
      <ul className='list-none'>
        <List>
          <Button className='flex flex-row grow w-full'>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-orange-300'>
              <Bookmark />
            </span>
            <span>Bookmarks</span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full'>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-blue-300'>
              <ReadingHistory />
            </span>
            <span>Reading History</span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full'>
            <span className='w-4 flex align-middle mt-0.5 mr-1'>
              <Settings />
            </span>
            <span>Settings</span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default Manage;
