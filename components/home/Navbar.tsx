import { useHomeViewContentContext } from 'context/ViewProjectContext'
import React, { useEffect, useMemo, useState } from 'react'
import { Box, Flex, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks'

interface HomeNavbarProps {
  appearFrom: number
  disappearFrom: number
  contentPerScroll: Array<{
    scrollTop: number
    content: string
  }>
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ appearFrom, contentPerScroll }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false)
  const { viewingProject } = useHomeViewContentContext()
  const [windowScrollY, setWindowScrollY] = useState(0)
  useEffect(() => {
    // listen to scrolltop of body
    const handleScroll = () => {
      setWindowScrollY(window.scrollY)
      if (window.scrollY < appearFrom) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }
    }
    if (appearFrom > 0) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [appearFrom])
  const shouldShowContentPerScroll = useMemo(() => {
    const minScrollTop = contentPerScroll[0].scrollTop
    if (windowScrollY < minScrollTop) {
      return false
    } else {
      return true
    }
  }, [windowScrollY, contentPerScroll])
  const currentShowContentIndex = useMemo(() => {
    if (shouldShowContentPerScroll) {
      let index = 0
      for (let i = 0; i < contentPerScroll.length; i++) {
        if (windowScrollY > contentPerScroll[i].scrollTop) {
          // index = i
          if (i < contentPerScroll.length - 1) {
            if (windowScrollY < contentPerScroll[i + 1].scrollTop) {
              index = i
              break
            }
          } else {
            index = i
            break
          }
        }
      }
      return index
    }
    return 0
  }, [windowScrollY, contentPerScroll, shouldShowContentPerScroll])

  return (
    <Flex
      pos="fixed"
      h={56}
      // bg={'#000'}
      bg={'rgba(0,0,0,0.2)'}
      w={'100%'}
      className="z-50"
      align={'center'}
      pl={20}
      pr={20}
      // display={isNavbarVisible ? 'flex' : 'none'}
      opacity={isNavbarVisible ? 1 : 0}
      top={isNavbarVisible ? 0 : -appearFrom}
      style={{
        transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(10px)',
      }}
      justify={'space-between'}
    >
      <Box></Box>
      <Flex
        gap={'sm'}
        pos="absolute"
        left={'50%'}
        // w={'100%'}
        style={{
          // backgroundColor: '#f3f4f6',
          // textAlign: 'center',
          whiteSpace: 'nowrap',
          transform: 'translate(-50%, 0)',
        }}
      >
        {viewingProject && !shouldShowContentPerScroll && (
          <Flex gap={4} flex={1}>
            <Text className="font-sans font-medium">{viewingProject.categories[0]}</Text>
            <Text>{'|'}</Text>
            <Text className="font-sans font-normal">{viewingProject.title}</Text>
          </Flex>
        )}
        {shouldShowContentPerScroll && (
          <Text className="font-sans font-normal">
            {contentPerScroll[currentShowContentIndex].content}
          </Text>
        )}
      </Flex>
      <Box
        display={{
          base: 'none',
          md: 'block',
        }}
      >
        {viewingProject && !shouldShowContentPerScroll && (
          <Text className="font-sans">{viewingProject.date.split('-')[0]}</Text>
        )}
      </Box>
    </Flex>
  )
}

export default HomeNavbar
