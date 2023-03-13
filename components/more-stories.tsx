import React from "react";
import PostPreview from "./post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
  category?: string;
};

const MoreStories = ({ posts, category }: Props) => {
  //this shows on home
  return (
    <section>
      <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:mt-[70px]">
        Posts {category && `on #${category}`}
      </h2>
      <div className="grid grid-cols-1 lg:gap-x-64 gap-y-16 md:gap-y-16 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
