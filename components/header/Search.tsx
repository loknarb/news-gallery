import React, { useState } from 'react';
import Button from '../UI/Button';
import SearchLogo from '../UI/SearchLogo';
const Search = () => {
  const [width, setWidth] = useState(24);
  const searchBarWidthHandler = () => {
    setWidth(48);
  };
  const searchBarWidthBlurHandler = () => {
    setWidth(24);
  };
  const onInputChangeHandler = () => {};
  const onSubmitChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  console.log(`w-${width}`);
  return (
    <form className='flex items-center border-none' onSubmit={onSubmitChangeHandler}>
      {width === 48 ? (
        <input
          onBlur={searchBarWidthBlurHandler}
          onClick={searchBarWidthHandler}
          className='border border-slate-200 rounded-md w-48 p-1 pr-8 focus-visible:outline-none'
        />
      ) : (
        <input
          onBlur={searchBarWidthBlurHandler}
          onClick={searchBarWidthHandler}
          className='border border-slate-200 rounded-md w-24 p-1 pr-8 focus-visible:outline-none'
          placeholder='Article'
        />
      )}
      <Button className='-ml-8'>
        <SearchLogo />
      </Button>
    </form>
  );
};

export default Search;
