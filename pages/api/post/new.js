import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(o,r){
    
    let session = await getServerSession(o,r, authOptions)
     if (session){
         o.body.author = session.user.email
     }
    console.log(o.body)

    if(o.method == 'POST'){
        if (o.body.title ==''){
            return o.status(500).json('제목이 비어있습니다')
        }
        try{ 
        const db = (await connectDB).db("forum")
        let result = await db.collection('post').insertOne(o.body)
        return r.status(200).redirect(302,'/list')
        } catch (error){
            console.log("DB접속 에러".error)
        }
    }
}