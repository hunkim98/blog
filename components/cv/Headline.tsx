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
        I am a software engineer with professional experience in developing{' '}
        <Text span fw="bold">
          web applications{' '}
        </Text>
        using Typescript. I specialize in rendering{' '}
        <Text span fw="bold">
          graphics
        </Text>{' '}
        on the web and have a proven track record of managing an open-source{' '}
        <a href="https://github.com/hunkim98/dotting">
          <u>
            <b>pixel-art editor package</b>
          </u>
        </a>{' '}
        on NPM.
      </Text>
      <Text size="md">
        I am also skilled in developing{' '}
        <Text span fw="bold">
          machine learning
        </Text>{' '}
        models using Python and have worked as a Research Assistant in a{' '}
        <Text span fw="bold">
          Human-Computer Interaction
        </Text>{' '}
        Lab, where I contributed to the development of Human-AI collaborative tools designed for
        designers.
      </Text>
    </Flex>
  )
}

export default Headline
