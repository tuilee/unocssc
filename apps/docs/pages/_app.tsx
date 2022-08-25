import type { AppProps } from "next/app";

import "@unocssc/ui/dist/style.css";
import "../styles/global.css";

import { Navigation } from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
