import Project from '../../interfaces/project'
import { Flex, Text } from '@mantine/core'
import React, { useMemo } from 'react'

interface WorksProps {
  allProjects: Project[]
}

const Works: React.FC<WorksProps> = ({ allProjects }) => {
  const postsProjectsSorted = useMemo(() => {
    const allPostsProjects = [
      ...allProjects.map((i) => ({
        ...i,
        type: 'project',
      })),
    ]
    const sortedItems = allPostsProjects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedItems
  }, [allProjects])
  return (
    <Flex mt={23}>
      <Text
        className="font-sans font-bold"
        c={'white'}
        size={'20px'}
        style={{
          letterSpacing: -0.6,
        }}
      >
        Selected Works
      </Text>
    </Flex>
  )
}

export default Works
