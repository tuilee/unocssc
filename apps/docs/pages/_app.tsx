import type { AppProps } from "next/app";

import "../styles/coldark-prism.css";
import "../styles/global.css";
import "@unocssc/ui/dist/style.css";

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
