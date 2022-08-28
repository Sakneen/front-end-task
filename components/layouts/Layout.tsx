import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const router = useRouter();
  const asPath = router.asPath;
  const queryParamIndex = asPath.indexOf('?');
  const title =
    asPath.substring(1, queryParamIndex === -1 ? undefined : queryParamIndex) ||
    'Home';

  return (
    <>
      <Navbar />
      <section className="container py-10">
        <section className="lg:container">
          <h1 className="text-2xl capitalize">{title}</h1>
          <Breadcrumb />
          {children}
        </section>
      </section>
    </>
  );
};

export default Layout;
