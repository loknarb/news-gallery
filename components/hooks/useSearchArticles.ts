import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useSearchArticles = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  useEffect(async () => {
    setScrollAmount(scrollAmount + 1);
    if (scrollAmount > 1) {
      const res = await axios.post('/api/pages', { skip: `${scrollAmount}` });
      console.log(res.data);
    }
  }, []);
};

export default useSearchArticles;
