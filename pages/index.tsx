import { useViewProjectContext, ViewProjectContextProvider } from 'context/ViewProjectContext'
import AnimateRadialGradient from 'components/home/AnimateRadialGradient'
import TopRadialGradient from 'components/home/TopRadialGradient'
import GradientDivider from 'components/common/GradientDivider'
import { getAllStaticProps } from '../utils/common/staticProps'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import ContentCarousel from 'components/home/ContentCarousel'
import { getAllPosts, getAllProjects } from '../lib/api'
import MoreProjects from '../components/more-projects'
import ContentList from 'components/home/ContentList'
import MoreStories from '../components/more-stories'
import HomeNavbar from 'components/home/HomeNavbar'
import { Box, Divider, Text } from '@mantine/core'
import Container from '../components/container'
import ProjectType from '../interfaces/project'
import Sidebar from '../components/sidebar'
import Works from 'components/home/Works'
import Layout from '../components/layout'
import PostType from '../interfaces/post'
import React, { useEffect } from 'react'
import Intro from '../components/Intro'
import About from '../components/about'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  allPosts: PostType[]
  allProjects: ProjectType[]
  postCategories: string[]
  projectCategories: string[]
}

export default function Index({ allPosts, postCategories, allProjects, projectCategories }: Props) {
  const { projectTopMargin } = useViewProjectContext()
  return (
    <>
      <Head>
        <title>Donghun Kim | Developer</title>
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        <meta
          name="description"
          content="I am developer interested in building technologies that encourage people to create creative contents"
        />
      </Head>
      <AnimateRadialGradient />
      <Layout>
        <HomeNavbar appearFrom={projectTopMargin} disappearFrom={5000} />
        <Container>
          {/* <Sidebar projectCategories={projectCategories} /> */}
          <Box
            style={{
              width: '100%',
              maxWidth: '100%',
            }}
          >
            <Intro />
            <TopRadialGradient />

            {/* <GradientDivider fromColor="rgba(255,255,255,1)" toColor="rgba(255,255,255,0)" /> */}
            <Works allProjects={allProjects} />
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
