import React from 'react';

const List: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ children, className, ...rest }) => {
  return (
    <li {...rest} className={`${className} hover:bg-slate-400 hover:bg-opacity-30 p-1 rounded-md`}>
      {children}
    </li>
  );
};

export default List;
