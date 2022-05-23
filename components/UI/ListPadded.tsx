import React from 'react';

const ListPadded: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ children, className, ...rest }) => {
  return (
    <li {...rest} className={`${className} p-1 rounded-md`}>
      {children}
    </li>
  );
};

export default ListPadded;
