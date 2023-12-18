import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'


export default async function handler(o,r){      //빈칸이나 크기 체크, 기존 아이디, 이메일 체크
    if (o.method =='POST') {
        let hash = await bcrypt.hash(o.body.password, 10)
        o.body.password = hash
        let db = (await connectDB).db('forum');
        await db.collection('user_cred').insertOne(o.body);
        r.status(200).json('가입성공')
    }
}