import { Box, Center, em, Flex, SegmentedControl, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { VisViewerItems } from '../VisViewer'
import React from 'react'

interface SelectVisProps {
  selectedVis: VisViewerItems
  setSelectedVis: React.Dispatch<React.SetStateAction<VisViewerItems>>
}

const SelectVis: React.FC<SelectVisProps> = ({ selectedVis, setSelectedVis }) => {
  return (
    // <Flex pos={'relative'} className/="rounded-xl border border-[#3B3B3B]" gap={'sm'} p={6}>
    <SegmentedControl
      className="rounded-xl border border-[#3B3B3B] bg-transparent z-50"
      color={'#3d3d3d'}
      mb={'sm'}
      radius={'xl'}
      value={selectedVis}
      onChange={(value) => setSelectedVis(value as VisViewerItems)}
      data={Object.values(VisViewerItems).map((item) => {
        return {
          value: item,
          label: (
            <Center m={-2}>
              <Text
                c={selectedVis === item ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.5)'}
                className="font-sans transition-all duration-100"
                size={'xs'}
                style={{
                  fontWeight: selectedVis === item ? 'normal' : 'thin',
                }}
              >
                {item}
              </Text>
            </Center>
          ),
        }
      })}
    />
  )
}

export default SelectVis
