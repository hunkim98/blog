import { useMediaQuery } from '@mantine/hooks'
import { Box, em } from '@mantine/core'
import React from 'react'

interface TopRadialGradientProps {}

const TopRadialGradient: React.FC<TopRadialGradientProps> = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
  return (
    <Box
      pos={'absolute'}
      // bg={'red'}
      maw={1200}
      w={'100%'}
      //   h={800}
      top={0}
      left={'50%'}
      opacity={0.6}
      className="transition-all duration-100 -z-10"
      style={{
        transform: 'translateX(-50%)',
        background: 'radial-gradient(rgba(0,0,0,1), rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)',
        marginTop: isMobile ? 0 : -100,
        aspectRatio: isMobile ? '1/1' : '1.5/1',
      }}
    ></Box>
  )
}

export default TopRadialGradient
