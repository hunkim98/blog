import React from "react";

import Layout from "../../../components/layout";
import Container from "../../../components/container";
import Header from "../../../components/header";
import Head from "next/head";
import { getAllPosts, getPostBySlug, getPostSlugs } from "../../../lib/api";
import Post from "../../../interfaces/post";
import MoreStories from "../../../components/more-stories";

type Props = {
  categoryPosts: Post[];
  category: string;
};

export default function Category({ categoryPosts, category }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Posts on {category}</title>
        </Head>
        <div className="container mx-auto px-5 max-w-5xl">
          <Header title={"Hun's blog"} link="/" />
          {categoryPosts.length > 0 && (
            <MoreStories category={category} posts={categoryPosts} />
          )}
        </div>
      </Layout>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "keyword",
    "categories",
  ]);
  const categoryPosts = allPosts.filter((post) =>
    post.categories.includes(params.slug)
  );

  return {
    props: { categoryPosts, category: params.slug },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["categories"]);
  const categorySet = new Set();
  posts.map((post) => {
    const categories = post.categories as string[];
    categories.map((category) => {
      categorySet.add(category);
    });
  });

  return {
    paths: Array.from(categorySet).map((category) => {
      return {
        params: {
          slug: category,
        },
      };
    }),
    fallback: false,
  };
}
