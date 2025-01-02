import {
  IconCircleXFilled,
  IconEyeglass,
  IconEyeX,
  IconFilter,
  IconFilterFilled,
  IconSquareXFilled,
  IconTrashX,
  IconTrashXFilled,
  IconX,
  IconXboxAFilled,
  IconXd,
} from '@tabler/icons-react'
import { useHomeViewContentContext, HomeViewContentContext } from 'context/ViewProjectContext'
import AnimateRadialGradient from 'components/home/Decoration/AnimateRadialGradient'
import TopRadialGradient from 'components/home/Decoration/TopRadialGradient'
import { Box, Center, CloseIcon, Divider, Flex, Text } from '@mantine/core'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { BaseContainerClassName } from 'components/layout/config'
import GradientDivider from 'components/common/GradientDivider'
import FloatingMessage from 'components/common/FloatingMessage'
import { getAllStaticProps } from '../utils/common/staticProps'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
import BelowGradient from 'components/common/BelowGradient'
import { contentIdGenerator } from 'lib/contentIdGenerator'
import Experience from 'components/home/Experience'
import About from '../components/deprecated/about'
import VisViewer from 'components/home/VisViewer'
import HomeNavbar from 'components/home/Navbar'
import ProjectType from '../interfaces/project'
import Intro from '../components/home/Intro'
import Skills from 'components/home/Skills'
import Sidebar from '../components/sidebar'
import Posts from 'components/home/Posts'
import Works from 'components/home/Works'
import Layout from '../components/layout'
import PostType from '../interfaces/post'
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

const WORKS_CONTAINER_ID = 'works'
const WRITINGS_CONTAINER_ID = 'writings'

export default function HomePage({
  allPosts,
  postCategories,
  allProjects,
  projectCategories,
}: Props) {
  const {
    projectTopMargin,
    projectContentHeight,
    postContentHeight,
    setFilterCategory,
    filterCategory,
  } = useHomeViewContentContext()
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
          const element = document.getElementById(WRITINGS_CONTAINER_ID)
          if (element) {
            element.scrollIntoView({
              block: 'center',
            })
            // but scroll a little bit more to show the content
            // window.scrollBy(0, -100)
          }
        } else {
          const element = document.getElementById(contentId)
          if (element) {
            element.scrollIntoView({
              block: 'center',
            })
            // window.scrollBy(0, -100)
          }
        }
      }
    }
  }, [router.query])
  const onSelectFilter = useCallback(
    (category: string | null) => {
      setFilterCategory(category)
    },
    [projectTopMargin]
  )
  const filteredProjects = useMemo(
    () =>
      allProjects.filter((project) => {
        if (filterCategory) {
          return project.categories.includes(filterCategory)
        }
        return true
      }),
    [allProjects, filterCategory]
  )
  const filteredPosts = useMemo(
    () =>
      allPosts.filter((post) => {
        if (filterCategory) {
          return post.categories.includes(filterCategory)
        }
        return true
      }),
    [allPosts, filterCategory]
  )
  useEffect(() => {
    if (!filterCategory) return
    const workElement = document.getElementById(WORKS_CONTAINER_ID)
    if (workElement) {
      // console.log(workElement)
      setTimeout(() => {
        workElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
      }, 200)
      // workElement.scrollBy(0, -projectTopMargin)
    }
  }, [filterCategory])
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
        <Flex
          direction={'column'}
          align={'center'}
          className={'bg-repeat relative z-10 pt-16'}
          style={{
            backgroundImage: 'url(/assets/background/noise30.png)',
          }}
        >
          <Box w={'100%'} className="overflow-hidden z-40 bg-white overflow-x-hidden">
            <AnimateRadialGradient />
            <TopRadialGradient />
          </Box>
          <VisViewer
            selectedLabel={filterCategory}
            setSelectedLabel={onSelectFilter}
            allPosts={allPosts}
            allProjects={allProjects}
          />
          <Box className={cn(BaseContainerClassName, ['max-w-[1200px] z-50 mb-[80px]'])}>
            <Intro />
            <Works projects={filteredProjects} containerId={WORKS_CONTAINER_ID} />
            <Posts posts={filteredPosts} containerId={WRITINGS_CONTAINER_ID} />
          </Box>
          <Box
            className="bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)] z-50"
            c={'white'}
            w="100%"
            mt={-50}
            h={80}
          ></Box>
        </Flex>
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
        <FloatingMessage
          message={
            filterCategory ? (
              <Flex align={'center'} gap={6}>
                {/* <IconFilter size={16} /> */}
                <Text className="font-sans font-medium">Filter: {filterCategory}</Text>
                <Center
                  w={25}
                  h={25}
                  className="rounded-lg cursor-pointer"
                  bg={'red'}
                  onClick={() => {
                    onSelectFilter(null)
                  }}
                >
                  <CloseIcon size={'20px'} color="white" strokeWidth={'25px'} fontVariant={16} />
                </Center>

                {/* <IconTrashXFilled
                  className="cursor-pointer"
                  size={20}
                  color="red"
                  onClick={() => {
                    onSelectFilter(null)
                  }}
                /> */}
              </Flex>
            ) : null
          }
        />
      </Layout>
    </>
  )
}

export const getStaticProps = getAllStaticProps
