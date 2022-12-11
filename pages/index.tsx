import React from "react";
import Head from "next/head";
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] overflow-auto">
      <Head>
        <title>Front End Task</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <main className="justify-center items-center flex-grow pt-16 container m-auto">
          <Dashboard />
        </main>
      </Layout>
    </div>
  );
}
