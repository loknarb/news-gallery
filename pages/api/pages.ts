import { MongoClient } from 'mongodb';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { NewsItemType } from '../types/types';

// export default function handler(req: NextApiRequest, res: NextApiResponse<NewsItemType>) {
const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    let skip = data.skip ? parseInt(data.skip) : 0;
    // TODO close client or instead keep it open for a specific session
    const client = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
    const db = client.db();
    const newsArticleCollection = db.collection('newsArticles');
    const PAGE_SIZE = 50;

    const articles = await newsArticleCollection
      .find({}, { projection: { _id: 0 } })
      .sort({ upvotedAmount: 1 })
      // .sort({ $natural: -1 })
      .skip(skip * PAGE_SIZE)
      .limit(PAGE_SIZE)
      .toArray();
    res.status(200).json({ articles: articles });
    client.close();
  }
};

export default handler;
