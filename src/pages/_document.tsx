import { CssBaseline } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.sakneen.com/assets/website-manifest/favicon-32x32.png"
        />
      </Head>
      <body>
        <CssBaseline />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
