import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import LoginBtn from './LoginBtn'
import LogOutBtn from "./LogOutBtn";
import { getServerSession } from "next-auth"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { cookies } from 'next/headers'
import DarkMode from './DarkMode'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Project',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  //console.log(session)
  
  let res = cookies().get('mode')
  //console.log(res,"<<첫번째 쿠키값확인")
  if( res == undefined ){    // 쿠키값 없으면
    res = { value: 'light'}   //기본 라이트값으로 설정
  }
  //console.log(res.value,"<<레이아웃 쿠키값확인")

  return (
    <html lang="en">
      <body className={ res.value == 'dark' 
        ? 'dark-mode' 
        : ''}>
      <div className="navbar"> 
        <Link href="/" className="logo">Asolution</Link>
        <Link href="/grid">Grid</Link> 
        <Link href="/list">List</Link>
        <Link href="/write">Write</Link>
        {
          session
            ? <spen>{session.user.name} <LogOutBtn></LogOutBtn></spen>
          : <LoginBtn></LoginBtn>

        }

        <DarkMode lmode={res.value} />
        
      </div>  
      <div>
          {children}
        </div>
        </body>
    </html>
  )
}
