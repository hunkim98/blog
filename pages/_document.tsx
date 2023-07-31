import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            property="og:image"
            content={`assets/profile/dotting_intro.JPG`}
            key="ogimage"
          />
          <meta property="og:title" content="픽글 Pickgeul!" key="ogtitle" />
        </Head>
        <body className="bg-[#F1F1F1]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
