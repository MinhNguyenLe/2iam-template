import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import DataProvider from "../components/DataProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
      <Analytics />
    </DataProvider>
  );
}

export default MyApp;
