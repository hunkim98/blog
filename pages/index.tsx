import { useHomeViewContentContext, HomeViewContentContext } from 'context/ViewProjectContext'
import AnimateRadialGradient from 'components/home/Decoration/AnimateRadialGradient'
import TopRadialGradient from 'components/home/Decoration/TopRadialGradient'
import { BaseContainerClassName } from 'components/layout/config'
import Posts, { POSTS_CONTAINER_ID } from 'components/home/Posts'
import GradientDivider from 'components/common/GradientDivider'
import { getAllStaticProps } from '../utils/common/staticProps'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import BelowGradient from 'components/common/BelowGradient'
import { contentIdGenerator } from 'lib/contentIdGenerator'
import { Box, Divider, Flex, Text } from '@mantine/core'
import Experience from 'components/home/Experience'
import Container from '../components/container'
import HomeNavbar from 'components/home/Navbar'
import ProjectType from '../interfaces/project'
import Intro from '../components/home/Intro'
import Skills from 'components/home/Skills'
import Sidebar from '../components/sidebar'
import Works from 'components/home/Works'
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
  const router = useRouter()
  useEffect(() => {
    if (router.query) {
      if (router.query.contentFromSlug && router.query.contentFromType) {
        const contentFromSlug = router.query.contentFromSlug as string
        const contentFromType = router.query.contentFromType as string
        const contentId = contentIdGenerator({
          slug: contentFromSlug,
          type: contentFromType,
        })
        if (contentFromType === 'post') {
          const element = document.getElementById(POSTS_CONTAINER_ID)
          if (element) {
            element.scrollIntoView()
            // but scroll a little bit more to show the content
            window.scrollBy(0, -100)
          }
        } else {
          const element = document.getElementById(contentId)
          if (element) {
            element.scrollIntoView()
            window.scrollBy(0, -100)
          }
        }
      }
    }
  }, [router.query])
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
          className={'bg-repeat relative z-10'}
          style={{
            backgroundImage: 'url(/assets/background/noise30.png)',
          }}
        >
          <Box w={'100%'} className="overflow-hidden z-50 bg-white overflow-x-hidden">
            <AnimateRadialGradient />
            <TopRadialGradient />
          </Box>
          <Box className={cn(BaseContainerClassName, ['max-w-[1200px] z-50'])}>
            <Intro />
            <Works allProjects={allProjects} />
            <Posts allPosts={allPosts} />
          </Box>
          <Box
            className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]"
            c={'white'}
            mt={-50}
            h={80}
          ></Box>
        </Box>
        <Flex
          className={cn(BaseContainerClassName, ['max-w-[1200px]'])}
          pos={'relative'}
          mb={300}
          mt={100}
        >
          <Flex
            gap={'lg'}
            p={10}
            direction={{
              base: 'column',
              xs: 'column',
              sm: 'row',
            }}
          >
            <Experience />
            <GradientDivider
              display={{
                base: 'none',
                xs: 'none',
                sm: 'none',
                md: 'block',
                lg: 'block',
                xl: 'block',
              }}
              fromColor="rgba(255,255,255,1)"
              toColor="rgba(255,255,255,0)"
              isVertical={true}
            />
            <Skills />
          </Flex>
        </Flex>
        <BelowGradient />
      </Layout>
    </>
  )
}

export const getStaticProps = getAllStaticProps
