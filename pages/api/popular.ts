import { MongoClient } from 'mongodb';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { NewsItemType } from '../types/types';

// export default function handler(req: NextApiRequest, res: NextApiResponse<NewsItemType>) {
const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    // TODO close client or instead keep it open for a specific session
    const client = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
    const db = client.db();
    const newsArticleCollection = db.collection('newsArticles');
    const article = newsArticleCollection.updateOne(
      { uuid: data.article.uuid },
      {
        $set: {
          upvoteAmount: Math.floor(Math.random() * 90),
          commentAmount: Math.floor(Math.random() * 30),
          upvoted: true,
        },
      },
      { upsert: true }
    );

    res.status(200).json({ article: article });
    client.close();
  }
};

export default handler;
