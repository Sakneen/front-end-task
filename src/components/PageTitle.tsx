import React, { PropsWithChildren } from "react";
import styles from "@/styles/components/PageTitle.module.css";

export default function PageTitle({ children }: PropsWithChildren) {
  return <h2 className={styles.title}>{children}</h2>;
}
