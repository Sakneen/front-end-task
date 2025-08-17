// src/pages/_app.tsx
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store"; // ✅ use the main store
import "@/styles/globals.css";
import Navbar from "../components/UI/Navbar";
import Layout from "../components/UI/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* Global Navbar */}
      <Layout>
        <Navbar />
        {/* Page content, padded so it doesn't overlap navbar */}
        <main className="pt-3">
          <Component {...pageProps} />
        </main>
      </Layout>
    </Provider>
  );
}
