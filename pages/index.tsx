import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/body/Main';
import Header from '../components/header/Header';
import { Document, MongoClient, UpdateResult } from 'mongodb';
import { NewsItemProps } from './types/types';
import axios from 'axios';
const Home: NextPage<NewsItemProps> = ({ newsItems }) => {
  //  TODO fire 7 requests every 1 second or so for 35 articles every 4 hours - 140 when fully populated

  //api.thenewsapi.com/v1/news/all?api_token=API_KEY_HERE&language=en&search=react+(javascript)&categories=business,tech&published_on=2022-05-17&limit=5

  // 7 x 5 x 4
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
      <Main newsItems={newsItems} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // https://stackoverflow.com/questions/68643457/next-js-pull-data-at-specific-times
  const mongo = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
  const mongoDB = mongo.db();
  const newsArticleCollection = mongoDB.collection('newsArticles');
  const collectionAPI = [
    `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=javascript&categories=business,tech&limit=5`,
    `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=typescript&categories=business,tech&limit=5`,
    `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=python&categories=business,tech&limit=5`,
    `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=react+(typescript)&categories=business,tech&limit=5`,
    `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API}&language=en&search=react+(javascript)&categories=business,tech&published_on=2022-05-17&limit=5`,
  ];
  // console.log(`${process.env.MONGO_DB_API}`);
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
  //     // return console.log([...title.data, ...repos, ...followers, ...followings, ...test, ...tester]);
  //     // https://www.mongodb.com/docs/manual/reference/method/db.collection.update/
  //     //www.mongodb.com/docs/manual/reference/method/db.collection.update/#std-label-update-upsert
  //     // const result = await newsArticleCollection.insertMany(data);
  //     // https://stackoverflow.com/questions/46441006/how-can-i-remove-older-records-from-a-collection-in-mongodb <- date published removal
  //     let resultMany: UpdateResult | Document;
  //     actualCollection.forEach(async (article, i) => {
  //       // console.log(article);
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
  //       console.log(i);
  //       console.log(resultMany);
  //     });
  //     // const result = await newsArticleCollection.updateOne(
  //     //   { id: title.id },
  //     //   { $set: { userId: title.userId, id: title.id, title: title.title, body: title.body } },
  //     //   {
  //     //     upsert: true,
  //     //   }
  //     // );
  //   }
  // );
  // console.log(x);
  const response = await newsArticleCollection.find({}, { projection: { _id: 0 } }).toArray();
  const articleData = JSON.stringify(response);
  const newsItems = JSON.stringify(articleData);
  console.log(newsItems);
  mongo.close();

  return {
    props: {
      newsItems,
    },
    revalidate: 1,
  };
};

export default Home;
