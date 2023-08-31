import { AppProps } from "next/app";
import { PlatformBar } from "../components/blocks";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlatformBar />
      <Component {...pageProps} />
    </>
  );
}
