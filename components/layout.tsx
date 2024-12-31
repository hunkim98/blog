import React, { useEffect, useState } from 'react'
import { Transition } from '@mantine/core'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="relative min-h-screen text-[#fff] overflow-x-hidden">
        <main>{children}</main>
        {/* <Transition mounted={isMounted} transition="fade" duration={200} timingFunction="ease">
          {(styles) => <main style={styles}>{children}</main>}
        </Transition> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
