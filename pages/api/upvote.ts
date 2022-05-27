import { MongoClient } from 'mongodb';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { UpvotePostRequest } from '../../components/types/types';

// export default function handler(req: NextApiRequest, res: NextApiResponse<NewsItemType>) {
const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: UpvotePostRequest = req.body;
    // TODO close client or instead keep it open for a specific session
    const client = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
    const db = client.db();
    const newsArticleCollection = db.collection('newsArticles');
    let upvoteAmount: number;
    switch (data.action) {
      case 'ADD':
        upvoteAmount = 1;
        break;
      case 'SUBTRACT':
        upvoteAmount = -1;
        break;
    }
    await newsArticleCollection.updateOne(
      { uuid: data.uuid },
      {
        $inc: {
          upvoteAmount: upvoteAmount,
        },
      }
    );
    res.status(200).json({
      message: `Successfully ${upvoteAmount === 1 ? 'upvoted' : 'removed upvote'} ${data.uuid}`,
    });
    client.close();
  }
};

export default handler;
