import { connectDB } from "@/util/database"
//import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

console.log("gridDel 서버시작")
export default async function handler(o, r) {
    let session = await getServerSession(o,r,authOptions)

    if (o.method == 'POST'){
        o.body = JSON.parse(o.body)
        
        const db = (await connectDB).db('Products')
        for(const item of o.body) {
            let result = await db.collection('site_1').deleteOne({Pid: item});
            
        }
        console.log("gridDel 서버완료")
        r.status(200)
        //return r.status(200).redirect(302,'/list')
    }    
}