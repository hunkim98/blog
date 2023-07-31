import React, { useEffect } from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts, getAllProjects } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import Link from "next/link";
import NavBar from "../components/nav-bar";
import Project from "../interfaces/project";
import MoreProjects from "../components/more-projects";
import About from "../components/about";
import { useRouter } from "next/router";

type Props = {
  allPosts: Post[];
  allProjects: Project[];
  postCategories: string[];
  projectCategories: string[];
};

export default function Index({
  allPosts,
  postCategories,
  allProjects,
  projectCategories,
}: Props) {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      const category = router.query.category;
      if (category) {
        setSelectedCategory(category as "about" | "projects" | "posts" | "CV");
      }
    }
  }, [router.query]);

  const [selectedCategory, setSelectedCategory] = React.useState<
    "about" | "projects" | "posts" | "CV"
  >("about");

  return (
    <>
      <Layout>
        <Head>
          <title>Hun Kim</title>
          <meta
            name="description"
            content="Hello this is Hun Kim, a software developer driven by the desire to create services that enable people to perceive their surrounding worlds in unique and transformative ways"
          />
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
          <div>
            <NavBar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            {selectedCategory === "about" && allPosts.length > 0 && <About />}
            {selectedCategory === "posts" && allPosts.length > 0 && (
              <MoreStories posts={allPosts} />
            )}
            {selectedCategory === "projects" && allPosts.length > 0 && (
              <MoreProjects projects={allProjects} />
            )}
          </div>
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
  const projectCategorySet = new Set();
  allProjects
    .filter((element) => !element.WIP)
    .map((post) => {
      const categories = post.categories as string[];
      categories.map((category) => {
        projectCategorySet.add(category);
      });
    });

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "keyword",
    "categories",
    "WIP",
  ]).filter((element) => !element.WIP);
  const postCategorySet = new Set();
  allPosts
    .filter((element) => !element.WIP)
    .map((post) => {
      const categories = post.categories as string[];
      categories.map((category) => {
        postCategorySet.add(category);
      });
    });

  return {
    props: {
      allPosts,
      postCategories: Array.from(postCategorySet),
      allProjects,
      projectCategories: Array.from(projectCategorySet),
    },
  };
};
