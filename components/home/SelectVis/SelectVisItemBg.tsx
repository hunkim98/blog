import { VisViewerItems } from '../VisViewer'
import { motion } from 'framer-motion'
import { Box } from '@mantine/core'
import React from 'react'

interface SelectVisItemBgProps {
  selectedVis: VisViewerItems
}

const SelectVisItemBg = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
      }}
    >
      <Box className="rounded-lg cursor-pointer" bg="#3d3d3d">
        adfaf
      </Box>
    </motion.div>
  )
}

export default SelectVisItemBg
