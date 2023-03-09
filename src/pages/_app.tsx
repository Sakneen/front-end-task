import { Layout } from "@/components";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Layout>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </Layout>
      </QueryClientProvider>
    </>
  );
}
