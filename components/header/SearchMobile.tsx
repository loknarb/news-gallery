import React, { useEffect, useState } from 'react';
import useArticles from '../hooks/useArticleHook';
import useDebounce from '../hooks/useDebounce';
import Button from '../UI/Button';
import CloseLogo from '../UI/CloseLogo';
import { motion } from 'framer-motion';
import SearchLogo from '../UI/SearchLogo';
const SearchMobile: React.FC<{
  onShown: React.Dispatch<React.SetStateAction<boolean>>;
  searchShown: boolean;
}> = ({ onShown, searchShown }) => {
  const search = useArticles((state) => state.search);
  const [searchValue, setSearchValue] = useState('');
  const debouncedHandleSearch = useDebounce(searchValue, 250);
  useEffect(() => {
    search(debouncedHandleSearch);
    return () => {
      search(debouncedHandleSearch);
    };
  }, [debouncedHandleSearch]);

  const onInputOpenHandler = () => {
    onShown(true);
  };
  const onInputHideHandler = () => {
    onShown(false);
  };
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const onSubmitChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const variants = {
    open: {
      width: '15rem',
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 30,
      },
    },
    closed: {
      x: 100,
      opacity: 0,
      display: 'none',
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
  };
  return (
    <form className='flex items-center' onSubmit={onSubmitChangeHandler}>
      <motion.div animate={searchShown ? 'open' : 'closed'} variants={variants}>
        <input
          onBlur={onInputHideHandler}
          className='border border-slate-200 rounded-md p-1 pr-8  focus:bg-slate-200 shadow-white active:shadow hover:shadow focus:shadow focus-visible:outline-none cursor-pointer focus:cursor-auto'
          placeholder='Article'
          onChange={onInputChangeHandler}
          onClick={onInputOpenHandler}
          type='search'
        />
      </motion.div>
      <Button
        className={`-ml-8 ${searchShown ? '' : 'text-slate-200'} `}
        onClick={searchShown ? onInputHideHandler : onInputOpenHandler}>
        {searchShown ? <CloseLogo /> : <SearchLogo />}
      </Button>
    </form>
  );
};

export default SearchMobile;
