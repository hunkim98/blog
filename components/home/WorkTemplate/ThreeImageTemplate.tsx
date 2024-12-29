import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useViewProjectContext } from 'context/ViewProjectContext'
import { Image, Grid, Text, Flex, Box } from '@mantine/core'
import { BaseWorkTemplateProps } from './BaseWorkTemplate'
import { useInView } from 'react-intersection-observer'
import { useHover } from '@mantine/hooks'

interface ThreeImageTemplateProps extends BaseWorkTemplateProps {}

const ThreeImageTemplate: React.FC<ThreeImageTemplateProps> = ({ work }) => {
  const { setViewingProject } = useViewProjectContext()
  const thumbnail = useMemo(() => {
    return work.thumbnail
  }, [work.thumbnail])
  const isThumbnailGif = useMemo(() => {
    return thumbnail.includes('.gif')
  }, [thumbnail])
  const [isHovered, setIsHovered] = useState(false)
  const images = useMemo(() => {
    // use regex to find .png, .jpg, .jpeg, .gif, .svg in the content inside the bracket () but also include the [ and ! for markdown]
    const regex = /\[.*?\]\((.*?)\.(png|jpg|jpeg|gif|svg)\)/g
    // const regex = /\((.*?)\.(png|jpg|jpeg|gif|svg)\)/g
    const found = work.content.match(regex)
    if (found) {
      const images = found?.map((i) => i.split('(')[1].split(')')[0])
      const thumbnailIdx = images.map((i) => i.replace('(', '').replace(')', '')).indexOf(thumbnail)
      const altText = found
        ?.map((i) => i.split('[')[1].split(']')[0])
        .filter((item, idx) => idx !== thumbnailIdx)
      return images
        .map((i) => i.replace('(', '').replace(')', ''))
        .filter((image) => image !== thumbnail)
        .map((image, idx) => {
          return {
            url: image,
            altText: altText[idx],
          }
        })
    }
    return []
  }, [work.content, thumbnail])
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
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      textRef.current.addEventListener('mouseenter', () => {
        setIsHovered(true)
      })
      textRef.current.addEventListener('mouseleave', () => {
        setIsHovered(false)
      })
    }
    return () => {
      if (textRef.current) {
        textRef.current.removeEventListener('mouseenter', () => {
          setIsHovered(true)
        })
        textRef.current.removeEventListener('mouseleave', () => {
          setIsHovered(false)
        })
      }
    }
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.7,
  })
  const { hovered: isFirstImageHovered, ref: firstImageHover } = useHover()
  const { hovered: isSecondImageHovered, ref: secondImageHover } = useHover()

  useEffect(() => {
    if (inView) {
      setViewingProject(work)
    }
  }, [inView])

  return (
    // <ScrollAnimation animateIn="fadeIn" animateOnce>
    <Grid
      bg="black"
      p={15}
      c={'white'}
      w={'100%'}
      opacity={inView ? 1 : 0.2}
      style={{
        padding: '20px 0',

        // border: inView ? '1px solid #444' : '1px solid black',
        transition: 'all 0.3s ease-in-out',
      }}
      ref={ref}
    >
      {/* Default is 12 */}
      <Grid.Col span={7}>
        <Flex gap={'md'} direction={'column'}>
          <Image src={thumbnail} w={'100%'} />
          <Text className="font-tiempos font-medium" size="22px">
            {work.title}
          </Text>
          <Text
            className="font-sans"
            size="15px"
            style={{
              lineHeight: 'normal',
              letterSpacing: -0.1,
            }}
            opacity={0.5}
          >
            {/* {paragraphs[0]} */}
            {excerpt}
          </Text>
          {/* <Text
              className="font-sans "
              size="15px"
              style={{
                lineHeight: 'normal',
                letterSpacing: 0.6,
              }}
              opacity={0.5}
            >
              {paragraphs[0]}
            </Text> */}
        </Flex>
      </Grid.Col>
      <Grid.Col
        span={5}
        // opacity={isHovered ? 1 : 0.2}
        // style={{
        //   transition: 'opacity 0.3s ease-in-out',
        // }}
        ref={textRef}
      >
        <Flex gap={'md'} direction={'column'}>
          <Box ref={firstImageHover} pos={'relative'}>
            <Text
              className="font-sans font-normal"
              pos={'absolute'}
              opacity={isFirstImageHovered ? 0 : 1}
              top={'50%'}
              // left={'50%'}
              w={'100%'}
              style={{
                transform: 'translate(0%, -50%)',
                textAlign: 'center',
              }}
            >
              {images[0].altText}
            </Text>
            <Image
              src={images[0].url}
              w={'100%'}
              opacity={isFirstImageHovered ? 1 : 0.3}
              style={{
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
          </Box>
          <Box ref={secondImageHover} pos={'relative'}>
            <Text
              className="font-san font-normal"
              pos={'absolute'}
              top={'50%'}
              opacity={isSecondImageHovered ? 0 : 1}
              w={'100%'}
              style={{
                transform: 'translate(0%, -50%)',
                textAlign: 'center',
              }}
            >
              {images[1].altText}
            </Text>
            <Image
              src={images[1].url}
              w={'100%'}
              opacity={isSecondImageHovered ? 1 : 0.3}
              style={{
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
          </Box>
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
    // </ScrollAnimation>
  )
}

export default ThreeImageTemplate
