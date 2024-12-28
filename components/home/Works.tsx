import GradientDivider from 'components/common/GradientDivider'
import WorkTemplateOne from './WorkTemplate/WorkTemplateOne'
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
      })),
    ]
    const sortedItems = allPostsProjects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedItems
  }, [allProjects])
  return (
    <Flex mt={23} direction={'column'}>
      <Text
        className="font-sans font-bold"
        c={'white'}
        size={'20px'}
        style={{
          letterSpacing: -0.6,
        }}
        bg="black"
        p={10}
      >
        Selected Works
      </Text>
      <Flex gap={'lg'} direction={'column'}>
        <WorkTemplateOne work={postsProjectsSorted[0]} />
        {/* <GradientDivider fromColor="rgba(255,255,255,1)" toColor="rgba(255,255,255,0)" /> */}
        <WorkTemplateOne work={postsProjectsSorted[1]} />
      </Flex>
    </Flex>
  )
}

export default Works
