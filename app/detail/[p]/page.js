import { ObjectId } from "mongodb"
import { connectDB } from "@/util/database"
import Comment from "./Comment"
import { notFound } from "next/navigation"

export default async function Detail(props){
    const db  = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.p) })
    if (result === null) {
            return notFound()
    }

    return(
        <div className="list-bg"> 
        {
            <div className="list-item">
                <h4>---글페이지---</h4>
                <h4>{result.title}</h4>
                <p>{result.content}</p>
                <Comment gid = {result._id.toString()} />
            </div>
        }
        </div>

    )
}