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
      <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
        Posts {category && `on #${category}`}
      </h2>
      <div className="grid grid-cols-1 md:gap-x-16 xl:grid-cols-3  lg:grid-cols-2 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
