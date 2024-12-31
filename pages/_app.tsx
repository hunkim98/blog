import { HomeViewContentContextProvider } from 'context/ViewProjectContext'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { MantineProvider } from '@mantine/core'

import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import 'prismjs/themes/prism-tomorrow.css'
import 'animate.css/animate.compat.css'
import localFont from 'next/font/local'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import 'katex/dist/katex.min.css'
import '@mantine/core/styles.css'
import Script from 'next/script'
import '../styles/index.css'

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

// const geistFont = localFont({
//   src: [
//     {
//       path: '../fonts/Gesist-Thin.woff2',
//       weight: '200',
//       style: 'thin',
//     },
//     {
//       path: '../fonts/Gesist-Light.woff2',
//       weight: '300',
//       style: 'light',
//     },
//     {
//       path: '../fonts/Gesist-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/Gesist-Medium.woff2',
//       weight: '500',
//       style: 'medium',
//     },
//     {
//       path: '../fonts/Gesist-SemiBold.woff2',
//       weight: '600',
//       style: 'semibold',
//     },
//     {
//       path: '../fonts/Gesist-Bold.woff2',
//       weight: '700',
//       style: 'bold',
//     },
//   ],
//   variable: '--font-geist',
// })

export default function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    // START VALUE - WHEN LOADING WILL START
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })

    // COMPLETE VALUE - WHEN LOADING IS FINISHED
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, [])
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
          <HomeViewContentContextProvider>
            <LoadingBar
              progress={progress}
              waitingTime={400}
              color={'rgba(255,255,255,0.8)'}
              onLoaderFinished={() => {
                setProgress(0)
              }}
            />

            <Component {...pageProps} />
          </HomeViewContentContextProvider>
        </main>
      </MantineProvider>
    </>
  )
}
