import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(o, r) {
    //    console.log(o.query)
    const db = (await connectDB).db('Products')
    let result = await db.collection('site_1')
    .find({ parent : new ObjectId(o.query.id) }).toArray()
    r.status(200).json(result)
}    