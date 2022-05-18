import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/body/Main';
import Header from '../components/header/Header';
import { MongoClient } from 'mongodb';
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
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/posts/7',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6',
  ];
  // console.log(`${process.env.MONGO_DB_API}`);
  Promise.all(collectionAPI.map((endpoint) => axios.get(endpoint))).then(
    async ([
      { data: title },
      { data: repos },
      { data: followers },
      { data: followings },
      { data: test },
      { data: tester },
    ]) => {
      const data = [title, repos, followers, followings, test, tester];
      const data2 = [title, repos, followers, followings, test, tester];
      const data3 = [title, repos, followers, followings, test, tester];
      const data4 = [title, repos, followers, followings, test, tester];
      const data5 = [title, repos, followers, followings, test, tester];
      const data6 = [title, repos, followers, followings, test, tester];
      const actualCollection = [...data, ...data2, ...data3, ...data4, ...data5, ...data6];
      const mongo = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
      const mongoDB = mongo.db();
      const newsArticleCollection = mongoDB.collection('newsArticles');
      // return console.log([...title.data, ...repos, ...followers, ...followings, ...test, ...tester]);
      // https://www.mongodb.com/docs/manual/reference/method/db.collection.update/
      //www.mongodb.com/docs/manual/reference/method/db.collection.update/#std-label-update-upsert
      // const result = await newsArticleCollection.insertMany(data);
      // https://stackoverflow.com/questions/46441006/how-can-i-remove-older-records-from-a-collection-in-mongodb <- date published removal
      let resultMany: number;
      actualCollection.forEach(async (data, i) => {
        // console.log(data);
        await newsArticleCollection.updateMany(
          { uuid: data.id },
          { $set: { userId: data.userId, id: data.id, title: data.title, body: data.body } },
          { upsert: true }
        );
      });
      // const result = await newsArticleCollection.updateOne(
      //   { id: title.id },
      //   { $set: { userId: title.userId, id: title.id, title: title.title, body: title.body } },
      //   {
      //     upsert: true,
      //   }
      // );
      // console.log(resultMany);
    }
  );
  // console.log(x);
  const response = await newsArticleCollection.find().toArray();
  const articleData = JSON.stringify(response);
  const newsItems = JSON.stringify(articleData);
  mongo.close();

  return {
    props: {
      newsItems,
    },
    revalidate: 1,
  };
};

export default Home;
