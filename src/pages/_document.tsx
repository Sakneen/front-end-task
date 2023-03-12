import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="sakneen, home, house, buy, sell, villa, townhouse, twin house , duplex, bed apartment, live, investment, built, estate"
        />
        <meta name="description" content="We show you every home on a map and provide an accurate valuation to reduce the stress that comes with buying or selling a home" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
