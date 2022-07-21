import Head from 'next/head';
import styles from '../../styles/NavMenu.module.css';

const NavMenu = () => {
   return (
      <>
      <Head>
           <link
               href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            ></link>
            <style>{'body { background-color: #F5F5F5; }'}</style>
      </Head>
      <main className={styles.main}>
         <h1 className={styles.header}>Dashboard</h1>

         <div className={styles.breadCrumb}>
            <span className="material-icons">&#xe9b2;</span>
            <span className={styles.breadCrumbText} style={{textDecoration:"underline"}}>Home</span>
            <span className={styles.breadCrumbText}>&gt;</span>
            <span className={styles.breadCrumbText}>Dashboard</span>
         </div>
      </main>
      </>
   );
   }
   export default NavMenu;