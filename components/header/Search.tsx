import React, { useEffect, useState } from 'react';
import useArticles from '../hooks/useArticleHook';
import { motion } from 'framer-motion';
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
  }, [debouncedHandleSearch, search]);

  const [searchShown, setSearchShown] = useState(false);
  const searchBarHandler = () => {
    setSearchShown(true);
  };
  const searchBarBlurHandler = () => {
    setSearchShown(false);
  };
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const onSubmitChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const variants = {
    open: {
      width: '12rem',
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 30,
        restDelta: 2,
      },
    },
    closed: {
      width: '6em',
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 30,
        restDelta: 2,
      },
    },
  };
  return (
    <form className='flex items-center border-none' onSubmit={onSubmitChangeHandler}>
      <motion.input
        onBlur={searchBarBlurHandler}
        onClick={searchBarHandler}
        onChange={onInputChangeHandler}
        animate={searchShown ? 'open' : 'closed'}
        variants={variants}
        className='border border-slate-200 rounded-md p-1 pr-8 pl-2 w-24 shadow-white active:shadow hover:shadow focus:shadow focus-visible:outline-none dark:bg-[#2B2A33] dark:caret-slate-400 dark:border-slate-500'
        placeholder='Article'
      />
      <Button className='-ml-8 dark:text-[#AAB6C1]'>
        <SearchLogo />
      </Button>
    </form>
  );
};

export default Search;
