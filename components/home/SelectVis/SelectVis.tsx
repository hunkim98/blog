import { Box, em, Flex, Text } from '@mantine/core'
import SelectVisItemBg from './SelectVisItemBg'
import { useMediaQuery } from '@mantine/hooks'
import { VisViewerItems } from '../VisViewer'
import React from 'react'

interface SelectVisProps {
  selectedVis: VisViewerItems
  setSelectedVis: React.Dispatch<React.SetStateAction<VisViewerItems>>
}

const SelectVis: React.FC<SelectVisProps> = ({ selectedVis, setSelectedVis }) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
  return (
    <Flex pos={'relative'} className="rounded-xl border border-[#3B3B3B]" gap={'sm'} p={6}>
      {Object.values(VisViewerItems).map((item) => {
        return (
          <Box
            key={item}
            className="rounded-lg cursor-pointer"
            bg={selectedVis === item ? '#3d3d3d' : 'transparent'}
            px={10}
            style={{
              cursor: 'pointer',
            }}
          >
            <Text
              //   size={{
              //     base: 'xs',
              //     md: 'sm',
              //   }}

              className="font-sans"
              onClick={() => setSelectedVis(item)}
              c={selectedVis === item ? '#ffffff' : '#rgba(255,255,255,0.4)'}
              style={{
                fontWeight: selectedVis === item ? 'semibold' : 'thin',
              }}
            >
              {item}
            </Text>
          </Box>
        )
      })}
      <SelectVisItemBg />
    </Flex>
  )
}

export default SelectVis
