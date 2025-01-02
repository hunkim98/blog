import WorkTemplateComponent from './WorkTemplate/WorkTemplateComponent'
import { useHomeViewContentContext } from 'context/ViewProjectContext'
import SingleImageTemplate from './WorkTemplate/SingleImageTemplate'
import MultiImageTemplate from './WorkTemplate/MultiImageTemplate'
import GradientDivider from 'components/common/GradientDivider'
import React, { useEffect, useMemo, useRef } from 'react'
import { Flex, Text, Image } from '@mantine/core'
import Project from '../../interfaces/project'

interface WorksProps {
  projects: Project[]
}

const Works: React.FC<WorksProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { setProjectContentHeight } = useHomeViewContentContext()
  const projectsSorted = useMemo(() => {
    const sortedItems = projects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedItems
  }, [projects])
  useEffect(() => {
    const sizeChangeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setProjectContentHeight(entry.contentRect.height)
      })
    })
    sizeChangeObserver.observe(containerRef.current)
    return () => {
      sizeChangeObserver.disconnect()
    }
  }, [setProjectContentHeight])
  return (
    <Flex mt={23} direction={'column'} ref={containerRef}>
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
