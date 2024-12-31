import markdownStyles from './markdown-styles.module.css'
import ProjectComponents from '_projects/components'
import PostComponents from '_posts/components'
import { MDXRemote } from 'next-mdx-remote'
import 'katex/dist/katex.min.css'
import React from 'react'

const Components = {
  ...ProjectComponents,
  ...PostComponents,
}

interface ContentBodyProps {
  content: any
  isMdx: boolean
}

const ContentBody: React.FC<ContentBodyProps> = ({ content, isMdx }) => {
  return (
    <div className="max-w-3xl mx-auto">
      {isMdx ? (
        <div className={markdownStyles['markdown']}>
          <MDXRemote {...(content as any)} components={Components} />
        </div>
      ) : (
        <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  )
}

export default ContentBody
