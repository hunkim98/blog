import { contentIdGenerator } from 'lib/contentIdGenerator'
import { BasePostTemplate } from './BasePostTemplate'
import { em, Flex, Grid, Text } from '@mantine/core'
import React, { useCallback, useMemo } from 'react'
import { useHover } from '@mantine/hooks'
import { useRouter } from 'next/router'

interface SimplePostTemplateProps extends BasePostTemplate {}

const SimplePostTemplate: React.FC<SimplePostTemplateProps> = ({ post }) => {
  const router = useRouter()
  const createdOffsetString = useMemo(() => {
    const createdDayDiff = Math.floor(
      (new Date().getTime() - new Date(post.date).getTime()) / (1000 * 60 * 60 * 24)
    )
    const years = Math.floor(createdDayDiff / 365)
    const months = Math.floor(createdDayDiff / 30)
    const weeks = Math.floor(createdDayDiff / 7)
    const days = createdDayDiff

    let output = `${days} days ago`
    if (years > 0) {
      if (years === 1) {
        output = `${years} year ago`
      } else {
        output = `${years} years ago`
      }
    } else if (months > 0) {
      output = `${months} months ago`
    } else if (weeks > 0) {
      output = `${weeks} weeks ago`
    }
    return output
  }, [post])
  const { ref: hoverRef, hovered } = useHover()

  const onClickPost = useCallback(() => {
    router.push(`/posts/${post.slug}`)
  }, [post, router])

  return (
    <Grid.Col
      span={{
        base: 12,
        xs: 12,
        sm: 6,
      }}
      id={contentIdGenerator({
        slug: post.slug,
        type: 'post',
      })}
      key={post.title}
      ref={hoverRef}
    >
      <Flex direction={'column'}>
        <Text
          className="font-tiempos font-medium cursor-pointer"
          size="18px"
          onClick={onClickPost}
          style={{
            lineHeight: 'normal',
          }}
        >
          {post.title}
        </Text>
        <Text
          onClick={onClickPost}
          className="font-sans cursor-pointer"
          size="15px"
          mt={em(8)}
          style={{
            lineHeight: 'normal',
            letterSpacing: -0.1,
            transition: 'all 0.3s ease-in-out',
          }}
          lineClamp={2}
          opacity={hovered ? 1 : 0.5}
        >
          {post.excerpt}
        </Text>
        <Text
          className="font-sans"
          size="15px"
          mt={em(8)}
          mb={em(8)}
          style={{
            lineHeight: 'normal',
            letterSpacing: -0.1,
          }}
          opacity={0.5}
        >
          {createdOffsetString}
        </Text>
      </Flex>
    </Grid.Col>
  )
}

export default SimplePostTemplate
