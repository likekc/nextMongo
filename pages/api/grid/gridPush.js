import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

console.log("Push서버시작")
export default async function handler(o, r) {
    let session = await getServerSession(o,r,authOptions)
    //console.log(session.user, "서버:엑셀DB업로드 테스트 중===========")
    //console.log(o.body)

    if (o.method == 'POST'){
        o.body = JSON.parse(o.body)
        const db = (await connectDB).db('Products')
        let result = await db.collection('site_1').insertMany(o.body);
        console.log("Push서버-----끝")
        r.status(200).json(result)
        //return r.status(200).redirect(302,'/list')
    }
}    