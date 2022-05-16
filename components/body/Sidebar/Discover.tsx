import React from 'react';
import Button from '../../UI/Button';
import Discussions from '../../UI/Discussions';
import List from '../../UI/List';
import Popular from '../../UI/Popular';
import Upvote from '../../UI/Upvote';
const Discover = () => {
  return (
    <>
      <span className='text-xs font-bold pb-1'>Discover</span>
      <ul className='list-none'>
        <List>
          <Button className='flex flex-row grow w-full'>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-red-300'>
              <Popular />
            </span>
            <span>Popular</span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full'>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-green-300'>
              <Upvote />
            </span>
            <span>Most Upvoted</span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full'>
            <span className='w-4 flex align-middle mt-0.5 mr-1 text-fuchsia-300'>
              <Discussions />
            </span>
            <span>Best Discussions</span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default Discover;
