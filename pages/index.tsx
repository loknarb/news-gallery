import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/body/Main';
import Header from '../components/header/Header';
import { Document, MongoClient, UpdateResult } from 'mongodb';
import { NewsItemProps, NewsItemType } from './types/types';
import axios from 'axios';
import useArticles from '../components/hooks/useArticleHook';
import { useEffect } from 'react';
import Button from '../components/UI/Button';
import UpScroll from '../components/UI/UpScroll';
const Home: NextPage<NewsItemProps> = ({ newsItems }) => {
  const setter = useArticles((state) => state.setter);
  const scrollAmount = useArticles((state) => state.scrollAmount);
  const scrollTopButton = useArticles((state) => state.scrollTopButton);
  console.log(scrollTopButton);
  useEffect(() => {
    setter(newsItems);
    return () => {
      setter(newsItems);
    };
  }, []);
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Head>
        <title>Current Tech News</title>
        <meta
          name='description'
          content='Latest News curated by NewsApi created and maintained by Sebastien Brumbaugh'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      {scrollTopButton ? (
        <Button
          className='rounded-full bg-black fixed z-20 bottom-[2em] right-[2em]'
          onClick={scrollToTopHandler}>
          <UpScroll />
        </Button>
      ) : (
        ''
      )}
      <Main />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mongo = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
  const mongoDB = mongo.db();
  const newsArticleCollection = mongoDB.collection('newsArticles');
  const categories = [
    'accessibility',
    'alpinejs',
    'angular',
    'appwrite',
    'blazor',
    'bootstrap-css',
    'chromium',
    'css',
    'elm',
    'emberjs',
    'firebase',
    'firefox',
    'gatsby',
    'google-chrome',
    'graphql',
    'grpc',
    'html',
    'jamstack',
    'javascript',
    'jquery',
    'microsoft-edge',
    'nextjs',
    'nodejs',
    'preact',
    'prisma',
    'react',
    'react-native',
    'react-query',
    'safari',
    'supabase',
    'svelte',
    'tailwind-css',
    'typescript',
    'vite',
    'vuejs',
    'web-design',
    'webassembly',
    'webdev',
    'webpack',
    'webrtc',
  ];
  // const categories = [];
  const today = new Date();
  const pastweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14);
  // const pastweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 14);
  // const collectionAPI = categories.map((search) => {
  //   return `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=${search}&domains=producthunter.com, slack.engineering, blog.jetbrains.com&categories=business,tech&limit=5`;
  // });
  // Promise.all(collectionAPI.map(async (endpoint) => await axios.get(endpoint))).then((results) => {
  //   results.forEach((result) => {
  //     result.data.data.forEach(async (article: NewsItemType) => {
  //       let resultMany: UpdateResult | Document;
  //       resultMany = await newsArticleCollection.updateMany(
  //         { uuid: article.uuid },
  //         {
  //           $set: {
  //             uuid: article.uuid,
  //             title: article.title,
  //             description: article.description,
  //             snippet: article.snippet,
  //             url: article.url,
  //             image_url: article.image_url,
  //             source: article.source,
  //             categories: article.categories,
  //             published_at: article.published_at,
  //             bookmark: false,
  //             upvoted: false,
  //             upvoteAmount: 0,
  //             commentAmount: 0,
  //           },
  //         },
  //         { upsert: true }
  //       );
  //       console.log(resultMany);
  //     });
  //   });
  // });

  await newsArticleCollection.deleteMany({ image_url: '' });
  const response = await newsArticleCollection
    // .find({ published_at: { $gte: pastweek.toISOString() } }, { projection: { _id: 0 } })
    .find({}, { projection: { _id: 0 } })
    // .sort({ $natural: -1 })
    .limit(50)
    .toArray();

  const articleData = JSON.stringify(response);
  const newsItems = JSON.parse(articleData);
  // mongo.close();

  return {
    props: {
      newsItems,
    },
    //  TODO fire 7 or so for 20-35 articles every 4 hours - 140 when fully populated
    revalidate: 1,
  };
};

export default Home;
