import { useHomeViewContentContext } from 'context/ViewProjectContext'
import { Box, Flex, Text, Title, Image, em } from '@mantine/core'
import { useMantineMediaQuery } from 'lib/mantineMediaQuery'
import SpiderChart from 'components/charts/SpiderChart'
import GradientDivider from '../common/GradientDivider'
import React, { useEffect, useRef } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import SocialIcon from '../social-icons'
import { useRouter } from 'next/router'
import VisViewer from './VisViewer'
import NameSvg from '../svgs/name'
import Link from 'next/link'

const Intro = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { setProjectTopMargin: setProjectTopDistance } = useHomeViewContentContext()
  const { isSmallerThanSm } = useMantineMediaQuery()

  useEffect(() => {
    // get the size of the div
    // attach size change observer
    const sizeChangeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setProjectTopDistance(entry.contentRect.height)
        // console.log(entry.contentRect.height)
      })
    })
    sizeChangeObserver.observe(ref.current)
    return () => {
      sizeChangeObserver.disconnect()
    }
  }, [setProjectTopDistance])

  return (
    <Flex
      gap={{
        xs: 'xs',
        md: 'md',
      }}
      ref={ref}
      direction={'column'}
      className="mb-[22px] md:mb-[22px] select-none"
      align={'center'}
    >
      <Flex direction={'column'} align={'center'} w={'100%'}>
        <Flex w="100%" maw={550} direction={'column'} align={'center'}>
          {/* <Image src={'/assets/profile/temp_datavis.png'} w={400} mb={45} /> */}
          <NameSvg fill="white" />
          {/* <Box w="80%" mt={18} mb={18}>
            <GradientDivider fromColor="rgba(255,255,255,1)" toColor="rgba(255,255,255,0)" />
          </Box> */}

          <Text
            mt={25}
            className="text-center font-tiempos font-thin"
            c={'white'}
            size={isSmallerThanSm ? '14px' : '15px'}
            style={{
              lineHeight: isSmallerThanSm ? '1.4' : '1.3',
              letterSpacing: 1,
            }}
            maw={480}
            mb={20}
          >
            <Text span className="font-tiempos font-medium">
              Software Engineer + Data Analyst
            </Text>{' '}
            <Text span className="font-tiempos font-thin">
              professionally trained in building data management tools and conducting user behavior
              analysis. Proficient in rendering graphics on the web and implementing AI into web
              services. Creates data visualizations and 3D graphics as a hobby.
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Intro
