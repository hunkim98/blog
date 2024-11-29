import { Flex, Text } from '@mantine/core'
import React from 'react'

interface HeadlineProps {}

const Headline: React.FC<HeadlineProps> = () => {
  return (
    <Flex
      maw={650}
      direction={{
        // default: 'column',
        // xs: 'row',
        base: 'column',
      }}
      //   gap={{
      //     xs: 20,
      //     base: 30,
      //   }}
      gap={30}
      c="#454545"
    >
      <Text size="md">
        <Text span opacity={0.6}>
          I am a software engineer with professional experience in developing{' '}
        </Text>
        <Text span fw="normal">
          web applications{' '}
        </Text>
        <Text span opacity={0.6}>
          using Typescript. I specialize in rendering{' '}
        </Text>
        <Text span fw="normal">
          graphics
        </Text>{' '}
        <Text span opacity={0.6}>
          on the web and have a proven track record of managing an open-source{' '}
        </Text>
        <a href="https://github.com/hunkim98/dotting">
          <u>
            <b>pixel-art editor package</b>
          </u>
        </a>{' '}
        <Text span opacity={0.6}>
          on NPM.
        </Text>
      </Text>
      <Text size="md">
        <Text span opacity={0.6}>
          I also have experience in deploying{' '}
        </Text>
        <Text span>machine learning</Text>{' '}
        <Text span opacity={0.6}>
          models using Python and deploying them on the web for global organizations.{' '}
        </Text>
        <Text opacity={0.6} span>
          Having worked as a research assistant at Seoul National University{' '}
        </Text>
        <Text span>Human-Computer Interaction</Text>{' '}
        <Text span opacity={0.6}>
          Lab, I am interested in integrating AI technologies that assist human creativity and work
          efficiency.
        </Text>
      </Text>
    </Flex>
  )
}

export default Headline
