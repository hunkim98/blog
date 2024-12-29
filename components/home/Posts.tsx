import SimplePostTemplate from './PostTemplate/SimplePostTemplate'
import GradientDivider from 'components/common/GradientDivider'
import { Box, Flex, Grid, Text } from '@mantine/core'
import PostType from 'interfaces/post'
import React, { useMemo } from 'react'

interface PostsProps {
  allPosts: PostType[]
}

const Posts: React.FC<PostsProps> = ({ allPosts }) => {
  const postsSorted = useMemo(() => {
    const sortedItems = allPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedItems
  }, [allPosts])
  return (
    <Box mt={100} mb={500}>
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
    </Box>
  )
}

export default Posts
