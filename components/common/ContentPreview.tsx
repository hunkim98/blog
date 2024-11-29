import { Badge, Box, Center, Text } from '@mantine/core'
import ProjectType from 'interfaces/project'
import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import PostType from 'interfaces/post'
import Image from 'next/image'
import Link from 'next/link'

interface ContentPreviewProps {
  content: PostType | ProjectType
  type: 'post' | 'project'
}

const ContentPreview: React.FC<ContentPreviewProps> = ({ content, type }) => {
  const router = useRouter()
  const onItemClick = useCallback(() => {
    if (type === 'post') {
      router.push(`/posts/${content.slug}`)
    } else if (type === 'project') {
      router.push(`/projects/${content.slug}`)
    }
  }, [])
  return (
    <Box>
      <Box w={300} h={200} className="relative cursor-pointer rounded-md overflow-hidden">
        <Image
          onClick={onItemClick}
          src={content.thumbnail}
          alt={content.slug}
          fill={true}
          style={{
            objectFit: 'cover',
          }}
        />
        {/* <Badge pos="absolute">{content.date}</Badge> */}
        {/* <Box pos="absolute" className="backdrop-blur-sm">
          <Box >
            <Text opacity={0.6} size="xs" fw={'bold'}>
              {type === 'post' ? 'Blog post' : 'Project'}
            </Text>
          </Box>
          <Text opacity={0.6} size="xs">
            Date: {content.date}
          </Text>
        </Box> */}
      </Box>

      <Text opacity={0.6} ta="center" size="xs">
        {content.title}
      </Text>
    </Box>
  )
}

export default ContentPreview
