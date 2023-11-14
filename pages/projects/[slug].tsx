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
import { BLOG_URL } from "../../lib/constants";
import NavigateToOther from "../../components/navigate-to-other";

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
        <Header title={"← More Projects"} link="/projects" />

        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.excerpt} />
                <meta name="title" content={project.title} />
                <meta
                  property="og:image"
                  content={BLOG_URL + project.coverImg}
                />
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
              <div className="max-w-3xl mx-auto mt-16 mb-16">
                <NavigateToOther
                  prevPath={project.prevPath}
                  nextPath={project.nextPath}
                  prevTitle={project.prevTitle}
                  nextTitle={project.nextTitle}
                />
              </div>
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
  const projects = getAllProjects(["title", "date", "slug", "WIP"]).filter(
    (post) => !post.WIP
  );
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
  const foundIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = projects[foundIndex + 1];
  const nextProject = projects[foundIndex - 1];
  const prevPath = prevProject ? `/projects/${prevProject.slug}` : "";
  const nextPath = nextProject ? `/projects/${nextProject.slug}` : "";
  const prevTitle = prevProject ? prevProject.title : "";
  const nextTitle = nextProject ? nextProject.title : "";

  return {
    props: {
      project: {
        ...project,
        content,
        prevPath,
        nextPath,
        prevTitle,
        nextTitle,
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
