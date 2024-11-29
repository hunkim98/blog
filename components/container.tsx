import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="container relative mx-auto px-5 max-w-7xl flex-col md:flex-row flex select-none">
      {children}
    </div>
  )
}

export default Container
