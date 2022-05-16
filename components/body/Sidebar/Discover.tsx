import React from 'react';
import Button from '../../UI/Button';
const Discover = () => {
  return (
    <>
      <span className='text-xs font-bold'>Discover</span>
      <ul className='list-none'>
        <li>
          <Button>Popular</Button>
        </li>
        <li>
          <Button>Most Upvoted</Button>
        </li>
        <li>
          <Button>Best Discussions</Button>
        </li>
      </ul>
    </>
  );
};

export default Discover;
