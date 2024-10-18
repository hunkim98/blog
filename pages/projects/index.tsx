import { getAllStaticProps } from 'utils/common/staticProps'
import MoreProjects from 'components/more-projects'
import { HOME_OG_IMAGE_URL } from 'lib/constants'
import Container from 'components/container'
import Sidebar from 'components/sidebar'
import Project from 'interfaces/project'
import NavBar from 'components/nav-bar'
import Layout from 'components/layout'
import About from 'components/about'
import Post from 'interfaces/post'
import Head from 'next/head'
import React from 'react'

type Props = {
  allPosts: Post[]
  allProjects: Project[]
  postCategories: string[]
  projectCategories: string[]
}

export default function Index({ allPosts, postCategories, allProjects, projectCategories }: Props) {
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
            <NavBar selectedCategory={'projects'} />
            <MoreProjects projects={allProjects} />
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = getAllStaticProps
