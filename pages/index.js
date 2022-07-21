import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import ListingTable from './components/ListingTable'
import Navbar from './components/Navbar'
import NavMenu from './components/NavMenu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sakneen</title>
        <meta name="description" content="Sakneen Front-End Task" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Navbar />


      <main className={styles.main}>
        <NavMenu />
        <ListingTable />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
