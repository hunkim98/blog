import { useHomeViewContentContext } from 'context/ViewProjectContext'
import SimplePostTemplate from './PostTemplate/SimplePostTemplate'
import GradientDivider from 'components/common/GradientDivider'
import { Box, Flex, Grid, Text } from '@mantine/core'
import { useResizeObserver } from '@mantine/hooks'
import React, { useEffect, useMemo } from 'react'
import PostType from 'interfaces/post'

interface PostsProps {
  allPosts: PostType[]
}

const PostsMarginTop = 150

export const POSTS_CONTAINER_ID = 'posts-container'

const Posts: React.FC<PostsProps> = ({ allPosts }) => {
  const { setPostContentHeight } = useHomeViewContentContext()
  const postsSorted = useMemo(() => {
    const sortedItems = allPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedItems
  }, [allPosts])
  const [ref, rect] = useResizeObserver()
  useEffect(() => {
    if (rect) {
      setPostContentHeight(rect.height + PostsMarginTop)
    }
  }, [rect])
  return (
    <Box mt={PostsMarginTop} mb={200} ref={ref} id={POSTS_CONTAINER_ID}>
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
          Writings
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
