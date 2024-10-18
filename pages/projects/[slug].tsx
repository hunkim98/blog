import {
  getPostBySlug,
  getAllPosts,
  getProjectBySlug,
  getAllProjects,
  getPlainProjectContentBySlug,
} from '../../lib/api'
import markdownStyles from '../../components/markdown-styles.module.css'
import NavigateToOther from '../../components/navigate-to-other'
import PostHeader from '../../components/posts/post-header'
import PostTitle from '../../components/posts/post-title'
import PostBody from '../../components/posts/post-body'
import type ProjectType from '../../interfaces/project'
import { serialize } from 'next-mdx-remote/serialize'
import markdownToHtml from '../../lib/markdownToHtml'
import Utterances from '../../components/utterances'
import Container from '../../components/container'
import { BLOG_URL } from '../../lib/constants'
import Header from '../../components/header'
import Layout from '../../components/layout'
import { MDXRemote } from 'next-mdx-remote'
import { useRouter } from 'next/router'
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
    <Layout preview={preview}>
      <div className="container mx-auto px-5 max-w-5xl">
        <Header title={'← More Projects'} link="/projects" />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.excerpt} />
                <meta name="title" content={project.title} />
                <meta property="og:image" content={BLOG_URL + project.coverImg} />
              </Head>
              <div className="max-w-3xl mx-auto">
                <div className="mb-6 text-lg">
                  <PostTitle>{project.title}</PostTitle>
                  <div>
                    Category:{' '}
                    {project.categories.map((category, index) => {
                      return (
                        <span
                          key={index}
                          onClick={() => {
                            router.push(`/category/projects/${category}`)
                          }}
                        >
                          #{category}{' '}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
              <PostBody isMdx={isMdx} content={project.content} />
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
    </Layout>
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
    'coverImg',
    'excerpt',
  ])

  const content = isMdx
    ? await serialize(project.content as any, { scope: project['data'] as any })
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
