import ContentPreview from 'components/common/ContentPreview'
import { Box, Center, Flex, Text } from '@mantine/core'
import Project from '../../interfaces/project'
import Post from '../../interfaces/post'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import Link from 'next/link'

const MAX_ITEMS = 8

interface ContentCarouselProps {
  allPosts: Post[]
  allProjects: Project[]
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ allPosts, allProjects }) => {
  const postsProjectsSorted = useMemo(() => {
    const allPostsProjects = [
      // ...allPosts.map((i) => ({
      //   ...i,
      //   type: 'post',
      // })),
      ...allProjects.map((i) => ({
        ...i,
        type: 'project',
      })),
    ]
    const sortedItems = allPostsProjects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedItems.slice(0, MAX_ITEMS)
  }, [allPosts, allProjects, MAX_ITEMS])

  return (
    <>
      <Flex justify={'space-between'}>
        {/* <Text>
          <Link href="/projects">
            <Text span opacity={0.5} size="sm">
              Projects
            </Text>
          </Link>
        </Text> */}
        {postsProjectsSorted.length > 0 && (
          <Text fs="oblique" span opacity={0.5} size="sm" className="md:visible hidden">
            updated on {postsProjectsSorted[0].date}
          </Text>
        )}
      </Flex>
      <Box className="rounded-md" pos="relative">
        <Flex
          style={{
            width: '100%', // Ensure it doesn’t exceed its container's width
            maxWidth: '100%', // Prevent horizontal overflow
            boxSizing: 'border-box', // Include padding and border in dimensions
            overflowX: 'auto', // Allow horizontal scrolling
          }}
        >
          <Box>
            <Flex gap={'md'} className="relative">
              {postsProjectsSorted.map((content) => (
                <ContentPreview
                  key={content.title}
                  content={content}
                  type={content.type as 'post' | 'project'}
                />
              ))}
              {[...allPosts, ...allProjects].length > MAX_ITEMS && (
                <Link href="/projects">
                  <Box
                    w={100}
                    h={200}
                    className="bg-gradient-to-r from-gray-50 to-transparent rounded-lg"
                  >
                    <Center h="100%">
                      <Text pr={6} ml={6} span opacity={0.5} size="xs">
                        More..{' '}
                      </Text>
                    </Center>
                  </Box>
                </Link>
              )}
            </Flex>
          </Box>
        </Flex>
        {/* <Box
          pos="absolute"
          right={0}
          top={0}
          h={'100%'}
          style={{
            transform: 'translateX(-20px)',
          }}
          // h={'100%'}
          w={100}
          className="bg-gradient-to-l from-gray-50 to-transparent"
        >
          hihih
        </Box> */}
      </Box>
    </>
  )
}

export default ContentCarousel
