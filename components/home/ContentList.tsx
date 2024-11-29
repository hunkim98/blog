import ContentListItem from './ContentListItem'
import Project from '../../interfaces/project'
import { Flex, Text } from '@mantine/core'
import Post from '../../interfaces/post'
import React, { useMemo } from 'react'
import Link from 'next/link'

interface ContentProps {
  allPosts: Post[]
  allProjects: Project[]
}
const MAX_ITEMS = 4

const ContentList: React.FC<ContentProps> = ({ allPosts, allProjects }) => {
  const postsProjectsSorted = useMemo(() => {
    const allPostsProjects = [
      ...allPosts.map((i) => ({
        ...i,
        type: 'post',
      })),
      //   ...allProjects.map((i) => ({
      //     ...i,
      //     type: 'project',
      //   })),
    ]
    const sortedItems = allPostsProjects.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedItems.slice(0, MAX_ITEMS)
  }, [allPosts, allProjects, MAX_ITEMS])

  return (
    <Flex direction={'column'}>
      <Flex direction={'column'}>
        {postsProjectsSorted.map((content) => (
          <ContentListItem
            key={content.title}
            content={content}
            type={content.type as 'project' | 'post'}
          />
        ))}
      </Flex>
      {/* <Text> */}
      <Link href="/posts">
        <Text fs={'oblique'} span opacity={0.5} size="sm">
          More Posts..
        </Text>
      </Link>
      {/* </Text> */}
    </Flex>
  )
}

export default ContentList
