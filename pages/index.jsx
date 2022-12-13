//Next
import Head from "next/head";
import { useRouter } from "next/router";

//utils helper
import { getPath } from "../utils/functions";

export default function Home() {
 const router = useRouter();

 const title = getPath(router.asPath);

 return (
  <>
   <Head>
    <title>Sakneen | {title}</title>
    <meta
     name="description"
     content="Sakneen Valuation™ is based on a unique pricing algorithm that we built to bring information & transparency to the real estate industry in Egypt."
    />
   </Head>
   Home
  </>
 );
}
