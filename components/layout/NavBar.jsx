//Next
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
 return (
  <div className="h-[9vh] py-[16px] px-[24px] bg-[#2419BE]">
   <nav className=" flex items-center ">
    <Link href="/">
     <a>
      <Image
       src={"/sakneen-logo.svg"}
       width={32}
       height={30}
       alt="sakneen logo"
      />
     </a>
    </Link>
   </nav>
  </div>
 );
};

export default Navbar;
