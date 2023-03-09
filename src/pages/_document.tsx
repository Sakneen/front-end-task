import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="icon"
          href="https://www.sakneen.com/assets/website-manifest/favicon-32x32.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sakneen_" />
        <meta name="twitter:creator" content="@sakneen_" />
        <meta property="og:url" content="https://www.sakneen.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sakneen.com/assets/images/logos/meta.jpeg"
        />
        <meta property="og:image:alt" content="Sakneen" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sakneen" />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="Sakneen: Buy, Sell or Rent Houses in Egypt"
        />
        <meta
          property="og:description"
          content="No hidden homes. No hidden fees. See houses priced and on a map 🏡 📍 with a valuation 📊  to help you make the right decisions."
        />
        <meta
          name="description"
          content="No hidden homes. No hidden fees. See houses priced and on a map 🏡 📍 with a valuation 📊  to help you make the right decisions."
        />
        <link rel="canonical" href="https://www.sakneen.com/en"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
