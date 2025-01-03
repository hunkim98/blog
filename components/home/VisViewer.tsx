import { useHomeViewContentContext } from 'context/ViewProjectContext'
import ChartResizer from 'components/charts/ChartResizer'
import SpiderChart from 'components/charts/SpiderChart'
import BarChart from 'components/charts/BarChart'
import React, { useMemo, useState } from 'react'
import SelectVis from './SelectVis/SelectVis'
import ProjectType from 'interfaces/project'
import { Box, Flex } from '@mantine/core'
import PostType from 'interfaces/post'

interface VisViewerProps {
  selectedLabel: string | null
  setSelectedLabel: (label: string | null) => void
  allPosts: PostType[]
  allProjects: ProjectType[]
}

export enum VisViewerItems {
  SkillsMap = 'Skills Map',
  WorksCount = 'Blog Contents',
}

export const BasicCategories = [
  'Data Visualization',
  'Machine Learning',
  'Web Development',
  'Product Design',
  'Computer Graphics',
]

const VisViewer: React.FC<VisViewerProps> = ({
  selectedLabel,
  setSelectedLabel,
  allPosts,
  allProjects,
}) => {
  // now we should really count the category count
  const categoryCount = useMemo(() => {
    const allContents = [...allPosts, ...allProjects]
    return allContents.reduce(
      (acc, content) => {
        const categories = content.categories
        for (let i = 0; i < categories.length; i++) {
          if (acc[categories[i]]) {
            acc[categories[i]] += 1
          } else {
            acc[categories[i]] = 1
          }
        }
        return acc
      },
      {} as Record<string, number>
    )
  }, [allPosts, allProjects])
  const validCategoryCount = useMemo(() => {
    const validCategories = BasicCategories.filter((category) => categoryCount[category])
    return validCategories.map((category) => ({
      label: category,
      value: categoryCount[category],
    }))
  }, [categoryCount])
  const [selectedVis, setSelectedVis] = useState(VisViewerItems.SkillsMap)
  return (
    <>
      <SelectVis selectedVis={selectedVis} setSelectedVis={setSelectedVis} />
      {/* <Box maw={400}> */}
      <ChartResizer maxWidth={350}>
        {selectedVis === VisViewerItems.SkillsMap && (
          <SpiderChart
            selectedLabel={selectedLabel}
            setSelectedLabel={setSelectedLabel}
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
        )}
        {selectedVis === VisViewerItems.WorksCount && (
          <BarChart
            data={validCategoryCount.sort((a, b) => b.value - a.value)}
            width={400}
            height={400}
            selectedLabel={selectedLabel}
            setSelectedLabel={setSelectedLabel}
            labelFontSize={10}
            margin={{ top: 50, right: 50, bottom: 80, left: 50 }}
          />
        )}
      </ChartResizer>
      {/* </Box> */}
    </>
  )
}

export default VisViewer
