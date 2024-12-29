import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { MantineProvider } from '@mantine/core'
import 'prismjs/themes/prism-tomorrow.css'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import 'animate.css/animate.compat.css'
import localFont from 'next/font/local'
import { AppProps } from 'next/app'
import 'katex/dist/katex.min.css'
import '@mantine/core/styles.css'
import Script from 'next/script'
import '../styles/index.css'
import React from 'react'

const tiemposFont = localFont({
  src: [
    {
      path: '../fonts/TestTiemposHeadline-Light.otf',
      weight: '300',
      style: 'thin',
    },
    {
      path: '../fonts/TestTiemposHeadline-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TestTiemposHeadline-Medium.otf',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-tiempos',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_RUNTIME_ENV !== 'development' && (
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
      )}
      {process.env.NEXT_PUBLIC_RUNTIME_ENV !== 'development' && (
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
      <MantineProvider>
        <main className={`${tiemposFont.variable} ${GeistSans.variable}`}>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  )
}
