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
            <Bookmark />
            <span>Bookmarks</span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full'>
            <ReadingHistory />
            <span>Reading History</span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full'>
            <Settings />
            <span>Settings</span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default Manage;
