import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
   return ( 
      <nav className={styles.nav}>
        <Image src="/logo.png" alt="logo" width={42} height={39} />
      </nav>
   );
}

export default Navbar;