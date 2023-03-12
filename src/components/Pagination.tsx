import Link from "next/link";
import styles from "@/styles/components/Pagination.module.css";

export default function Pagination() {
  return (
    <nav aria-label="Page navigation" className={styles.pagination}>
      <ul className="pagination justify-content-center">
        <li className={`page-item disabled ${styles.pagination__item}`}>
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
            aria-label="Previous"
          >
            <i className={`${styles.arrow} ${styles.left}`}></i>
          </Link>
        </li>
        <li
          className={`page-item active ${styles.pagination__item} ${styles.pagination__item__active}`}
        >
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
          >
            <span>1</span>
          </Link>
        </li>
        <li className={`page-item ${styles.pagination__item}`}>
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
          >
            <span>2</span>
          </Link>
        </li>
        <li className={`page-item ${styles.pagination__item}`}>
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
          >
            <span>3</span>
          </Link>
        </li>
        <li className={`page-item ${styles.pagination__item}`}>
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
          >
            <span>4</span>
          </Link>
        </li>
        <li className={`page-item ${styles.pagination__item}`}>
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
          >
            <span>5</span>
          </Link>
        </li>
        <li className={`page-item disabled ${styles.pagination__item}`}>
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
          >
            <span>...</span>
          </Link>
        </li>
        <li className={`page-item ${styles.pagination__item}`}>
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
          >
            <span>35</span>
          </Link>
        </li>
        <li className={`page-item ${styles.pagination__item}`}>
          <Link
            className={`page-link ${styles.pagination__item__link}`}
            href="#"
            tabIndex={-1}
            aria-disabled="true"
            aria-label="Next"
          >
            <i className={`${styles.arrow} ${styles.right}`}></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
