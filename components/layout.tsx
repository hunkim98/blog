import Footer from './footer'
import Meta from './meta'
import React from 'react'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen text-[#000000]">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
