import React from 'react';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='hover:shadow-[0px_0px_10px_4px_rgba(255,255,255,0.6)] shadow-[2px_2px_10px_4px_rgba(255,255,255,0.3)] bg-white rounded-md '>
      {children}
    </div>
  );
};

export default Card;
