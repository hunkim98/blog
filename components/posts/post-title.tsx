import { ReactNode } from 'react'
import React from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="max-w-3xl mx-auto text-5xl md:text-6xl lg:text-6xl font-bold tracking-normal leading-10 md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
