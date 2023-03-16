import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {

  return (
    <div className={`${styles.navbar} `}>
      <div className="container">
      <Image src={"/imgs/home.svg"} alt={"home"} width={30} height={30} />
      </div>
    </div>
  );
};

export default Navbar;
