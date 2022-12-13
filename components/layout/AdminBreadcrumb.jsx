//React
import { Fragment } from "react";

//Next
import Image from "next/image";
import Link from "next/link";

//Next-router
import { useRouter } from "next/router";

//Hero-icons
import { ChevronRightIcon } from "@heroicons/react/20/solid";

//constants
import { breadcrumbPages } from "../../constants";
import { getPath } from "../../utils/functions";

const AdminBreadcrumb = () => {
 const router = useRouter();

 const path = getPath(router.asPath);

 const activeClassHandler = (selectedBath) => {
  return selectedBath == path
   ? "underline underline-offset-1 text-gray-500"
   : "";
 };

 return (
  <nav className="flex text-xs text-[#9E9E9E] my-5 font-[500] bg-white p-2 shadow rounded">
   <ul className="flex items-center">
    <Image src={"/homeIcon.svg"} alt="home" width={14} height={13} />
    <li className="ml-[10px]">
     <div className="flex items-center hover:text-[#616161]">
      <Link href="/">
       <a className={activeClassHandler("Home")}>Home</a>
      </Link>
     </div>
    </li>
    {breadcrumbPages.map((page) => (
     <Fragment key={page.name}>
      <ChevronRightIcon
       className="h-5 w-5 flex-shrink-0 text-[#9E9E9E] ml-[10px]"
       aria-hidden="true"
      />
      <li className="ml-[10px]">
       <div className="flex items-center hover:text-[#616161]">
        <Link
         href={page.href}
         className="underline underline-offset-1 text-gray-500"
        >
         <a className={activeClassHandler(page.name)}>{page.name}</a>
        </Link>
       </div>
      </li>
     </Fragment>
    ))}
   </ul>
  </nav>
 );
};

export default AdminBreadcrumb;
