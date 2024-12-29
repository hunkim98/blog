import { useViewProjectContext } from 'context/ViewProjectContext'
import React, { useEffect, useState } from 'react'
import { Box, Flex, Text } from '@mantine/core'

interface HomeNavbarProps {
  appearFrom: number
  disappearFrom: number
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ appearFrom }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false)
  const { viewingProject } = useViewProjectContext()
  useEffect(() => {
    // listen to scrolltop of body
    const handleScroll = () => {
      if (window.scrollY > appearFrom) {
        // show navbar
        setIsNavbarVisible(true)
      } else {
        // hide navbar
        setIsNavbarVisible(false)
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
        <Text className="font-sans">{viewingProject.categories[0]}</Text>
        <Text>{'|'}</Text>
        <Text className="font-sans font-thin">{viewingProject.title}</Text>
      </Flex>
      <Box>
        <Text>{viewingProject.date}</Text>
      </Box>
    </Flex>
  )
}

export default HomeNavbar
