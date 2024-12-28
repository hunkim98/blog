import { BaseWorkTemplateProps } from './BaseWorkTemplate'
import { Image, Grid, Text, Flex } from '@mantine/core'
import React, { useMemo } from 'react'

interface WorkTemplateOneProps extends BaseWorkTemplateProps {}

const WorkTemplateOne: React.FC<WorkTemplateOneProps> = ({ work }) => {
  const images = useMemo(() => {
    // use regex to find .png, .jpg, .jpeg, .gif, .svg in the content inside the bracket ()
    const regex = /\((.*?)\.(png|jpg|jpeg|gif|svg)\)/g
    const found = work.content.match(regex)
    if (found) {
      return found.map((i) => i.replace('(', '').replace(')', ''))
    }
    return []
  }, [work.content])
  const paragraphs = useMemo(() => {
    // find paragraphs that do not start with ! or [ but has a new line before it
    const regex = /(?<=\n)(?![[!])(.*?)(?=\n)/g
    const found = work.content.match(regex)
    if (found) {
      return found.filter((i) => i.length > 0)
    }
    return []
  }, [work.content])
  const excerpt = useMemo(() => {
    return work.excerpt
  }, [work.excerpt])

  return (
    <Grid
      bg="black"
      p={15}
      c={'white'}
      w={'100%'}
      style={{
        padding: '20px 0',
      }}
    >
      {/* Default is 12 */}
      <Grid.Col span={7}>
        <Flex gap={'md'} direction={'column'}>
          <Image src={images[0]} w={'100%'} />
          <Text className="font-tiempos font-medium" size="22px">
            {work.title}
          </Text>
          <Text
            className="font-tiempos font-thin"
            size="18px"
            style={{
              lineHeight: 'normal',
              letterSpacing: 0.6,
            }}
          >
            {/* {paragraphs[0]} */}
            {excerpt}
          </Text>
          <Text
            className="font-sans "
            size="15px"
            style={{
              lineHeight: 'normal',
              letterSpacing: 0.6,
            }}
            opacity={0.5}
          >
            {/* {paragraphs[0]} */}
            {paragraphs[0]} ...
          </Text>
        </Flex>
      </Grid.Col>
      <Grid.Col span={5}>
        <Flex gap={'md'} direction={'column'}>
          <Image src={images[1]} w={'100%'} />
          <Image src={images[2]} w={'100%'} />
        </Flex>
      </Grid.Col>
      {/* <Grid.Col span={3.5}>
        <Flex gap={'md'} direction={'column'}>
          <Text
            className="font-tiempos font-thin"
            size="15px"
            style={{
              lineHeight: 'normal',
              letterSpacing: 0.6,
            }}
          >
            {paragraphs[paragraphs.length - 1]}
          </Text>
        </Flex>
      </Grid.Col> */}
    </Grid>
  )
}

export default WorkTemplateOne
