import {
  getPostBySlug,
  getAllPosts,
  getProjectBySlug,
  getAllProjects,
  getPlainProjectContentBySlug,
} from '../../lib/api'
import markdownStyles from '../../components/markdown-styles.module.css'
import PostHeader from '../../components/deprecated/posts/post-header'
import NavigateToOther from '../../components/content/NavigateToOther'
import PostBody from '../../components/deprecated/posts/post-body'
import Header from '../../components/deprecated/header'
import type ProjectType from '../../interfaces/project'
import { serialize } from 'next-mdx-remote/serialize'
import markdownToHtml from '../../lib/markdownToHtml'
import Utterances from '../../components/utterances'
import { BLOG_URL } from '../../lib/constants'
import rehypeHighlight from 'rehype-highlight'
import Layout from '../../components/layout'
import { Flex, Text } from '@mantine/core'
import { useRouter } from 'next/router'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import BelowGradient from 'components/common/BelowGradient'
import NoiseFadeOut from 'components/common/NoiseFadeOut'
import ContentNavbar from 'components/content/Navbar'
import ContentTitle from 'components/content/Title'
import ContentTags from 'components/content/Tags'
import ContentBody from 'components/content/Body'
import remarkGfm from 'remark-gfm'
import ErrorPage from 'next/error'
import Head from 'next/head'
import React from 'react'

type Props = {
  project: ProjectType
  moreProjetcts: ProjectType[]
  preview?: boolean
}

export default function Project({ project, moreProjetcts, preview }: Props) {
  const router = useRouter()
  const isMdx = project.isMdx

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.excerpt} />
        <meta name="title" content={project.title} />
        <meta property="og:image" content={BLOG_URL + project.thumbnail} />
      </Head>
      <ContentNavbar content={project} isPost={false} />
      <NoiseFadeOut height={300} />
      <Layout preview={preview}>
        <div className="container mx-auto px-5 max-w-5xl">
          {/* <Header title={'← More Projects'} link="/projects" /> */}
          {router.isFallback ? (
            <Text>Loading…</Text>
          ) : (
            <>
              <article className="mb-32">
                <div className="max-w-3xl mx-auto">
                  <Flex direction={'column'} className="mb-6 text-lg" gap={'lg'}>
                    <ContentTitle>{project.title}</ContentTitle>
                    <Text className="font-tiempos font-thin" opacity={0.5} mt={8}>
                      <Text span className="font-sans">
                        Posted on:
                      </Text>
                      <Text span className="font-sans" ml={5}>
                        {project.date}
                      </Text>
                    </Text>
                    {/* <PostTitle>{project.title}</PostTitle> */}
                    <ContentTags
                      tags={project.categories}
                      onTagClick={(category) => {
                        router.push(`/category/projects/${category}`)
                      }}
                    />
                  </Flex>
                </div>
                <ContentBody isMdx={isMdx} content={project.content} />
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <NavigateToOther
                    prevPath={project.prevPath}
                    nextPath={project.nextPath}
                    prevTitle={project.prevTitle}
                    nextTitle={project.nextTitle}
                  />
                </div>
                <Utterances />
              </article>
            </>
          )}
        </div>
        <BelowGradient />
        <NoiseFadeOut
          height={1000}
          direction="top"
          className="absolute bottom-0 bg-red-400 w-full -z-10"
        />
      </Layout>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const { projects, mds, mdxs } = getAllProjects(['title', 'date', 'slug', 'WIP'])
  const finishedProjects = projects.filter((project) => !project.WIP)
  const isMdx = mdxs.includes(params.slug)
  const slug = isMdx ? params.slug + '.mdx' : params.slug

  const project = getProjectBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'keyword',
    'categories',
    'thumbnail',
    'excerpt',
  ])

  const content = isMdx
    ? await await serialize(project.content as any, {
        // scope: post['data'] as any,
        // remarkPlugins: [remarkGfm, remarkMath],
        // rehypePlugins: [rehypeHighlight, rehypeKatex],
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          // rehypePlugins: [rehypeHighlight, rehypeKatex],
          rehypePlugins: [rehypeHighlight, rehypeKatex as any],
        },
      })
    : await markdownToHtml((project.content as string) || '')
  // const content = await markdownToHtml((project.content as string) || "");
  const foundIndex = finishedProjects.findIndex((p) => p.slug === params.slug)
  const prevProject = finishedProjects[foundIndex + 1]
  const nextProject = finishedProjects[foundIndex - 1]
  const prevPath = prevProject ? `/projects/${prevProject.slug}` : ''
  const nextPath = nextProject ? `/projects/${nextProject.slug}` : ''
  const prevTitle = prevProject ? prevProject.title : ''
  const nextTitle = nextProject ? nextProject.title : ''

  return {
    props: {
      project: {
        ...project,
        content,
        prevPath,
        nextPath,
        prevTitle,
        nextTitle,
        isMdx,
      },
    },
  }
}

export async function getStaticPaths() {
  const { projects } = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}
