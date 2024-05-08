import type { AppProps } from "next/app";
import "../styles/globals.css";
import { queryClient } from "@/utils/queryClient";
import { QueryClientProvider } from "react-query";
import { PostProvider } from "@/context/postContext";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PostProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </PostProvider>
    </QueryClientProvider>
  );
}
