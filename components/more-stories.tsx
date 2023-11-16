import React from "react";
import PostPreview from "./posts/post-preview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
  category?: string;
  isTitleShown?: boolean;
};

const MoreStories = ({ posts, category, isTitleShown }: Props) => {
  //this shows on home
  return (
    <section className="md:ml-[300px]">
      {(isTitleShown || category) && (
        <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:mt-[70px]">
          Posts {category && `on #${category}`}
        </h2>
      )}
      <div className="grid grid-cols-1 lg:gap-x-64 gap-y-16 md:gap-y-16 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            coverImg={post.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
