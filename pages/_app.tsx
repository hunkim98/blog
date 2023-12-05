import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_RUNTIME_ENV !== "development" && (
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
      )}
      {process.env.NEXT_PUBLIC_RUNTIME_ENV !== "development" && (
        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
      `}
        </Script>
      )}
      <Component {...pageProps} />
    </>
  );
}
