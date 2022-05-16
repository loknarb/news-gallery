import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import NewsList from './NewsList';
import Sidebar from './Sidebar';
import SidebarSM from './SidebarSM';

const Main: React.FC = () => {
  // TODO sidebar
  // TODO removed on mobile show on Laptop
  const { width } = useWindowSize();
  return (
    <div className='flex flex-row md:pl-52 pt-14 h-full'>
      {/* <h1 className='text-9xl text-red-300'>{width}</h1> */}
      {/* TODO create a small display to remove sidebar and instead a slideout */}
      {width! > 760 ? <Sidebar /> : ''}
      <NewsList />
    </div>
  );
};

export default Main;
