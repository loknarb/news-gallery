import React from 'react';

const Button: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
