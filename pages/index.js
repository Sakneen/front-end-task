import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className="container">
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Sakneen Task</h1>

        <Link href="/Dashboard">
          <a className={styles.description}>Display units</a>
        </Link>
      </main>

      <footer>
        <a href="mailto:info@sakneen.com "> Contact us: info@sakneen.com</a>
      </footer>
    </div>
  );
}
