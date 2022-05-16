import React from 'react';

const List: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ children, className, ...rest }) => {
  return (
    <li {...rest} className={`${className} py-1`}>
      {children}
    </li>
  );
};

export default List;
