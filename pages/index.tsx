import { getAllStaticProps } from '../utils/common/staticProps'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import { getAllPosts, getAllProjects } from '../lib/api'
import MoreProjects from '../components/more-projects'
import MoreStories from '../components/more-stories'
import Container from '../components/container'
import Project from '../interfaces/project'
import Sidebar from '../components/sidebar'
import NavBar from '../components/nav-bar'
import Layout from '../components/layout'
import React, { useEffect } from 'react'
import Intro from '../components/intro'
import About from '../components/about'
import { useRouter } from 'next/router'
import Post from '../interfaces/post'
import Head from 'next/head'
import Link from 'next/link'

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
          <title>Donghun Kim | Developer</title>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta
            name="description"
            content="I am developer interested in building technologies that encourage people to create creative contents"
          />
        </Head>
        <Container>
          <Sidebar projectCategories={projectCategories} />
          <div>
            <NavBar selectedCategory={'about'} />
            <About />
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
  )
}

export const getStaticProps = getAllStaticProps
