import { useViewProjectContext } from 'context/ViewProjectContext'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks'

interface HomeNavbarProps {
  appearFrom: number
  disappearFrom: number
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ appearFrom, disappearFrom }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false)
  const { viewingProject } = useViewProjectContext()
  useEffect(() => {
    // listen to scrolltop of body
    const handleScroll = () => {
      if (window.scrollY < appearFrom) {
        setIsNavbarVisible(false)
      } else if (window.scrollY > appearFrom && window.scrollY < disappearFrom) {
        // show navbar
        setIsNavbarVisible(true)
      } else if (window.scrollY > disappearFrom) {
        // hide navbar
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

  if (!viewingProject) return null

  return (
    <Flex
      pos="fixed"
      h={56}
      bg={'#000'}
      w={'100%'}
      className="z-50"
      align={'center'}
      pl={20}
      pr={20}
      top={isNavbarVisible ? 0 : -appearFrom}
      style={{
        transition: 'top 0.3s ease-in-out',
      }}
      justify={'space-between'}
    >
      <Box></Box>
      <Flex
        gap={'sm'}
        pos="absolute"
        left={'50%'}
        style={{
          transform: 'translate(-50%, 0)',
        }}
      >
        <Text className="font-sans font-medium">{viewingProject.categories[0]}</Text>
        <Text>{'|'}</Text>
        <Text className="font-sans font-normal">{viewingProject.title}</Text>
      </Flex>
      <Box>
        <Text className="font-tiempos">{viewingProject.date.split('-')[0]}</Text>
      </Box>
    </Flex>
  )
}

export default HomeNavbar
