'use client'
import { useEffect, useState } from "react"

export default function Comment(props){
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])
    let [r, setR] = useState('')

    useEffect(()=>{
        
        fetch('/api/comment/list?id=' + props.gid)
        .then(r=>r.json())
        .then((result)=>{
            setData(result)   //<-- 스테이트 변경함수 , 늦음
            //console.log(result, "리스트 리절트")
        })

    },[r] )    //   },[]) <--  삽입하면 1회만 실행됨, html을 보여주고 나서 실행됨.

    return (
        <div>
        <hr></hr>
        {
            data.length > 0 ?
            data.map((a,i)=>
                    <p key={i}>{a.content}</p>
            )
            : '댓글없음'
        }
        <input onChange={(e)=>{setComment(e.target.value) }}/>
        <button onClick={()=>{
            fetch('/api/comment/new', {
                method : 'POST', 
                body : JSON.stringify({ comment : comment, _id : props.gid})
            })
            .then(res => {
                //console.log(res, "<--- res값")
                if(res.status === 200 ){
                    console.log(res.status)
                    setR(r +1)
                    //setData([...data, comment])
                } 
                else { '댓글등록오류' }
            
            })

        }}>댓글전송</button>
        </div>
    )
}



//<from>태그는 새로고침이 되기때문에 ...안씀.