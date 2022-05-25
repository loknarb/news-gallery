import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(data);
    // TODO close client or instead keep it open for a specific session
    const client = await MongoClient.connect(`${process.env.MONGO_DB_API}`);
    const db = client.db();
    const newsArticleCollection = db.collection('newsArticles');
    const response = await newsArticleCollection
      .find({}, { projection: { _id: 0 } })
      .sort({ upvoteAmount: -1 })
      .limit(50)
      .toArray();

    console.log(response);
    res.status(200).json({
      data: response,
    });
    client.close();
  }
};
export default handler;
