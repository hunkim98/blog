import { Text } from '@mantine/core'
import React from 'react'

interface ContentTagsProps {
  tags: string[]
  onTagClick: (tag: string) => void
  className?: string
}

const ContentTags: React.FC<ContentTagsProps> = ({ className, tags, onTagClick }) => {
  return (
    <Text className="font-sans" mt={20}>
      Category:{' '}
      {tags.map((category, index) => {
        const isLastIndex = index === tags.length - 1
        let tagText = `${category}`
        if (!isLastIndex) {
          tagText += ', '
        }
        return (
          <Text
            span
            className="font-sans"
            key={index}
            onClick={() => {
              onTagClick(category)
            }}
          >
            {tagText}{' '}
          </Text>
        )
      })}
    </Text>
  )
}

export default ContentTags
