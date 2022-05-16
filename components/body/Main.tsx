import React from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import NewsList from './NewsList';
import Sidebar from './Sidebar';
import SidebarSM from './SidebarSM';

const Main: React.FC = () => {
  // TODO sidebar
  // TODO removed on mobile show on Laptop
  const { width } = useWindowDimensions();
  return (
    <div>
      <h1 className='text-9xl text-red-300'>{width}</h1>
      {/* TODO create a small display to remove sidebar and instead a slideout */}
      {width! > 760 ? <Sidebar /> : <SidebarSM />}
      <NewsList />
    </div>
  );
};

export default Main;
