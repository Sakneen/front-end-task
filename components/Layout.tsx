import React from "react";
import Image from "next/image";
type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <nav className="bg-[#2419BE] py-3 px-5 sticky top-0">
        <Image src="/vector.png" height={25} width={25} />
      </nav>
      {children}
      <footer className="text-end py-3 px-5">
        © 2022 Sakneen, Inc. All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
