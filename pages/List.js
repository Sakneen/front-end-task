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
        <div className={styles.controllers}>
          <span>
            <span className={styles.filter}>Filters by ID:</span>
            <input className={styles.input} placeholder="ex: 56487" />
          </span>
          <span className={styles.sort}>
            <Image src="/sort.png" alt="sort icon" width={16} height={16} />
            <span>sort by:</span>
            <select className={styles.select}>
              <option value="id" className={styles.option}>
                Unit ID
              </option>
              <option value="type" className={styles.option}>
                Unit type
              </option>
              <option value="price" className={styles.option}>
                Unit price
              </option>
            </select>
          </span>
        </div>
      </main>
      <footer>
        <a href="mailto:info@sakneen.com "> Contact us: info@sakneen.com</a>
      </footer>
    </div>
  );
};

export default List;
