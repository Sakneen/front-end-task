import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import styles from "@/styles/components/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.main_nav}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src={Logo} alt="Sakneen" width="32" height="29" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
      </div>
    </nav>
  );
}
