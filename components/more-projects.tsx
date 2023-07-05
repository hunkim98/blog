import React from "react";
import PostPreview from "./post-preview";
import type Project from "../interfaces/project";
import ProjectPreview from "./project-preview";

type Props = {
  projects: Project[];
  category?: string;
};

const MoreProjects = ({ projects, category }: Props) => {
  //this shows on home
  return (
    <section className="md:ml-[300px]">
      <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:mt-[70px]">
        Projects {category && `on #${category}`}
      </h2>
      <div className="grid grid-cols-1 lg:gap-x-64 gap-y-16 md:gap-y-16 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            date={project.date}
            slug={project.slug}
            excerpt={project.excerpt}
            coverImg={project.coverImg}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;
