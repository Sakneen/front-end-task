import Link from "next/Link"
import Head from "next/head"
import style from "../styles/welcome.module.css"

export default function Home() {
  return (
    <div className={style.welcome} >
      <Head><title>Sakneen</title></Head>
       Welcome to Sakneen <br/>
       <Link href={`/dashboard`}>DashBoard</Link>
    </div>
  )
}
