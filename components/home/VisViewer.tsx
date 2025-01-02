import ChartResizer from 'components/charts/ChartResizer'
import SpiderChart from 'components/charts/SpiderChart'
import SelectVis from './SelectVis/SelectVis'
import React, { useState } from 'react'
import { Box } from '@mantine/core'

interface VisViewerProps {}

export enum VisViewerItems {
  SkillsMap = 'Skills Map',
  WorksCount = 'Works Frequency Map',
}

const VisViewer: React.FC<VisViewerProps> = () => {
  const [selectedVis, setSelectedVis] = useState(VisViewerItems.SkillsMap)
  return (
    <>
      <SelectVis selectedVis={selectedVis} setSelectedVis={setSelectedVis} />
      {/* <Box maw={400}> */}
      <ChartResizer maxWidth={350}>
        <SpiderChart
          width={400}
          height={400}
          levels={10}
          data={[
            { label: 'Data Visualization', ratio: 0.95 },
            { label: 'Machine Learning', ratio: 0.8 },
            { label: 'Web Development', ratio: 1.0 },
            { label: 'Product Design', ratio: 0.7 },
            { label: 'Computer Graphics', ratio: 0.8 },
          ]}
          labelFontSize={13}
        />
      </ChartResizer>
      {/* </Box> */}
    </>
  )
}

export default VisViewer
