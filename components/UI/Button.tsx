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
      <button {...rest} className={`${className} focus:outline-0 text-gray-400`}>
        {children}
      </button>
    );
  };

export default Button;
