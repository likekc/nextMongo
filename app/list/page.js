import { connectDB } from "@/util/database"
//import Link from "next/link"
//import DetailLink from "./DetailLink"
import ListItem from "./ListItem";

export default async function List(){

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()
    //console.log("이 내용확인:",result);
    return (
        <div className="list-bg">
            <ListItem result={result}/>
        </div>
      )
}