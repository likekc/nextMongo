import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(o, r) {
  if (o.method == 'DELETE'){
    console.log(o.body)
    let db = (await connectDB).db('forum')
    let result = await db.collection('post').deleteOne({_id : new ObjectId(o.body)});
    console.log(result)
    r.status(200).json('삭제완료')
  }
}