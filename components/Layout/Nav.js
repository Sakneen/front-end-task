import Image from "next/image";
import navStyles from "../../styles/layout-styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Image src="/logo.svg" alt="logo" width={32} height={29} />
    </nav>
  );
};

export default Nav;
