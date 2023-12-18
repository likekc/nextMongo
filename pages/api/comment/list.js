import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(o, r) {
    //    console.log(o.query)
    const db = (await connectDB).db('forum')
    let result = await db.collection('comment')
    .find({ parent : new ObjectId(o.query.id) }).toArray()
    r.status(200).json(result)
}    