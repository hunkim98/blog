import Intro from '../deprecated/intro'
import React from 'react'

interface Props {
  projectCategories: string[]
}

const Sidebar: React.FC<Props> = ({ projectCategories }) => {
  return (
    <div className="md:min-w-[300px] md:fixed md:max-w-[300px]">
      <Intro />
      <div className="mb-6 flex flex-wrap text-sm">
        {projectCategories.map((category, index) => {
          return (
            <a
              className="pr-2 opacity-30 hover:opacity-100 transition-opacity"
              key={index}
              href={`/category/projects/${category}`}
            >
              #{category}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
