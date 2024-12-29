import { BaseWorkTemplateProps } from './BaseWorkTemplate'
import SingleImageTemplate from './SingleImageTemplate'
import ScrollAnimation from 'react-animate-on-scroll'
import ThreeImageTemplate from './ThreeImageTemplate'
import React, { useMemo } from 'react'

interface WorkTemplateComponentProps extends BaseWorkTemplateProps {
  index: number
}

const WorkTemplateComponent: React.FC<WorkTemplateComponentProps> = ({ work, index }) => {
  const images = useMemo(() => {
    // use regex to find .png, .jpg, .jpeg, .gif, .svg in the content inside the bracket ()
    const regex = /\((.*?)\.(png|jpg|jpeg|gif|svg)\)/g
    const found = work.content.match(regex)
    if (found) {
      return found.map((i) => i.replace('(', '').replace(')', ''))
    }
    return []
  }, [work.content])
  const paragraphs = useMemo(() => {
    // find paragraphs that do not start with ! or [ but has a new line before it
    const regex = /(?<=\n)(?![[!])(.*?)(?=\n)/g
    const found = work.content.match(regex)
    if (found) {
      return found.filter((i) => i.length > 0)
    }
    return []
  }, [work.content])
  const excerpt = useMemo(() => {
    return work.excerpt
  }, [work.excerpt])
  const thumbnail = useMemo(() => {
    return work.thumbnail
  }, [work.thumbnail])
  if (images.length >= 3) {
    return <ThreeImageTemplate work={work} />
  }
  return <SingleImageTemplate work={work} index={index} />
}

export default WorkTemplateComponent
