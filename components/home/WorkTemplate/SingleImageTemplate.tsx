import { BaseWorkTemplateProps } from './BaseWorkTemplate'
import { Flex, Grid, Image, Text } from '@mantine/core'
import React, { useMemo } from 'react'

interface SingleImageTemplateProps extends BaseWorkTemplateProps {
  index: number
}

const SingleImageTemplate: React.FC<SingleImageTemplateProps> = ({ work, index }) => {
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
  const thumbnail = useMemo(() => {
    return work.thumbnail
  }, [work.thumbnail])
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
      {index % 2 === 0 ? (
        <>
          <ImageTemplate thumbnail={thumbnail} />
          <TextTemplate title={work.title} excerpt={excerpt} paragraphs={paragraphs} />
        </>
      ) : (
        <>
          <TextTemplate title={work.title} excerpt={excerpt} paragraphs={paragraphs} />
          <ImageTemplate thumbnail={thumbnail} />
        </>
      )}
    </Grid>
  )
}

const ImageTemplate = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <Grid.Col span={6}>
      <Image src={thumbnail} w={'100%'} />
    </Grid.Col>
  )
}

const TextTemplate = ({
  title,
  excerpt,
  paragraphs,
}: {
  title: string
  excerpt: string
  paragraphs: string[]
}) => {
  return (
    <Grid.Col span={6}>
      <Flex direction={'column'} gap={'lg'}>
        <Text className="font-tiempos font-medium" size="22px">
          {title}
        </Text>
        <Text
          className="font-tiempos font-thin"
          size="18px"
          style={{
            lineHeight: 'normal',
            letterSpacing: 0.6,
          }}
        >
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
          {paragraphs[0]} ...
        </Text>
      </Flex>
    </Grid.Col>
  )
}

export default SingleImageTemplate
