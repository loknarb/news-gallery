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
    'https://jsonplaceholder.typicode.com/posts/4',
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

      // return console.log([...title.data, ...repos, ...followers, ...followings, ...test, ...tester]);
      console.log(`${process.env.MONGO_DB_API}`);
      const result = await newsArticleCollection.insertMany(data);
      console.log(result);
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
