import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sakneen</title>
        <link rel="icon" href="/imgs/fav.png" />
      </Head>
      <Component {...pageProps} />
      <footer>
        <a href="mailto:info@sakneen.com "> Contact us: info@sakneen.com</a>
      </footer>
    </>
  );
}

export default MyApp;
