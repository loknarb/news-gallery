import React, { useState } from 'react';
import NewsList from './NewsList';

const MainMobile = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className='flex flex-row md:pl-52 pt-14 h-50'>
      <NewsList />
    </div>
  );
};

export default MainMobile;
