import { getPostBySlug, getAllPosts, getAllProjects, getProjectBySlug } from '../../lib/api'
import PostHeader from '../../components/deprecated/posts/post-header'
import NavigateToOther from '../../components/content/NavigateToOther'
import PostBody from '../../components/deprecated/posts/post-body'
import BelowGradient from 'components/common/BelowGradient'
import ContentTitle from '../../components/content/Title'
import NoiseFadeOut from 'components/common/NoiseFadeOut'
import Header from '../../components/deprecated/header'
import { serialize } from 'next-mdx-remote/serialize'
import ContentNavbar from 'components/content/Navbar'
import markdownToHtml from '../../lib/markdownToHtml'
import Utterances from '../../components/utterances'
import ContentTags from 'components/content/Tags'
import ContentBody from 'components/content/Body'
import type PostType from '../../interfaces/post'
import { BLOG_URL } from '../../lib/constants'
import rehypeHighlight from 'rehype-highlight'
import Layout from '../../components/layout'
import { Flex, Text } from '@mantine/core'
import { mdxToHtml } from 'lib/mdxToHtml'
import { useRouter } from 'next/router'
import rehypeKatex from 'rehype-katex'
import { compile } from '@mdx-js/mdx'
import { createElement } from 'react'
import remarkMath from 'remark-math'
import ErrorPage from 'next/error'
import remarkGfm from 'remark-gfm'
import Head from 'next/head'
import React from 'react'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  const isMdx = post.isMdx
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="title" content={post.title} />
        <meta property="og:image" content={BLOG_URL + post.thumbnail} />
      </Head>
      <ContentNavbar content={post} isPost={true} />
      <NoiseFadeOut height={300} />
      <Layout preview={preview}>
        <div className="container mx-auto px-5 max-w-5xl">
          {router.isFallback ? (
            <ContentTitle>Loading…</ContentTitle>
          ) : (
            <>
              <article className="mb-32">
                <div className="max-w-3xl mx-auto">
                  <Flex direction={'column'} className="mb-6 text-lg" gap={'lg'}>
                    <ContentTitle>{post.title}</ContentTitle>
                    <Text className="font-tiempos font-thin" opacity={0.5} mt={8}>
                      <Text span className="font-sans">
                        Posted on:
                      </Text>
                      <Text span className="font-sans" ml={5}>
                        {post.date}
                      </Text>
                    </Text>
                    <ContentTags
                      tags={post.categories}
                      onTagClick={(tag) => {
                        router.push(`/category/posts/${tag}`)
                      }}
                    />
                  </Flex>
                </div>
                <ContentBody isMdx={isMdx} content={post.content} />
                <div className="max-w-3xl mx-auto mt-16 mb-16">
                  <NavigateToOther
                    prevPath={post.prevPath}
                    nextPath={post.nextPath}
                    prevTitle={post.prevTitle}
                    nextTitle={post.nextTitle}
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
  const { posts, mds, mdxs } = getAllPosts(['title', 'date', 'slug', 'WIP'])
  const finishedPosts = posts.filter((element) => !element.WIP)
  const isMdx = mdxs.includes(params.slug)
  const slug = isMdx ? params.slug + '.mdx' : params.slug
  // const posts = getAllPosts(['title', 'date', 'slug', 'WIP']).filter((post) => {
  //   if (process.env.NODE_ENV === 'development') {
  //     return true
  //   }
  //   return !post.WIP
  // })
  const post = getPostBySlug(slug, [
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
  const foundIndex = finishedPosts.findIndex((p) => p.slug === params.slug)
  const prevPost = finishedPosts[foundIndex + 1]
  const nextPost = finishedPosts[foundIndex - 1]
  const prevPath = prevPost ? `/posts/${prevPost.slug}` : ''
  const nextPath = nextPost ? `/posts/${nextPost.slug}` : ''
  const prevTitle = prevPost ? prevPost.title : ''
  const nextTitle = nextPost ? nextPost.title : ''

  const content = isMdx
    ? await serialize(post.content as any, {
        // scope: post['data'] as any,
        // remarkPlugins: [remarkGfm, remarkMath],
        // rehypePlugins: [rehypeHighlight, rehypeKatex],
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeHighlight, rehypeKatex],
          // rehypePlugins: [rehypeHighlight, rehypeKatex as any],
        },
      })
    : await markdownToHtml((post.content as string) || '')

  return {
    props: {
      post: {
        ...post,
        content,
        nextPath,
        prevPath,
        prevTitle,
        nextTitle,
        isMdx,
      },
    },
  }
}

export async function getStaticPaths() {
  const { posts } = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
