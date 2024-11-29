import ProjectType from 'interfaces/project'
import { Flex, Text } from '@mantine/core'
import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import PostType from 'interfaces/post'
import Link from 'next/link'

interface ContentListItemProps {
  content: PostType | ProjectType
  type: 'post' | 'project'
}

const ContentListItem: React.FC<ContentListItemProps> = ({ content, type }) => {
  const router = useRouter()
  const onClickItem = useCallback(() => {
    if (type === 'post') {
      router.push(`/posts/${content.slug}`)
    } else if (type === 'project') {
      router.push(`/projects/${content.slug}`)
    }
  }, [type, content])
  return (
    <Flex className="hover:bg-[#d6d6d6] transition-all cursor-pointer" onClick={onClickItem}>
      <Text size={'sm'} className="truncate">
        <Text fs="oblique" mr={5} span>
          {content.date}
        </Text>
        <Text span>-</Text>
        <Text ml={5} span>
          {content.title}
        </Text>
      </Text>
    </Flex>
  )
}

export default ContentListItem
