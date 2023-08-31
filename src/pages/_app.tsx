import { AppProps } from "next/app";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Global } from "@emotion/react";
import globalStyles from "../styles/globalStyles";
import React from "react";

import "react-toastify/dist/ReactToastify.css";
import Toast from "@/components/molecules/modals/Toast";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {
      retry: 0,
    },
  },
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      console.log(error);
    },
  }),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <main>
        <Component {...pageProps} />

        <Toast />
      </main>
    </QueryClientProvider>
  );
}
