import React from 'react';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='border border-transparent hover:border hover:border-slate-200 shadow-md active:shadow hover:shadow focus:shadow bg-white rounded-md p-2'>
      {children}
    </div>
  );
};

export default Card;
