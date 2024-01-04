import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"


export default async function handler(o, r) {
    console.log("Push1 서버시작")
    //let session = await getServerSession(o,r,authOptions)
    if (o.method == 'POST'){
        o.body = JSON.parse(o.body)
        //console.log(o.body[1].Pid)

        try {
            const db = (await connectDB).db('Products');
            //let result = await db.collection('site_1').insertMany(o.body);
            // 중복된 Pid를 가진 데이터 찾기
            //const duplicateData = await db.collection('site_1').find({ Pid: { $in: o.body.map(item => item.Pid) } }).toArray();
            const duplicateData = await db.collection('site_1').find().toArray()
            // 중복 여부에 따라 데이터 구분
            const newData = o.body.filter(item => !duplicateData.some(duplicate => duplicate.Pid === item.Pid));
            const existingData = o.body.filter(item => duplicateData.some(duplicate => duplicate.Pid === item.Pid));
            console.log("전체데이터수: " + duplicateData.length);
            console.log("새로운데이터수: "+ newData.length);
            console.log("중복데이터수: "+ existingData.length);
          
            r.status(200).json(duplicateData);
          } catch (error) {
            if (error.code === 11000) {
              // 중복 키 오류, 여기서 처리
              console.error("중복 키 오류:", error.message);
              r.status(400).json({ error: "중복 키 오류"});
            } else {
              // 다른 MongoDB 오류, 여기서 처리
              console.error("MongoDB 오류:", error.message);
              r.status(500).json({ error: "내부 서버 오류" });
            }
          }
    }
    console.log("Push1 서버-----끝");
}    