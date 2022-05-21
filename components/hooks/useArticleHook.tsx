import { NewsItemType } from '../../pages/types/types';
import create from 'zustand';
import { useCallback, useEffect } from 'react';
import axios from 'axios';
const useArticles = create<{
  articles: NewsItemType[];
  filteredArticles: NewsItemType[];
  scrollAmount: number;
  upvote: (uuid: NewsItemType['uuid']) => void;
  comment: (uuid: NewsItemType['uuid']) => void;
  bookmark: (uuid: NewsItemType['uuid']) => void;
  hideArticle: (uuid: NewsItemType['uuid']) => void;
  filterSource: (source: NewsItemType['source']) => void;
  search: (input: string) => void;
  setter: (init: NewsItemType[]) => void;
  scroll: (scrollAmount: number) => void;
}>((set) => ({
  articles: [],
  filteredArticles: [],
  scrollAmount: 1,
  upvote: (uuid: NewsItemType['uuid']) =>
    set((state) => ({
      articles: handleUpvote(state.articles, uuid),
    })),
  comment: (uuid: NewsItemType['uuid']) =>
    set((state) => ({
      articles: handleComment(state.articles, uuid),
    })),
  bookmark: (uuid: NewsItemType['uuid']) =>
    set((state) => ({
      articles: handleBookmark(state.articles, uuid),
    })),
  hideArticle: (uuid: NewsItemType['uuid']) =>
    set((state) => ({
      filteredArticles: handleHideArticle(state.filteredArticles, uuid),
    })),
  filterSource: (source: NewsItemType['source']) =>
    set((state) => ({
      filteredArticles: handleFilterSource(state.filteredArticles, source),
    })),
  search: (input: string) =>
    set((state) => ({
      filteredArticles: handleSearch(state.articles, input),
    })),
  scroll: async (scrollAmount: number) => {
    const response = await axios.post('/api/pages', { skip: scrollAmount });
    set((state) => ({
      articles: [...new Set([...state.articles, ...(response.data.articles as NewsItemType[])])],
      filteredArticles: [
        ...new Set([...state.articles, ...(response.data.articles as NewsItemType[])]),
      ],
    }));
  },
  setter: (init: NewsItemType[]) =>
    set((state) => ({
      articles: [...init],
      filteredArticles: [...init],
    })),
}));

const handleUpvote = (articles: NewsItemType[], uuid: NewsItemType['uuid']): NewsItemType[] => {
  return articles.map((article) => ({
    ...article,
    upvoted: article.uuid === uuid ? !article.upvote : article.upvote,
  }));
};
const handleComment = (articles: NewsItemType[], uuid: NewsItemType['uuid']) => {
  return [...articles];
};
const handleBookmark = (articles: NewsItemType[], uuid: NewsItemType['uuid']) => {
  return articles.map((article) => ({
    ...article,
    bookmark: article.uuid === uuid ? !article.bookmark : article.bookmark,
  }));
};
const handleHideArticle = (articles: NewsItemType[], uuid: NewsItemType['uuid']) => {
  return articles.filter((article) => article.uuid !== uuid);
};
const handleFilterSource = (articles: NewsItemType[], source: NewsItemType['source']) => {
  return articles.filter((article) => article.source !== source);
};
const handleSearch = (articles: NewsItemType[], input: string) => {
  if (input === '') {
    return [...articles];
  }
  return articles.filter((article) =>
    Object.values(article).join(' ').toLowerCase().includes(input.toLowerCase())
  );
};
// const scrollFetch = (articles: NewsItemType[], scrollAmount: number) => {
//   useEffect(() => {
//     if (scrollAmount > 1) {
//       fetchArticleHandler();
//     }
//   }, [scrollAmount]);
//   let x: NewsItemType[] = [...articles];
//   const fetchArticleHandler = useCallback(async () => {
//     await axios.post('/api/pages', { skip: scrollAmount }).then((response) => {
//       return (x = [...articles, ...(response.data.articles as NewsItemType[])]);
//     });
//   }, [scrollAmount]);
//   console.log(x);
//   return x;
// };
export default useArticles;