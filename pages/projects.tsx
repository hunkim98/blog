import React from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllProjects } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Project from "../interfaces/project";
import Link from "next/link";
import MoreProjects from "../components/more-projects";

type Props = {
  allProjects: Project[];
  categories: string[];
};

export default function Index({ allProjects, categories }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Hun&rsquo;s Blog</title>
        </Head>
        <Container>
          <div className="md:min-w-[300px] md:fixed md:max-w-[300px]">
            <Intro />
            <div className="mb-6 flex flex-wrap">
              {categories.map((category, index) => {
                return (
                  <a
                    className="pr-2"
                    key={index}
                    href={`/category/${category}`}
                  >
                    #{category}
                  </a>
                );
              })}
            </div>
          </div>
          {allProjects.length > 0 && <MoreProjects projects={allProjects} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "excerpt",
    "keyword",
    "categories",
    "coverImg",
    "WIP",
  ]).filter((element) => !element.WIP);
  const categorySet = new Set();
  allProjects
    .filter((element) => !element.WIP)
    .map((post) => {
      const categories = post.categories as string[];
      categories.map((category) => {
        categorySet.add(category);
      });
    });

  return {
    props: { allProjects, categories: Array.from(categorySet) },
  };
};
