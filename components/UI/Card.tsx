import React from 'react';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='border border-slate-400  hover:border hover:border-slate-800 shadow-md active:shadow  focus:shadow shadow-slate-600 bg-slate-200 rounded-md p-2 dark:bg-[#1A1E1F] dark:shadow-slate-900 dark:hover:border-[rgb(102,104,126)] dark:border-[#464d50]'>
      {children}
    </div>
  );
};

export default Card;
