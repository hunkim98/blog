import { getAllStaticProps } from '../utils/common/staticProps'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import { getAllPosts, getAllProjects } from '../lib/api'
import Carousel from 'components/home/ContentCarousel'
import MoreProjects from '../components/more-projects'
import MoreStories from '../components/more-stories'
import Container from '../components/container'
import ProjectType from '../interfaces/project'
import Sidebar from '../components/sidebar'
import NavBar from '../components/nav-bar'
import Layout from '../components/layout'
import PostType from '../interfaces/post'
import React, { useEffect } from 'react'
import Intro from '../components/intro'
import About from '../components/about'
import { useRouter } from 'next/router'
import { Box } from '@mantine/core'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  allPosts: PostType[]
  allProjects: ProjectType[]
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
          {/* <Sidebar projectCategories={projectCategories} /> */}
          <Box
            style={{
              width: '100%',
              maxWidth: '100%',
            }}
          >
            <NavBar selectedCategory={'about'} />
            <Carousel allPosts={allPosts} allProjects={allProjects} />
            <About />
          </Box>
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
