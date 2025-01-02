import { useHomeViewContentContext } from 'context/ViewProjectContext'
import SimplePostTemplate from './PostTemplate/SimplePostTemplate'
import GradientDivider from 'components/common/GradientDivider'
import { Box, Flex, Grid, Text } from '@mantine/core'
import { useResizeObserver } from '@mantine/hooks'
import React, { useEffect, useMemo } from 'react'
import PostType from 'interfaces/post'

interface PostsProps {
  posts: PostType[]
  containerId: string
}

const PostsMarginTop = 200

const Posts: React.FC<PostsProps> = ({ posts, containerId }) => {
  const { setPostContentHeight, filterCategory } = useHomeViewContentContext()
  const postsSorted = useMemo(() => {
    const sortedItems = posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedItems
  }, [posts])
  const [ref, rect] = useResizeObserver()
  useEffect(() => {
    if (rect) {
      setPostContentHeight(rect.height + PostsMarginTop)
    }
  }, [rect])
  if (postsSorted.length === 0) {
    return null
  }
  return (
    <Box mt={PostsMarginTop} mb={200} ref={ref} id={containerId}>
      <GradientDivider fromColor="rgba(255,255,255,1)" toColor="rgba(255,255,255,0)" />
      <Flex direction={'column'}>
        <Text
          className="font-sans font-bold"
          c={'white'}
          size={'20px'}
          style={{
            letterSpacing: -0.6,
          }}
          // bg="black"
          p={10}
        >
          <Text
            span
            className="font-sans font-bold"
            size={'20px'}
            style={{
              letterSpacing: -0.6,
            }}
          >
            Writings
          </Text>
          {filterCategory && (
            <Text className="font-sans font-thin ml-2" size={'sm'} span>
              (feat: {filterCategory})
            </Text>
          )}
        </Text>
        <Grid p={10} gutter={'lg'}>
          {postsSorted.map((post) => {
            return <SimplePostTemplate key={post.title} post={post} />
          })}
        </Grid>
      </Flex>
      <GradientDivider fromColor="rgba(255,255,255,1)" toColor="rgba(255,255,255,0)" />
    </Box>
  )
}

export default Posts
