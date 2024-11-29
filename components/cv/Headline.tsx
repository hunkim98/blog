import { Text } from '@mantine/core'
import React from 'react'

interface HeadlineProps {}

const Headline: React.FC<HeadlineProps> = () => {
  return (
    <Text opacity={0.5}>
      I am experienced in creating real-time web-deployed <b>data visualizations </b>
      using D3.js and P5.js. Specializes in rendering <b>graphics</b> with HTML Canvas and has a
      proven track record managing an open-source{' '}
      <a href="https://github.com/hunkim98/dotting">
        <u>
          <b>pixel-art editor package</b>
        </u>
      </a>{' '}
      on NPM. Experienced in data collection and preprocessing with Python, with expertise in
      codebase management and CI/CD pipelines using GitHub.
    </Text>
  )
}

export default Headline
