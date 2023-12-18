'use client'
//import { useState } from "react";

export default function Write(){
    //let [src, setSrc] useState('')

    //if(유저세선출력해서 없으면){
        //return 로그인하세요
    // } else {

    // }

    return(
    <div className="p-20">
        <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목" />
                <input name="content" placeholder="글내용" />
                {/* <input type="file" accept="image/*" /> */}
                <input type="file" accept="image/*" 
                    onChange={async(e)=>{
                        let file = e.target.files[0]
                        let filename = encodeURIComponent(file.name)
                        let res = await fetch('/api/post/image?file=' + filename)
                        res = await res.json()
                    
                    }}
                />
                <button type="submit">button</button>
            </form>

            {/* 아마존 서버 이용하기
                <input type="file" accept="image/*" onChange={
                async (e) => {
                let file = e.target.files[0]
                let filename = encodeURIComponent(file.name)
                let res = await fetch('/api/post/image?file=' + filename)
                res = await res.json()
                
                //S3 업로드
                const formData = new FormData()
                Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
                    formData.append(key, value)
                })
                let 업로드결과 = await fetch(res.url, {
                    method: 'POST',
                    body: formData,
                })
                console.log(업로드결과)

                if (업로드결과.ok) {
                    setSrc(업로드결과.url + '/' + filename)
                } else {
                    console.log('실패')
                }
                
                }
            } />
            <img src={src} /> */}
    </div>
    )
}