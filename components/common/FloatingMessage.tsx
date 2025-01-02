import { em, Flex } from '@mantine/core'
import React from 'react'

interface FloatingMessageProps {
  message: React.ReactNode
}

const FloatingMessage: React.FC<FloatingMessageProps> = ({ message }) => {
  return (
    <Flex
      opacity={message ? 1 : 0}
      pos={'fixed'}
      p={10}
      left={{
        base: '20px',
        sm: '20px',
      }}
      bottom={{
        base: '20px',
        sm: '20px',
      }}
      style={{
        transition: 'opacity 0.3s',
        backdropFilter: 'blur(3px)',
      }}
      // bg={'rgba(0,0,0,0.5)'}
      className="z-50 border border-white/20 rounded-lg"
    >
      {message}
    </Flex>
  )
}

export default FloatingMessage
