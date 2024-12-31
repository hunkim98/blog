import { Box } from '@mantine/core'
import { cn } from 'lib/tw'
import React from 'react'

interface NoiseFadeOutProps {
  height: number
  className?: string
  direction?: 'top' | 'bottom'
}

const NoiseFadeOut: React.FC<NoiseFadeOutProps> = ({ height, className, direction = 'bottom' }) => {
  if (direction === 'top') {
    return (
      <Box
        className={cn('relative', className)}
        style={{
          height: height,
          backgroundImage: 'url(/assets/background/noise30.png)',
        }}
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          // bg={'red'}
          style={{
            height: height / 2,
            width: '100%',
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          }}
        ></Box>
      </Box>
    )
  }
  return (
    <Box
      className={cn('relative', className)}
      style={{
        height: height,
        backgroundImage: 'url(/assets/background/noise30.png)',
      }}
    >
      <Box
        pos="absolute"
        top={height / 2}
        left={0}
        // bg={'red'}
        style={{
          height: height / 2,
          width: '100%',
          backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
        }}
      ></Box>
    </Box>
  )
}

export default NoiseFadeOut
