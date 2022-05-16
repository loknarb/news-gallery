import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/body/Main';
import Header from '../components/header/Header';
const Home: NextPage = () => {
  //  TODO fire 7 requests every 1 second or so for 35 articles every 4 hours - 140 when fully populated
  // 7 x 5 x 4
  return (
    <div>
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
    </div>
  );
};

export default Home;
