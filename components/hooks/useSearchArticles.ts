import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const useSearchArticles = (scrollAmount: number) => {
  useEffect(() => {
    if (scrollAmount > 1) {
      fetchArticleHandler();
    }
  }, [scrollAmount]);
  // TODO figure out how to fix async useeffect
  const fetchArticleHandler = useCallback(async () => {
    await axios
      .post('/api/pages', { skip: scrollAmount })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [scrollAmount]);
};

export default useSearchArticles;
