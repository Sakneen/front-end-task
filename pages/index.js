import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
