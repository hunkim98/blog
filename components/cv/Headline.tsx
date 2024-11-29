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
        I am experienced in creating real-time{' '}
        <Text span fw="bold">
          data visualizations{' '}
        </Text>
        using D3.js and P5.js. I specialize in rendering{' '}
        <Text span fw="bold">
          graphics
        </Text>{' '}
        in the web and have a proven track record managing an open-source{' '}
        <a href="https://github.com/hunkim98/dotting">
          <u>
            <b>pixel-art editor package</b>
          </u>
        </a>{' '}
        on NPM.
      </Text>
      <Text size="md">
        I am also experienced in creating{' '}
        <Text span fw="bold">
          machine learning
        </Text>{' '}
        models through Python and have worked as a Research Assistant at a{' '}
        <Text span fw="bold">
          Human-Computer Interaction
        </Text>{' '}
        Lab to develop Human-AI collaborative tools targeted on designers.
      </Text>
    </Flex>
  )
}

export default Headline
