import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=DM Sans"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
