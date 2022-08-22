import React from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import Link from "next/link";

type Props = {
  allPosts: Post[];
  categories: string[];
};

export default function Index({ allPosts, categories }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>hunkim&rsquo;s Blog</title>
        </Head>
        <Container>
          <Intro />
          {categories.map((category, index) => {
            return (
              <a key={index} href={`/category/${category}`}>
                #{category}
              </a>
            );
          })}
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "keyword",
    "categories",
  ]);
  const categorySet = new Set();
  allPosts.map((post) => {
    const categories = post.categories as string[];
    categories.map((category) => {
      categorySet.add(category);
    });
  });

  return {
    props: { allPosts, categories: Array.from(categorySet) },
  };
};
