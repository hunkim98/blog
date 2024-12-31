import { BaseWorkTemplateProps } from './BaseWorkTemplate'
import SingleImageTemplate from './SingleImageTemplate'
import ScrollAnimation from 'react-animate-on-scroll'
import MultiImageTemplate from './MultiImageTemplate'
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

  if (images.length >= 3) {
    return <MultiImageTemplate work={work} />
  } else {
    return null
  }
  // return <SingleImageTemplate work={work} index={index} />
}

export default WorkTemplateComponent
