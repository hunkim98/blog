import { Box } from '@mantine/core'
import React from 'react'

interface GradientDividerProps {
  fromColor: string
  toColor: string
}

const GradientDivider: React.FC<GradientDividerProps> = ({ fromColor, toColor }) => {
  return (
    <Box
      style={{
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
        height: 1,
        width: '100%',
      }}
    />
  )
}

export default GradientDivider
