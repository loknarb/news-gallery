import React, { useEffect, useState } from 'react';
import useArticles from '../hooks/useArticleHook';
import useDebounce from '../hooks/useDebounce';
import Button from '../UI/Button';
import CloseLogo from '../UI/CloseLogo';
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
  return (
    <form className='flex items-center' onSubmit={onSubmitChangeHandler}>
      {searchShown ? (
        <>
          <input
            onBlur={onInputHideHandler}
            className='border border-slate-200 rounded-md w-60 p-1 pr-8 shadow-white active:shadow hover:shadow focus:shadow focus-visible:outline-none'
            placeholder='Article'
            onChange={onInputChangeHandler}
          />
          <Button className='-ml-8' onClick={onInputHideHandler}>
            <CloseLogo />
          </Button>
        </>
      ) : (
        <Button className='-ml-8 text-slate-200' onClick={onInputOpenHandler}>
          <SearchLogo />
        </Button>
      )}
    </form>
  );
};

export default SearchMobile;
