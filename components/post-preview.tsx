import React from "react";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, author, slug }: Props) => {
  return (
    <div>
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <h3 className="text-3xl mb-3 leading-snug font-bold">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 opacity-50">
        {/* <div>Written by {author.name}</div> */}
        <DateFormatter dateString={date} />
      </div>

      <p className="text-lg leading-relaxed mb-4 opacity-40">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
