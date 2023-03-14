import React from "react";
import { PropsWithChildren } from "react";
import { DM_Sans } from "next/font/google";
import Navbar from "./Navbar";
import styles from "@/styles/components/Layout.module.css";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={dm_sans.variable}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
