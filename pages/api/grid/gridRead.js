import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"


export default async function handler(o, r) {
    console.log("gridRead 서버시작")
    let session = await getServerSession(o,r,authOptions)

    if (o.method == 'GET'){
        //o.body = JSON.parse(o.body)
        const db = (await connectDB).db('Products')
        let result = await db.collection('site_1').find().toArray()
        r.status(200).json(result)
        console.log("gridRead 서버완료")
    }
}    