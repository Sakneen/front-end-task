//React
import React from "react";

const Footer = () => {
 return (
  <footer className="max-h-[5vh] container mx-auto font-[400] text-[12px] text-[#0E1024] flex items-center justify-end">
   &copy; {new Date().getFullYear()} Sakneen, Inc. All rights reserved.
  </footer>
 );
};

export default Footer;
