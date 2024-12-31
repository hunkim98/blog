import type Author from '../../../interfaces/author'
import DateFormatter from '../../date-formatter'
import CoverImage from '../cover-image'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  date: string
  excerpt: string
  author: Author
  slug: string
  thumbnail: string
}

const PostPreview = ({ title, date, excerpt, author, slug, thumbnail }: Props) => {
  return (
    <div className="flex sm:flex-row flex-col">
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <img
          src={thumbnail}
          alt={`Cover Image for ${title}`}
          className="sm:min-h-full sm:max-h-full
          mb-5 sm:mr-5
          sm:min-w-[200px] sm:max-w-[200px]
          max-w-full min-w-0
          object-cover min-h-[200px] max-h-[200px]
          w-full rounded-lg
          cursor-pointer hover:scale-[1.01] transition hover:shadow-lg duration-200"
        />
      </Link>
      <div className="flex flex-col">
        <h3 className="text-2xl mb-3 leading-snug font-bold">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <div className="hover:underline">{title}</div>
          </Link>
        </h3>
        <div className="text-lg mb-4 opacity-50">
          {/* <div>Written by {author.name}</div> */}
          <DateFormatter dateString={date} />
        </div>
        <p className="text-md leading-relaxed mb-4 opacity-40 line-clamp-5">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
