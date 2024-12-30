import { Box } from '@mantine/core'
import React from 'react'

interface GradientDividerProps {
  fromColor: string
  toColor: string
  isVertical?: boolean
}

const GradientDivider: React.FC<GradientDividerProps> = ({ fromColor, toColor, isVertical }) => {
  if (isVertical) {
    return (
      <Box
        style={{
          backgroundImage: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
          minHeight: '100%',
          // max-width: 18.75em;
          width: 1,
        }}
      />
    )
  }
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
