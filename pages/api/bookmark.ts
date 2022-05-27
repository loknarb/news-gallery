import { MongoClient } from 'mongodb';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { BookmarkPostRequest } from '../../components/types/types';

// export default function handler(req: NextApiRequest, res: NextApiResponse<NewsItemType>) {
const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: BookmarkPostRequest = req.body;
    // TODO close client or instead keep it open for a specific session
    const client = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
    const db = client.db();
    const newsArticleCollection = db.collection('newsArticles');
    let bookmarkBool: boolean;
    switch (data.action) {
      case 'ADD':
        bookmarkBool = true;
        break;
      case 'REMOVE':
        bookmarkBool = false;
        break;
    }
    await newsArticleCollection.updateOne(
      { uuid: data.uuid },
      {
        $set: {
          bookmark: bookmarkBool,
        },
      }
    );
    res.status(200).json({
      message: `Successfully  ${data.uuid}`,
    });
    client.close();
  }
};

export default handler;
