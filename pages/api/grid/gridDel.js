import { connectDB } from "@/util/database"
//import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

console.log("gridDel 서버시작")
export default async function handler(o, r) {
    let session = await getServerSession(o,r,authOptions)

    if (o.method == 'POST'){
        o.body = JSON.parse(o.body)
        let deleteResult = []
        const db = (await connectDB).db('Products')
        for(const item of o.body) {
            const result = await db.collection('site_1').deleteOne({Pid: item});
            deleteResult.push(result)
        }
        
        //console.log(deleteResult)
        console.log("gridDel 서버완료")
        
        r.status(200).json(deleteResult.length+"개 삭제완료");

    }    
}