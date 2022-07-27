import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Sakneen Task</h1>

        <Link href="/List">
          <a className={styles.description}>Display units</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a href="mailto:info@sakneen.com "> Contact us: info@sakneen.com</a>
      </footer>
    </div>
  );
}
