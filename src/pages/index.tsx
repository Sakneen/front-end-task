import Head from "next/head";
import { Breadcrumb, PageTitle } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sakneen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container px-0">
        <PageTitle>Home</PageTitle>
        <Breadcrumb />
      </div>
    </>
  );
}
