import React from 'react';

const Button: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> =
  // TODO & ({
  //   items: Todo[];
  //   onCheck: (id: Todo["id"]) => void;
  //   onDelete: (id: Todo["id"]) => void;
  // })
  ({ children, className, ...rest }) => {
    return (
      <button {...rest} className={`${className} text-gray-400 border-t-neutral-200`}>
        {children}
      </button>
    );
  };

export default Button;
