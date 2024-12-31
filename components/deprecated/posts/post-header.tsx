import type Author from '../../../interfaces/author'
import DateFormatter from '../../date-formatter'
import CoverImage from '../cover-image'
import { Text } from '@mantine/core'
import React from 'react'

type Props = {
  title: string
  date: string
  author: Author
}

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>
      <Text>{title}</Text>
      {/* Currently planning to create a random svg for each md */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-lg">
          <div>Written by {author.name}</div>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
