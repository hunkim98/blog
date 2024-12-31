import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IconArrowLeft, IconArrowUp } from '@tabler/icons-react'
import { useMediaQuery, useViewportSize } from '@mantine/hooks'
import { Box, em, Flex, Text } from '@mantine/core'
import ProjectType from 'interfaces/project'
import { useRouter } from 'next/router'
import PostType from 'interfaces/post'

interface ContentNavbarProps {
  content: ProjectType | PostType
  isPost: boolean
}

const RotateDelayMs = 500

const ContentNavbar: React.FC<ContentNavbarProps> = ({ content, isPost }) => {
  const { width: screenWidth } = useViewportSize()
  const router = useRouter()
  const onClickLeft = useCallback(() => {
    if (isPost) {
      router.push({
        pathname: '/',
        query: {
          contentFromSlug: content.slug,
          contentFromType: 'post',
        },
      })
    } else {
      router.push({
        pathname: '/',
        query: {
          contentFromSlug: content.slug,
          contentFromType: 'project',
        },
      })
    }
  }, [isPost, content])
  const IsMantineMedium = useMediaQuery(`(max-width: ${em(992)})`)
  const [shouldTriggerRotate, setShouldTriggerRotate] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldTriggerRotate(true)
    }, RotateDelayMs)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Flex
      pos="fixed"
      h={56}
      // bg={'#000'}
      bg={'rgba(0,0,0,0.2)'}
      w={'100%'}
      className="z-50 text-white"
      align={'center'}
      pl={20}
      pr={20}
      style={{
        transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(10px)',
      }}
      justify={'space-between'}
    >
      <Box
        className="cursor-pointer transition-all"
        style={{
          transform: !shouldTriggerRotate ? 'rotate(0deg)' : 'rotate(-90deg)',
          transition: `transform ${RotateDelayMs}ms`,
        }}
        onClick={onClickLeft}
      >
        <IconArrowUp />
      </Box>
      <Flex
        gap={'sm'}
        pos={{
          base: 'relative',
          md: 'absolute',
        }}
        left={{
          base: 0,
          md: '50%',
        }}
        // w={'100%'}
        style={{
          // backgroundColor: '#f3f4f6',
          // textAlign: 'center',
          whiteSpace: 'nowrap',
          transform: IsMantineMedium ? '' : 'translate(-50%, 0)',
        }}
      >
        <Text
          className="truncate"
          maw={{
            base: screenWidth - 100,
            md: 'none',
          }}
        >
          <Text span className="w-fit">
            <Text span className="font-sans font-medium">
              {content.categories[0]}
            </Text>
            <Text span ml={5} mr={5}>
              {'|'}
            </Text>
            <Text span className="font-sans font-normal">
              {content.title}
            </Text>
          </Text>
        </Text>
      </Flex>
      <Box
        display={{
          base: 'none',
          md: 'block',
        }}
      >
        <Text className="font-sans">{isPost ? content.date : content.date.split('-')[0]}</Text>
      </Box>
    </Flex>
  )
}

export default ContentNavbar
