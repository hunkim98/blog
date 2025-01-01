import { useHomeViewContentContext } from 'context/ViewProjectContext'
import { Box, Flex, Text, Title, Image } from '@mantine/core'
import SpiderChart from 'components/charts/SpiderChart'
import GradientDivider from '../common/GradientDivider'
import React, { useEffect, useRef } from 'react'
import SocialIcon from '../social-icons'
import { useRouter } from 'next/router'
import NameSvg from '../svgs/name'
import Link from 'next/link'

const Intro = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { setProjectTopMargin: setProjectTopDistance } = useHomeViewContentContext()

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
      direction={'row'}
      className="pt-16 mb-[22px] md:mb-[22px] select-none"
      align={'center'}
    >
      <Flex direction={'column'} align={'center'} w={'100%'} pl={20} pr={20}>
        <Flex w="100%" maw={600} direction={'column'} align={'center'}>
          <SpiderChart
            width={400}
            height={400}
            levels={10}
            data={[
              { label: 'Data Visualization', ratio: 1.0 },
              { label: 'Machine Learning', ratio: 0.8 },
              { label: 'Web Development', ratio: 0.8 },
              { label: 'Computer Graphics', ratio: 0.8 },
              { label: 'Product Design', ratio: 0.7 },
            ]}
            labelFontSize={13}
            // margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          />
          {/* <Image src={'/assets/profile/temp_datavis.png'} w={400} mb={45} /> */}
          <NameSvg fill="white" />
          {/* <Box w="80%" mt={18} mb={18}>
            <GradientDivider fromColor="rgba(255,255,255,1)" toColor="rgba(255,255,255,0)" />
          </Box> */}

          <Text
            mt={25}
            className="text-center font-tiempos font-thin"
            c={'white'}
            size={'15px'}
            style={{
              lineHeight: 1.3,
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
        {/* <Text>
          <Text opacity={0.5} span>
            Software Engineer engineering
          </Text>{' '}
          <Text opacity={0.8} span>
            {' '}
            Computer Graphics
          </Text>{' '}
          <Text opacity={0.8} span>
            &
          </Text>
          <Text opacity={0.8} span>
            {' '}
            AI{' '}
          </Text>
          <Text opacity={0.5} span>
            at Graduate School of Design
          </Text>
        </Text> */}
        {/* <Flex gap={'xs'} mt={8}>
          <SocialIcon kind="github" href={`https://github.com/hunkim98`} size={18} />
          <SocialIcon kind="mail" href={`mailto:hunkim98@gmail.com`} size={18} />
        </Flex> */}
      </Flex>
    </Flex>
  )
}

export default Intro
