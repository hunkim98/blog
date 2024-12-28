import { Box, Flex, Text, Title, Image } from '@mantine/core'
import GradientDivider from './common/GradientDivider'
import SocialIcon from './social-icons'
import { useRouter } from 'next/router'
import NameSvg from './svgs/name'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const router = useRouter()
  return (
    <Flex
      gap={{
        xs: 'xs',
        md: 'md',
      }}
      direction={'row'}
      className="mt-16 mb-[22px] md:mb-[22px] select-none"
      align={'center'}
    >
      <Flex direction={'column'} align={'center'} w={'100%'}>
        <Flex w="100%" maw={600} direction={'column'} align={'center'}>
          <Image src={'/assets/profile/temp_datavis.png'} w={400} mb={45} />
          <NameSvg fill="white" />
          {/* <Box w="80%" mt={18} mb={18}>
            <GradientDivider fromColor="rgba(255,255,255,1)" toColor="rgba(255,255,255,0)" />
          </Box> */}
          <Text
            mt={25}
            className="text-center font-tiempos font-thin"
            c={'white'}
            size={'16px'}
            style={{
              lineHeight: 'normal',
              letterSpacing: 0.6,
            }}
            maw={480}
            mb={20}
          >
            <Text span className="font-tiempos font-medium">
              Software Engineer + Data Scientist
            </Text>{' '}
            professionally trained to build data management tools on the web. Producer of data
            visualizations and 3D graphics as a hobby.
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

export default NavBar
