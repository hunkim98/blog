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
import MoreStories from "components/more-stories";

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
          <title>Donghun Kim | Posts</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta
            name="description"
            content="This is my collection of posts that I have written to record my learning journey and my personal thoughts on technology and business issues"
          />
        </Head>
        <Container>
          <Sidebar projectCategories={projectCategories} />
          <div>
            <NavBar selectedCategory={"posts"} />
            <MoreStories posts={allPosts} />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = getAllStaticProps;
