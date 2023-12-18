'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(){
    let router = useRouter()
    // let a = usePathname()   //현재 URL
    // let b = useSearchParams()  //search parameter (query string) 출력
    // let c = useParams()      //dynamic route에 입력한 내용 URL파라미터 출력
    return(
        <button onClick={()=>{ router.push('/')}}>button</button>
    )
}