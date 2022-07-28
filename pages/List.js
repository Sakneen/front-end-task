import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/units-list.module.css";

const List = () => {
  return (
    <div className="container">
      <nav className={styles.nav}>
        <Link href="/" target="_blank" rel="noopener noreferrer">
          <span className={styles.logo}>
            <Image src="/fav.png" alt="Sakneen Logo" width={25} height={25} />
          </span>
        </Link>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.subtitle}>Dashboard</h1>
        <div className={styles.breadcrumbs}>
          <span className={styles.logo}>
            <Image src="/home.png" alt="home icon" width={16} height={16} />
          </span>
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <span>Dashboard</span>
        </div>
      </main>
      <footer>
        <a href="mailto:info@sakneen.com "> Contact us: info@sakneen.com</a>
      </footer>
    </div>
  );
};

export default List;
