import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";
import styles from "../../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Nav />

        <main className={styles.main}>{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
