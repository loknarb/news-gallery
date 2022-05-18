import React from 'react';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='border border-slate-400  hover:border hover:border-slate-800 shadow-md active:shadow  focus:shadow shadow-slate-600 bg-slate-300 rounded-md p-2'>
      {children}
    </div>
  );
};

export default Card;
