import { MongoClient } from 'mongodb'

const MONGO_URI = 'mongodb+srv://tiktok:tiktok@cluster0.om99z.mongodb.net/tiktokclone?retryWrites=true&w=majority'


export async function openDB() {
  const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  return client.db('tiktokclone')
}