import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(o, r) {
    let session = await getServerSession(o,r,authOptions)
    console.log(session.user, "댓글달기")
    if (o.method == 'POST'){
        o.body = JSON.parse(o.body)
        let upComment = {
        content : o.body.comment,
        parent : new ObjectId(o.body._id),
        author : session.user.email
        }
        let db = (await connectDB).db('forum');
        let result = await db.collection('comment').insertOne(upComment);
        console.log(result, "뉴 서버 응답 값")
        r.status(200).json(result)   
    }
} 