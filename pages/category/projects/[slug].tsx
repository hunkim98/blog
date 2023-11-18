import React from "react";

import Layout from "../../../components/layout";
import Container from "../../../components/container";
import Header from "../../../components/header";
import Head from "next/head";
import { getAllPosts, getAllProjects } from "../../../lib/api";
import Project from "../../../interfaces/project";

import MoreProjects from "../../../components/more-projects";
import Intro from "../../../components/intro";

type Props = {
  categoryProjects: Project[];
  category: string;
  projectCategories: string[];
};

export default function Category({
  categoryProjects,
  category,
  projectCategories,
}: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects on {category}</title>
          <meta name="title" content={`My projects on ${category}`} />
        </Head>
        <Container>
          <div className="md:min-w-[300px] md:fixed md:max-w-[300px]">
            <Intro />
            <div className="mb-6 flex flex-wrap">
              {projectCategories.map((category, index) => {
                return (
                  <a
                    className="pr-2"
                    key={index}
                    href={`/category/projects/${category}`}
                  >
                    #{category}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="container mx-auto px-5 max-w-5xl">
            {categoryProjects.length > 0 && (
              <MoreProjects category={category} projects={categoryProjects} />
            )}
          </div>
        </Container>
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
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "excerpt",
    "keyword",
    "categories",
    "coverImg",
    "WIP",
  ]).projects.filter((element) => !element.WIP);
  const projectCategorySet = new Set();
  allProjects
    .filter((element) => !element.WIP)
    .map((project) => {
      const categories = project.categories as string[];
      categories.map((category) => {
        projectCategorySet.add(category);
      });
    });
  const categoryProjects = allProjects.filter((project) =>
    project.categories.includes(params.slug)
  );

  return {
    props: {
      categoryProjects,
      category: params.slug,
      projectCategories: Array.from(projectCategorySet),
    },
  };
};

export async function getStaticPaths() {
  const { projects } = getAllProjects(["categories"]);
  const categorySet = new Set();
  projects.map((project) => {
    const categories = project.categories as string[];
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
