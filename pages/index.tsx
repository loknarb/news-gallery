import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/body/Main';
import Header from '../components/header/Header';
import { Document, MongoClient, UpdateResult } from 'mongodb';
import { NewsItemProps } from './types/types';
import axios from 'axios';
import useArticles from '../components/hooks/useArticleHook';
const Home: NextPage<NewsItemProps> = ({ newsItems }) => {
  useArticles((state) => (state.articles = newsItems));
  // console.log(newsItems);
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
      <Main />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mongo = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
  const mongoDB = mongo.db();
  const newsArticleCollection = mongoDB.collection('newsArticles');
  // const collectionAPI = [
  //   `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=javascript&categories=business,tech&limit=5`,
  //   `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=typescript&categories=business,tech&limit=5`,
  //   `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=python&categories=business,tech&limit=5`,
  //   `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=react+(typescript)&categories=business,tech&limit=5`,
  //   `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=react+(javascript)&categories=business,tech&published_on=2022-05-17&limit=5`,
  // ];
  // Promise.all(collectionAPI.map((endpoint) => axios.get(endpoint))).then(
  //   async ([
  //     { data: js },
  //     { data: ts },
  //     { data: python },
  //     { data: reactts },
  //     { data: reactjs },
  //   ]) => {
  //     const actualCollection = [
  //       ...js.data,
  //       ...ts.data,
  //       ...python.data,
  //       ...reactts.data,
  //       ...reactjs.data,
  //     ];
  //     const mongo = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
  //     const mongoDB = mongo.db();
  //     const newsArticleCollection = mongoDB.collection('newsArticles');
  //     let resultMany: UpdateResult | Document;
  //     actualCollection.forEach(async (article, i) => {
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
  //           },
  //         },
  //         { upsert: true }
  //       );
  //     });
  //   }
  // );
  // console.log(x);
  const response = await newsArticleCollection.find({}, { projection: { _id: 0 } }).toArray();
  const articleData = JSON.stringify(response);
  const newsItems = JSON.parse(articleData);
  mongo.close();

  return {
    props: {
      newsItems,
    },
    //  TODO fire 7 or so for 20-35 articles every 4 hours - 140 when fully populated
    revalidate: 1,
  };
};

export default Home;
