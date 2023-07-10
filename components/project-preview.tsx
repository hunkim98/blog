import React from "react";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  coverImg: string;
  slug: string;
};

const ProjectPreview = ({ title, date, excerpt, slug, coverImg }: Props) => {
  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]">
      <div className="bg-white rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md">
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImg} />
        </div>
        <h3 className="text-2xl mb-3 leading-snug font-bold px-5">
          <a className="font-bold">{title}</a>
        </h3>
        <div className="text-lg mb-4 opacity-50 px-5">
          {/* <div>Written by {author.name}</div> */}
          <DateFormatter dateString={date} />
        </div>

        <p className="text-md leading-relaxed mb-4 opacity-40 px-5">
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

export default ProjectPreview;
