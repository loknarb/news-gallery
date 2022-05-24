import { NewsItemType } from '../../pages/types/types';
import create, { useStore } from 'zustand';
import axios from 'axios';
const useArticles = create<{
  articles: NewsItemType[];
  filteredArticles: NewsItemType[];
  scrollAmount: number;
  scrollTopButton: boolean;
  upvoteHandler: (uuid: NewsItemType['uuid'], action: 'ADD' | 'SUBTRACT') => void;
  upvoteStatus: (uuid: NewsItemType['uuid']) => void;
  comment: (uuid: NewsItemType['uuid']) => void;
  bookmarkHandler: (uuid: NewsItemType['uuid']) => void;
  bookmarkStatus: (uuid: NewsItemType['uuid']) => void;
  hideArticle: (uuid: NewsItemType['uuid']) => void;
  filterSource: (source: NewsItemType['source']) => void;
  search: (input: string) => void;
  setter: (init: NewsItemType[]) => void;
  scroll: (scrollAmount: number) => void;
  scrollIncrementer: () => void;
  scrollButtonShower: () => void;
  scrollButtonHider: () => void;
}>((set) => ({
  articles: [],
  filteredArticles: [],
  scrollAmount: 0,
  scrollTopButton: false,
  upvoteHandler: (uuid: NewsItemType['uuid'], action: 'ADD' | 'SUBTRACT') => {
    set((state) => ({
      filteredArticles: handleUpvote(state.filteredArticles, uuid, action),
    }));
  },
  upvoteStatus: () =>
    set((state) => ({
      filteredArticles: handleFilterUpvote(state.articles),
    })),
  comment: (uuid: NewsItemType['uuid']) =>
    set((state) => ({
      articles: handleComment(state.articles, uuid),
    })),
  bookmarkHandler: (uuid: NewsItemType['uuid']) =>
    set((state) => ({
      filteredArticles: handleBookmark(state.filteredArticles, uuid),
    })),
  bookmarkStatus: () =>
    set((state) => ({
      filteredArticles: handleFilterBookmark(state.articles),
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
  setter: (init: NewsItemType[]) =>
    set((state) => ({
      articles: [...init],
      filteredArticles: [...init],
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
  scrollIncrementer: () =>
    set((state) => ({
      scrollAmount: state.scrollAmount + 1,
    })),
  scrollButtonShower: () =>
    set((state) => ({
      scrollTopButton: true,
    })),
  scrollButtonHider: () =>
    set((state) => ({
      scrollTopButton: false,
    })),
}));

const handleUpvote = (
  articles: NewsItemType[],
  uuid: NewsItemType['uuid'],
  action: 'ADD' | 'SUBTRACT'
): NewsItemType[] => {
  const response = axios.post('api/popular', { uuid, action });
  console.log(response);
  return articles.map((article) => ({
    ...article,
    upvoted: article.uuid === uuid ? !article.upvoted : article.upvoted,
    upvoteAmount:
      article.uuid === uuid && !article.upvoted
        ? article.upvoteAmount! + 1
        : article.uuid === uuid && article.upvoted
        ? article.upvoteAmount! - 1
        : article.upvoteAmount!,
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
const handleFilterUpvote = (articles: NewsItemType[]) => {
  return articles.filter((article) => article.upvoted === true);
};
const handleFilterBookmark = (articles: NewsItemType[]) => {
  return articles.filter((article) => article.bookmark === true);
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

export default useArticles;
