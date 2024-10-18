import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  author: Author
  excerpt: string
  content: string
  categories: string[]
  keyword: string
  thumbnail: string
  prevPath?: string
  nextPath?: string
  prevTitle?: string
  nextTitle?: string
  isMdx?: boolean
}

export default PostType
