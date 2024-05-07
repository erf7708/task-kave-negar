import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="flex flex-col items-center  min-h-screen p-4">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
