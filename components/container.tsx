import { BaseContainerClassName } from './layout/config'
import { cn } from 'lib/tw'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className={cn(BaseContainerClassName)}>{children}</div>
}

export default Container
