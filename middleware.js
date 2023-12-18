import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request){
    // console.log(request.nextUrl)
    // console.log(request.cookies)
    // console.log(request.headers.get('user-agent'))

    // NextResponse.next()
    // NextResponse.redirect()
    // NextResponse.rewrite()      //주소창은 안바뀜

    const session = await getToken({req : request})
    console.log(session,"<-- 세션")
    return NextResponse.next()

    // if ( request.nextUrl.pathname.startsWith('/write')){
    //     if ( session == null) {
    //         return NextResponse.redirect(new URL('http://localhost:3000/'), request.url)
    //     }
    //     // console.log(new Date())
    //     // console.log(request.headers.get('sec-ch-ua-platform'))
    // }


    // request.cookies.get('쿠키이름')  //출력
    // request.cookies.has('쿠키이름')  //존재확인
    // request.cookies.delete('쿠키이름')  //삭제
    
    // const response = NextResponse.next()
    // response.cookies.set({
    //   name: 'mode',
    //   value: 'dark',
    //   maxAge: 3600,
    //   httpOnly : true
    // })  
    // return response  //쿠키생성


}