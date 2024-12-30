import { useHomeViewContentContext, HomeViewContentContext } from 'context/ViewProjectContext'
import AnimateRadialGradient from 'components/home/Decoration/AnimateRadialGradient'
import TopRadialGradient from 'components/home/Decoration/TopRadialGradient'
import { BaseContainerClassName } from 'components/layout/config'
import GradientDivider from 'components/common/GradientDivider'
import { getAllStaticProps } from '../utils/common/staticProps'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import { Box, Divider, Flex, Text } from '@mantine/core'
import Experience from 'components/home/Experience'
import Container from '../components/container'
import HomeNavbar from 'components/home/Navbar'
import ProjectType from '../interfaces/project'
import Intro from '../components/home/Intro'
import Skills from 'components/home/Skills'
import Sidebar from '../components/sidebar'
import Works from 'components/home/Works'
import Posts from 'components/home/Posts'
import Layout from '../components/layout'
import PostType from '../interfaces/post'
import React, { useEffect } from 'react'
import About from '../components/about'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { cn } from 'lib/tw'

type Props = {
  allPosts: PostType[]
  allProjects: ProjectType[]
  postCategories: string[]
  projectCategories: string[]
}

export default function HomePage({
  allPosts,
  postCategories,
  allProjects,
  projectCategories,
}: Props) {
  const { projectTopMargin, projectContentHeight, postContentHeight } = useHomeViewContentContext()
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
      <Layout>
        <HomeNavbar
          appearFrom={projectTopMargin}
          disappearFrom={projectContentHeight + projectTopMargin}
          contentPerScroll={[
            {
              scrollTop: projectContentHeight + projectTopMargin,
              content: 'Writings',
            },
            {
              scrollTop: projectContentHeight + postContentHeight + projectTopMargin,
              content: 'Experience',
            },
          ]}
        />
        {/* <Container> */}
        {/* <Sidebar projectCategories={projectCategories} /> */}
        <Box
          className={'bg-repeat'}
          style={{
            backgroundImage: 'url(/assets/background/noise50.png)',
          }}
        >
          <Box className={cn(BaseContainerClassName, ['z-10'])}>
            <Intro />
            <AnimateRadialGradient />
            <TopRadialGradient />

            {/* <GradientDivider fromColor="rgba(255,255,255,1)" toColor="rgba(255,255,255,0)" /> */}
            <Works allProjects={allProjects} />
            <Posts allPosts={allPosts} />
          </Box>
        </Box>
        <Box
          className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]"
          mt={-50}
          h={80}
        ></Box>
        <Flex className={cn(BaseContainerClassName)} pos={'relative'} mb={300} mt={100}>
          <Flex gap={'lg'} p={10}>
            <Experience />
            <GradientDivider
              fromColor="rgba(255,255,255,1)"
              toColor="rgba(255,255,255,0)"
              isVertical={true}
            />
            <Skills />
          </Flex>
        </Flex>
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
        {/* </Container> */}
      </Layout>
    </>
  )
}

export const getStaticProps = getAllStaticProps
