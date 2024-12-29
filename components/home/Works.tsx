import WorkTemplateComponent from './WorkTemplate/WorkTemplateComponent'
import SingleImageTemplate from './WorkTemplate/SingleImageTemplate'
import ThreeImageTemplate from './WorkTemplate/ThreeImageTemplate'
import GradientDivider from 'components/common/GradientDivider'
import { Flex, Text, Image } from '@mantine/core'
import Project from '../../interfaces/project'
import React, { useMemo } from 'react'

interface WorksProps {
  allProjects: Project[]
}

const Works: React.FC<WorksProps> = ({ allProjects }) => {
  const projectsSorted = useMemo(() => {
    const sortedItems = allProjects.sort((a, b) => {
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
        // bg="black"
        p={10}
      >
        Selected Works
      </Text>
      <Flex direction={'column'} gap={50}>
        {/* <ThreeImageTemplate work={postsProjectsSorted[0]} />
        <ThreeImageTemplate work={postsProjectsSorted[1]} />
        <SingleImageTemplate work={postsProjectsSorted[2]} /> */}
        {/* {projectsSorted.map((project, idx) => {
          return (
            <Flex key={project.title} gap={'sm'} w={'50%'} direction={'column'} wrap={'wrap'}>
              <Image src={project.thumbnail} w={'100%'} />
            </Flex>
          )
        })} */}

        {projectsSorted.map((project, idx) => {
          return <WorkTemplateComponent index={idx} key={project.title} work={project} />
        })}
      </Flex>
    </Flex>
  )
}

export default Works
