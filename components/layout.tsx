import React, { useEffect, useState } from 'react'
import { Transition } from '@mantine/core'
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
      </div>
    </>
  )
}

export default Layout
