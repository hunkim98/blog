import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import {
  getPostBySlug,
  getAllPosts,
  getAllProjects,
  getProjectBySlug,
} from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import Utterances from "../../components/utterances";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <div className="container mx-auto px-5 max-w-5xl">
        <Header title={"← More Posts"} link="/?category=posts" />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | hunkim98&rsquo;s Blog</title>
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
              />
              <div className="max-w-3xl mx-auto">
                <div className="mb-6 text-lg">
                  <div>
                    Category:{" "}
                    {post.categories.map((category, index) => {
                      return <span key={index}>#{category}</span>;
                    })}
                  </div>
                </div>
              </div>
              <PostBody content={post.content} />
              <Utterances />
            </article>
          </>
        )}
      </div>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "keyword",
    "categories",
  ]);
  const content = await markdownToHtml((post.content as string) || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
