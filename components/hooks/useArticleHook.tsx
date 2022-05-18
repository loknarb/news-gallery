import { NewsItemType } from '../../pages/types/types';
import create from 'zustand';
const useArticles = create<{
  articles: NewsItemType[];
  upvote: (uuid: NewsItemType['uuid']) => void;
  comment: (uuid: NewsItemType['uuid']) => void;
  bookmark: (uuid: NewsItemType['uuid']) => void;
  hideArticle: (uuid: NewsItemType['uuid']) => void;
  filterSource: (source: NewsItemType['source']) => void;
  search: (input: string) => void;
}>((set) => ({
  articles: [],
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
      articles: handleHideArticle(state.articles, uuid),
    })),
  filterSource: (source: NewsItemType['source']) =>
    set((state) => ({
      articles: handleFilterSource(state.articles, source),
    })),
  search: (input: string) =>
    set((state) => ({
      articles: handleSearch(state.articles, input),
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
const handleSearch = (articles: NewsItemType[], uuid: NewsItemType['uuid']) => {
  return [...articles];
};
export default useArticles;
