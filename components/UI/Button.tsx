import React from 'react';

const Button: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = // TODO & ({
  //   items: Todo[];
  //   onCheck: (id: Todo["id"]) => void;
  //   onDelete: (id: Todo["id"]) => void;
  // })
  () => {
    return <button className='bg-slate-400 border-t-neutral-200'>Button</button>;
  };

export default Button;
