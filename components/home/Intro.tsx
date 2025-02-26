import { useHomeViewContentContext } from 'context/ViewProjectContext'
import { Box, Flex, Text, Title, Image, em } from '@mantine/core'
import { useMantineMediaQuery } from 'lib/mantineMediaQuery'
import SpiderChart from 'components/charts/SpiderChart'
import LinkedInIcon from 'components/svgs/linkedInIcon'
import GradientDivider from '../common/GradientDivider'
import GithubIcon from 'components/svgs/githubIcon'
import React, { useEffect, useRef } from 'react'
import MailIcon from 'components/svgs/mailIcon'
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
  const router = useRouter()

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
            mb={{
              base: 80,
              sm: 20,
            }}
          >
            <Text span className="font-tiempos font-medium">
              Software Engineer + Machine Learning Engineer
            </Text>{' '}
            <Text span className="font-tiempos font-thin">
              professionally trained in building data management tools and web solutions. Proficient
              in rendering graphics on the web and implementing light-weight AI into web services.
              Creates data visualizations and 3D graphics as a hobby.
            </Text>
          </Text>
          <Flex align={'center'} justify={'center'} mb={10} gap={'md'}>
            <Link href={'https://github.com/hunkim98'}>
              <Box w={25} h={25}>
                <GithubIcon color="white" fill="rgba(255,255,255,0.3)" />
              </Box>
            </Link>
            <Box
              w={30}
              h={30}
              className="cursor-pointer"
              onClick={() => {
                router.push('mailto:hunkim98@gmail.com')
              }}
            >
              <MailIcon color="white" fill="rgba(255,255,255,0.3)" />
            </Box>
            <Link href={'https://www.linkedin.com/in/donghun-kim-2b290a223/'}>
              <Box w={25} h={25}>
                <LinkedInIcon color="white" fill="rgba(255,255,255,0.3)" />
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Intro
