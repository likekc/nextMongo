'use client'

import { useRouter } from "next/navigation"  //<--navigation 확인요망
import { useEffect, useState } from "react"

export default function DarkMode(props){
    let router = useRouter()   //유즈라우터 변수에 선언
    let [coo, setMode] = useState(props.lmode)      //layout에서 프롭스로 값을 받음.
    
    //console.log(coo,"<=프롭스 쿠키값확인")

    useEffect(()=>{  
        router.refresh() 
    },[coo])


    if( coo == 'light'){
        return(
            <span onClick={()=>{
                setMode('dark')
                document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
            }}
            >🌙</span>
        )
        }
    else {
        return(
            <span onClick={()=>{
                setMode('light')
                document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        }}
        >☀️</span>
        )
    }

}