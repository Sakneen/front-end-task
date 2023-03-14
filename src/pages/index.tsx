import React, { Fragment } from "react";
import Head from "next/head";
import { Breadcrumb, PageTitle } from "@/components";
import Link from "next/link";

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
        <h1 className="text-center">Home Page</h1>
        <h2 className="text-center pt-4">
          <Link href={"./dashboard"}>Go to Dashboard</Link>
        </h2>
      </div>
    </>
  );
}
