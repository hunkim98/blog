import Document, { Html, Head, Main, NextScript } from 'next/document'

import Script from 'next/script'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          className={`bg-[black] bg-repeat`}
          style={{
            backgroundImage: 'url(/assets/background/noise50.png)',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
