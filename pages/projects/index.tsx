import React from "react";
import About from "components/about";
import Container from "components/container";
import Layout from "components/layout";
import NavBar from "components/nav-bar";
import Sidebar from "components/sidebar";
import { HOME_OG_IMAGE_URL } from "lib/constants";
import Head from "next/head";
import { getAllStaticProps } from "utils/common/staticProps";
import Post from "interfaces/post";
import Project from "interfaces/project";
import MoreProjects from "components/more-projects";

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
  return (
    <>
      <Layout>
        <Head>
          <title>Donghun Kim | Projects</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta
            name="description"
            content="This is my collection of projects that I have worked on to learn new technologies and to solve problems that I have encountered in my daily life"
          />
        </Head>
        <Container>
          <Sidebar projectCategories={projectCategories} />
          <div>
            <NavBar selectedCategory={"projects"} />
            <MoreProjects projects={allProjects} />
          </div>
          {/* <div>
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
          </div> */}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = getAllStaticProps;
