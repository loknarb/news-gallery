import React from 'react';
import useArticles from '../../hooks/useArticleHook';
import Button from '../../UI/Button';
import Discussions from '../../UI/Discussions';
import List from '../../UI/List';
import Popular from '../../UI/Popular';
import Upvote from '../../UI/Upvote';
const DiscoverLogos = () => {
  const { popularStatus, upvoteStatus } = useArticles((state) => state);
  return (
    <>
      <ul className='list-none mt-0.5 mr-1'>
        <List>
          <Button
            className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'
            onClick={() => popularStatus()}>
            <span className='w-4 flex align-middle text-red-300'>
              <Popular />
            </span>
          </Button>
        </List>
        <List>
          <Button
            className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'
            onClick={() => upvoteStatus()}>
            <span className='w-4 flex align-middle text-green-300'>
              <Upvote />
            </span>
          </Button>
        </List>
        <List>
          <Button className='flex flex-row grow w-full hover:text-slate-400 text-slate-100 font-semibold'>
            <span className='w-4 flex align-middle text-fuchsia-300'>
              <Discussions />
            </span>
          </Button>
        </List>
      </ul>
    </>
  );
};

export default DiscoverLogos;
