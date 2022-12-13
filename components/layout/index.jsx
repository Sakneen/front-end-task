//Next-router
import { useRouter } from "next/router";
import Head from "next/head";
//Components
import Navbar from "./Navbar";
import AdminBreadcrumb from "./AdminBreadcrumb";
import Footer from "./Footer";
import { getPath } from "../../utils/functions";

const Layout = (props) => {
 const router = useRouter();

 const title = getPath(router.asPath);

 return (
  <>
   <Head>
    <title>Sakneen</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Sakneen" />
   </Head>
   <header>
    <Navbar />
   </header>
   <main className="min-h-[85vh] container mx-auto pt-10">
    <section>
     <h1 className="text-2xl capitalize">{title}</h1>
     <AdminBreadcrumb />
    </section>
    <section>{props.children}</section>
   </main>
   <Footer />
  </>
 );
};

export default Layout;
