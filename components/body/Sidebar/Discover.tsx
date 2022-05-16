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
            <Popular />
            <span></span>
            Popular
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full'>
            <Upvote />
            <span>Most Upvoted</span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full'>
            <Discussions />
            <span>Best Discussions</span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default Discover;
