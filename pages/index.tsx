import React from "react";
import Head from "next/head";
import Image from "next/image";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] overflow-auto">
      <Head>
        <title>Front End Task</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <nav className="bg-[#2419BE] py-3 px-5 sticky top-0">
        <Image src="/vector.png" height={25} width={25} />
      </nav>

      <main className="justify-center items-center flex-grow pt-16 container m-auto">
        <Dashboard />
      </main>

      <footer className="text-end py-3 px-5">
        © 2022 Sakneen, Inc. All rights reserved.
      </footer>
    </div>
  );
}
