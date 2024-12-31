import { Box, MantineStyleProp, MantineStyleProps } from '@mantine/core'
import React from 'react'

interface BelowGradientProps {}

const BelowGradient: React.FC<BelowGradientProps> = () => {
  return (
    <Box
      pos={'fixed'}
      bottom={0}
      w={'100%'}
      h={80}
      className="z-50"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))',
      }}
    ></Box>
  )
}

export default BelowGradient
