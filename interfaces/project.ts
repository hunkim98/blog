type ProjectType = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  categories: string[]
  keyword: string
  coverImg: string
  prevPath?: string
  nextPath?: string
  prevTitle?: string
  nextTitle?: string
  isMdx?: boolean
}

export default ProjectType
