import { Box, MantineStyleProps } from '@mantine/core'
import React from 'react'

interface GradientDividerProps {
  fromColor: string
  toColor: string
  isVertical?: boolean
  display?: MantineStyleProps['display']
}

const GradientDivider: React.FC<GradientDividerProps> = ({
  fromColor,
  toColor,
  isVertical,
  display,
}) => {
  if (isVertical) {
    return (
      <Box
        display={display ? display : 'block'}
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
      display={display ? display : 'block'}
      style={{
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
        height: 1,
        width: '100%',
      }}
    />
  )
}

export default GradientDivider
