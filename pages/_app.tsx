import type { AppProps } from "next/app";
import "../styles/globals.css";
import { queryClient } from "@/utils/queryClient";
import { QueryClientProvider } from "react-query";
import { PostProvider } from "@/context/postContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PostProvider>
      <Component {...pageProps} />
      </PostProvider>
    </QueryClientProvider>
  );
}
