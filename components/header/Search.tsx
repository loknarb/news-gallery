import React, { useEffect, useState } from 'react';
import useArticles from '../hooks/useArticleHook';
import useDebounce from '../hooks/useDebounce';
import Button from '../UI/Button';
import SearchLogo from '../UI/SearchLogo';
const Search = () => {
  const search = useArticles((state) => state.search);
  const [searchValue, setSearchValue] = useState('');
  const debouncedHandleSearch = useDebounce(searchValue, 250);
  useEffect(() => {
    search(debouncedHandleSearch);

    return () => {
      search(debouncedHandleSearch);
    };
  }, [debouncedHandleSearch]);

  const [width, setWidth] = useState(24);
  const searchBarWidthHandler = () => {
    setWidth(48);
  };
  const searchBarWidthBlurHandler = () => {
    setWidth(24);
  };
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const onSubmitChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className='flex items-center border-none' onSubmit={onSubmitChangeHandler}>
      {width === 48 ? (
        <input
          onBlur={searchBarWidthBlurHandler}
          onClick={searchBarWidthHandler}
          onChange={onInputChangeHandler}
          className='border border-slate-200 rounded-md w-48 p-1 pr-8 pl-2  shadow-white focus-visible:outline-none focus:shadow dark:bg-[#2B2A33] dark:caret-slate-400 dark:border-slate-500'
        />
      ) : (
        <input
          onBlur={searchBarWidthBlurHandler}
          onClick={searchBarWidthHandler}
          onChange={onInputChangeHandler}
          className='border border-slate-200 rounded-md w-24 p-1 pr-8 pl-2 shadow-white active:shadow hover:shadow focus:shadow focus-visible:outline-none dark:bg-[#2B2A33] dark:caret-slate-400 dark:border-slate-500'
          placeholder='Article'
        />
      )}
      <Button className='-ml-8 dark:text-[#AAB6C1]'>
        <SearchLogo />
      </Button>
    </form>
  );
};

export default Search;
