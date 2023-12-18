import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(o,r){
    if (o.method == 'POST'){
        let sbody = {
            title : o.body.title,
            content : o.body.content
        }
        const db = (await connectDB).db('forum')
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(o.body._id)},
            {$set : sbody}    //$inc 연산자 여러가지 있음
        )
        
        r.status(200).redirect(302,'/list')
    }
}