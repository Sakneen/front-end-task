import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sakneen</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
