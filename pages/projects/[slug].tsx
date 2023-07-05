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
  getProjectBySlug,
  getAllProjects,
} from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type ProjectType from "../../interfaces/project";
import Utterances from "../../components/utterances";

type Props = {
  project: ProjectType;
  moreProjetcts: ProjectType[];
  preview?: boolean;
};

export default function Project({ project, moreProjetcts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <div className="container mx-auto px-5 max-w-5xl">
        <Header />

        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{project.title} | hunkim98&rsquo;s Projects</title>
              </Head>
              <div className="max-w-3xl mx-auto">
                <div className="mb-6 text-lg">
                  <PostTitle>{project.title}</PostTitle>
                  <div>
                    Category:{" "}
                    {project.categories.map((category, index) => {
                      return <span key={index}>#{category}</span>;
                    })}
                  </div>
                </div>
              </div>
              <PostBody content={project.content} />
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
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "keyword",
    "categories",
    "coverImg",
  ]);
  const content = await markdownToHtml((project.content as string) || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
