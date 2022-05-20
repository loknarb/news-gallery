import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const useSearchArticles = (scrollAmount: number) => {
  console.log(scrollAmount);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  useEffect(() => {
    if (scrollAmount > 1) {
      fetchArticleHandler();
    }
  }, [scrollAmount]);
  // TODO figure out how to fix async useeffect
  const fetchArticleHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    await axios
      .post('/api/pages', { skip: scrollAmount })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
};

export default useSearchArticles;
