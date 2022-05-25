import { BookmarkPostRequest, NewsItemType, UpvotePostRequest } from '../../pages/types/types';
import create from 'zustand';
import axios from 'axios';
const useArticles = create<{
  articles: NewsItemType[];
  filteredArticles: NewsItemType[];
  scrollAmount: number;
  scrollTopButton: boolean;
  scrollFunctionEnabled: boolean;
  loading: boolean;
  popularStatus: () => void;
  upvoteHandler: (uuid: NewsItemType['uuid'], action: UpvotePostRequest['action']) => void;
  upvoteStatus: () => void;
  comment: (uuid: NewsItemType['uuid']) => void;
  bookmarkHandler: (uuid: NewsItemType['uuid'], action: BookmarkPostRequest['action']) => void;
  bookmarkStatus: () => void;
  hideArticle: (uuid: NewsItemType['uuid']) => void;
  filterSource: (source: NewsItemType['source']) => void;
  search: (input: string) => void;
  setter: (init: NewsItemType[]) => void;
  scroll: (scrollAmount: number) => void;
  scrollIncrementer: () => void;
  scrollButtonShower: () => void;
  scrollButtonHider: () => void;
  loadingHandler: () => void;
}>((set) => ({
  articles: [],
  filteredArticles: [],
  scrollAmount: 0,
  scrollTopButton: false,
  scrollFunctionEnabled: true,
  loading: false,
  popularStatus: async () => {
    const response = await axios.post('api/popular');
    set((state) => ({
      filteredArticles: response.data.data,
      articles: response.data.data,
      scrollFunctionEnabled: true,
      loading: false,
    }));
  },
  upvoteHandler: (uuid: NewsItemType['uuid'], action: UpvotePostRequest['action']) => {
    set((state) => ({
      filteredArticles: handleUpvote(state.filteredArticles, uuid, action),
    }));
  },
  upvoteStatus: async () => {
    const handleFilterUpvotes = await handleFilterUpvote();

    set((state) => ({
      filteredArticles: handleFilterUpvotes,
      articles: handleFilterUpvotes,
      scrollFunctionEnabled: false,
      loading: false,
    }));
  },
  comment: (uuid: NewsItemType['uuid']) =>
    set((state) => ({
      articles: handleComment(state.articles, uuid),
    })),
  bookmarkHandler: (uuid: NewsItemType['uuid'], action: BookmarkPostRequest['action']) =>
    set((state) => ({
      filteredArticles: handleBookmark(state.filteredArticles, uuid, action),
    })),
  bookmarkStatus: async () => {
    const handleFilterBookmarks = await handleFilterBookmark();
    set((state) => ({
      filteredArticles: handleFilterBookmarks,
      scrollFunctionEnabled: false,
      loading: false,
    }));
  },
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
      scrollFunctionEnabled: false,
    })),
  setter: (init: NewsItemType[]) =>
    set((state) => ({
      articles: [...init],
      filteredArticles: [...init],
    })),
  scroll: async (scrollAmount: number) => {
    console.log('ran');
    const response = await axios.post('/api/pages', { skip: scrollAmount });
    set((state) => ({
      articles: [...new Set([...state.articles, ...(response.data.articles as NewsItemType[])])],
      filteredArticles: [
        ...new Set([...state.articles, ...(response.data.articles as NewsItemType[])]),
      ],
      loading: false,
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
  loadingHandler: () => {
    set((state) => ({
      loading: true,
    }));
  },
}));

const handleUpvote = (
  articles: NewsItemType[],
  uuid: NewsItemType['uuid'],
  action: 'ADD' | 'SUBTRACT'
): NewsItemType[] => {
  const response = axios.post('api/upvote', { uuid, action });
  return articles.map((article) => ({
    ...article,
    upvoted: article.uuid === uuid ? !article.upvoted : article.upvoted,
    upvoteAmount:
      article.uuid === uuid && !article.upvoted
        ? article.upvoteAmount! + 1
        : article.uuid === uuid && article.upvoted
        ? article.upvoteAmount! - 1
        : article.upvoteAmount!,
    loading: false,
  }));
};
const handleComment = (articles: NewsItemType[], uuid: NewsItemType['uuid']) => {
  return [...articles];
};
const handleBookmark = (
  articles: NewsItemType[],
  uuid: NewsItemType['uuid'],
  action: BookmarkPostRequest['action']
) => {
  const response = axios.post('api/bookmark', { uuid, action });
  return articles.map((article) => ({
    ...article,
    bookmark: article.uuid === uuid ? !article.bookmark : article.bookmark,
  }));
};
const handleFilterUpvote = async () => {
  const response = await axios.post('api/upvote-filter');
  return response.data.data;
};
const handleFilterBookmark = async () => {
  const response = await axios.post('/api/bookmark-filter');
  return response.data.data;
};
const handleHideArticle = (articles: NewsItemType[], uuid: NewsItemType['uuid']) => {
  return articles.filter((article) => article.uuid !== uuid);
};
const handleFilterSource = (articles: NewsItemType[], source: NewsItemType['source']) => {
  return articles.filter((article) => article.source !== source);
};
const handleSearch = (articles: NewsItemType[], input: string) => {
  console.log('input', input);
  return articles.filter((article) =>
    Object.values(article).join(' ').toLowerCase().includes(input.toLowerCase())
  );
};

export default useArticles;
