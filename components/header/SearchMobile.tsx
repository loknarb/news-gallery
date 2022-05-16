import React, { useState } from 'react';
import Button from '../UI/Button';
import CloseLogo from '../UI/CloseLogo';
import SearchLogo from '../UI/SearchLogo';
const SearchMobile: React.FC<{
  onShown: React.Dispatch<React.SetStateAction<boolean>>;
  searchShown: boolean;
}> = ({ onShown, searchShown }) => {
  const onInputOpenHandler = () => {
    onShown(true);
  };
  const onInputHideHandler = () => {
    onShown(false);
  };
  const onInputChangeHandler = () => {};
  const onSubmitChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className='flex items-center' onSubmit={onSubmitChangeHandler}>
      {searchShown ? (
        <>
          <input
            className={`border border-slate-200 rounded-md w-60 p-1 pr-8 active:shadow`}
            placeholder='Article'></input>
          <Button className='-ml-8' onClick={onInputHideHandler}>
            <CloseLogo />
          </Button>
        </>
      ) : (
        <Button className='-ml-8' onClick={onInputOpenHandler}>
          <SearchLogo />
        </Button>
      )}
    </form>
  );
};

export default SearchMobile;
