import { Text } from '@mantine/core'
import { cn } from 'lib/tw'
import React from 'react'

interface ContentTitleProps {
  children: React.ReactNode
  className?: string
}

const ContentTitle: React.FC<ContentTitleProps> = ({ children, className }) => {
  return (
    <Text
      className={cn('font-tiempos', className)}
      size={'40px'}
      style={{
        lineHeight: '1.2em',
        letterSpacing: '1px',
      }}
    >
      {children}
    </Text>
  )
}

export default ContentTitle
