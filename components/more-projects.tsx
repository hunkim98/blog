import type Project from '../interfaces/project'
import PostPreview from './posts/post-preview'
import ProjectPreview from './project-preview'
import React from 'react'

type Props = {
  projects: Project[]
  category?: string
  isTitleShown?: boolean
}

const MoreProjects = ({ projects, category, isTitleShown }: Props) => {
  //this shows on home
  return (
    <section className="">
      {(isTitleShown || category) && (
        <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:mt-[70px]">
          Projects {category && `on #${category}`}
        </h2>
      )}
      <div className="grid md:grid-cols-2 gird-cols-1 md:gap-x-10 gap-y-16 md:gap-y-16 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            date={project.date}
            slug={project.slug}
            excerpt={project.excerpt}
            thumbnail={project.thumbnail}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreProjects
