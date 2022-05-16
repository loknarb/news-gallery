import React from 'react';

const SidebarMobile = () => {
  return (
    <>
      <div
        className='fixed w-full h-full bg-zinc-800 bg-opacity-50 z-20 cursor-pointer inset-0'
        onClick={}></div>
      <aside className='p-3 h-full z-30 w-60 flex-col flex fixed left-0 bg-slate-100 top-0'>
        <div className='self-end' onClick={}>
          Arrow here
        </div>
        We want to map these
      </aside>
    </>
  );
};

export default SidebarMobile;
