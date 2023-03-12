import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/components/Breadcrumb.module.css'
import { Icon } from './';

export default function Breadcrumb() {
    const router = useRouter();
    const { asPath } = router;

    return (
        <nav aria-label="breadcrumb" className={styles.breadcrumb}>
            <ol className="breadcrumb mb-0">
                <li className={`breadcrumb-item ${styles.breadcrumb_item} ${asPath === "/" ? styles.active : ""}`}>
                    <Icon icon="Home" size={"1.2rem"} style={{ marginRight: ".8rem" }} />
                    {asPath === "/" ? "Home" : <Link href="/">Home</Link>}</li>

                <li className={`breadcrumb-item ${styles.breadcrumb_item} ${asPath === "/dashboard" ? styles.active : ""}`}>{asPath === "/dashboard" ? "Dashboard" : <Link href="/dashboard">Dashboard</Link>}</li>
            </ol>
        </nav>
    )
}
