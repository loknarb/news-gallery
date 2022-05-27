/* eslint-disable @next/next/no-page-custom-font */
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import axios from 'axios';
import { useEffect } from 'react';
import Main from '../components/body/Main';
import Header from '../components/header/Header';
import { NewsItemProps, NewsItemType } from './types/types';
import useArticles from '../components/hooks/useArticleHook';
import Button from '../components/UI/Button';
import UpScroll from '../components/UI/UpScroll';
import LoginModal from '../components/modal/LoginModal';
import SettingsModal from '../components/modal/SettingsModal';

const Home: NextPage<NewsItemProps> = ({ newsItems }) => {
  const setter = useArticles((state) => state.setter);
  const scrollTopButton = useArticles((state) => state.scrollTopButton);
  useEffect(() => {
    setter(newsItems);
    return () => {
      setter(newsItems);
    };
  }, [newsItems, setter]);
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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Orbitron:wght@700&family=Signika:wght@700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          rel='stylesheet'
        />
        <link href='https://fonts.googleapis.com/css2?family=Dosis&display=swap' rel='stylesheet' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      {scrollTopButton ? (
        <Button
          className='rounded-full border border-black bg-slate-700 text-white fixed z-20 bottom-[2em] right-[2em] shadow-lg shadow-black hover:shadow-sm transition-all duration-300'
          onClick={scrollToTopHandler}>
          <UpScroll />
        </Button>
      ) : (
        ''
      )}
      <Main />
      <LoginModal />
      <SettingsModal />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mongo = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
  const mongoDB = mongo.db();
  const newsArticleCollection = mongoDB.collection('newsArticles');

  if (process.env.NODE_ENV !== 'development') {
    const acceptedNewsSources = [
      'medium.com',
      'joshwcomeau.com',
      'freecodecamp.org',
      'code.tutsplus.com',
      'producthunter.com',
      'slack.engineering',
      'blog.jetbrains.com',
      'blog.logrocket.com',
    ];
    const today = new Date();
    const pastweek = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const collectionAPI = acceptedNewsSources.map(
      (domain) =>
        `https://api.thenewsapi.com/v1/news/all?api_token=${
          process.env.NEWS_API
        }&language=en&domains=${domain}&categories=business,tech&published_at=${pastweek.toLocaleDateString(
          'en-CA'
        )}&limit=5`
    );
    Promise.all(collectionAPI.map(async (endpoint) => await axios.get(endpoint))).then(
      (results) => {
        results.forEach((result) => {
          if (result.data.data) {
            result.data.data.forEach(async (article: NewsItemType) => {
              await newsArticleCollection.updateMany(
                { uuid: article.uuid },
                {
                  $set: {
                    uuid: article.uuid,
                    title: article.title,
                    description: article.description,
                    snippet: article.snippet,
                    url: article.url,
                    image_url: article.image_url,
                    source: article.source,
                    categories: article.categories,
                    published_at: article.published_at,
                    bookmark: false,
                    upvoted: false,
                    upvoteAmount: Math.floor(Math.random() * 90),
                    commentAmount: Math.floor(Math.random() * 30),
                  },
                },
                { upsert: true }
              );
            });
          }
        });
      }
    );
    // for (let i = 0; i < acceptedNewsSources.length; i++) {
    //   for (let j = 0; j < categories.length; j++) {
    //     collectionSearch.push(
    //       `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=${categories[j]}&domains=${acceptedNewsSources[i]}&categories=business,tech&limit=5`
    //     );
    //   }
    // }
    // for (let i = 0; i < 543; i++) {}
    // newsArticleCollection.find({}).forEach((document) => {
    //   if (document.commentAmount + document.upvoteAmount < 40) {
    //     const x = newsArticleCollection.updateOne(
    //       { uuid: document.uuid },
    //       {
    //         $set: {
    //           bookmark: true,
    //         },
    //       },
    //       { upsert: true }
    //     );
    //   }
    // });
  }

  await newsArticleCollection.deleteMany({ image_url: '' });
  const response = await newsArticleCollection
    .find({}, { projection: { _id: 0 } })
    .sort({ published_at: -1 })
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
