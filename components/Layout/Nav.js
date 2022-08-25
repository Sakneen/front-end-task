import Image from "next/image";
import Link from "next/link";
import navStyles from "../../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={32} height={29} />
      </Link>
    </nav>
  );
};

export default Nav;
