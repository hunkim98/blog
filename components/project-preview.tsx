import type Author from '../interfaces/author'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import { Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  date: string
  excerpt: string
  thumbnail: string
  slug: string
}

const ProjectPreview = ({ title, date, excerpt, slug, thumbnail }: Props) => {
  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]">
      <div className="bg-white rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md h-[420px] overflow-hidden">
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={thumbnail} />
        </div>
        <Title className="text-xl mb-3 leading-snug font-bold px-5">
          <div className="font-bold">{title}</div>
        </Title>
        <div className="text-sm mb-4 opacity-50 px-5">
          <DateFormatter dateString={date} />
        </div>

        <p className="text-sm leading-relaxed mb-4 opacity-40 px-5 line-clamp-3">{excerpt}</p>
        <div className="bottom-0 h-[100px] absolute bg-gradient-to-t from-white to-transparent w-full"></div>
      </div>
    </Link>
  )
}

export default ProjectPreview
