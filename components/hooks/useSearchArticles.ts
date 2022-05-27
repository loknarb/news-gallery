import axios from 'axios';
import { useCallback, useEffect } from 'react';

const useSearchArticles = (scrollAmount: number) => {
  // TODO figure out how to fix async useeffect
  const fetchArticleHandler = useCallback(async () => {
    await axios
      .post('/api/pages', { skip: scrollAmount })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [scrollAmount]);
  useEffect(() => {
    if (scrollAmount > 1) {
      fetchArticleHandler();
    }
  }, [fetchArticleHandler, scrollAmount]);
};

export default useSearchArticles;
