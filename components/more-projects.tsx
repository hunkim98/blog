import React from "react";
import PostPreview from "./post-preview";
import type Project from "../interfaces/project";
import ProjectPreview from "./project-preview";

type Props = {
  projects: Project[];
  category?: string;
  isTitleShown?: boolean;
};

const MoreProjects = ({ projects, category, isTitleShown }: Props) => {
  //this shows on home
  return (
    <section className="md:ml-[300px]">
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
            coverImg={project.coverImg}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;
