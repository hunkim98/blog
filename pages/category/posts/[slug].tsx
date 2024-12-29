import React from 'react'

import { getAllPosts, getPostBySlug, getPostSlugs } from '../../../lib/api'
import MoreStories from '../../../components/more-stories'
import Container from '../../../components/container'
import Intro from 'components/deprecated/intro'
import Layout from '../../../components/layout'
import Header from '../../../components/header'
import Post from '../../../interfaces/post'
import Head from 'next/head'

type Props = {
  categoryPosts: Post[]
  postCategories: string[]
  category: string
}

export default function Category({ categoryPosts, category, postCategories }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Posts on {category}</title>
          <meta name="title" content={`My posts on ${category}`} />
        </Head>
        <Container>
          {/* <div className="md:min-w-[300px] md:fixed md:max-w-[300px]">
            <Intro />
            <div className="mb-6 flex flex-wrap">
              {postCategories.map((category, index) => {
                return (
                  <a className="pr-2" key={index} href={`/category/posts/${category}`}>
                    #{category}
                  </a>
                )
              })}
            </div>
          </div> */}
          <div className="container mx-auto px-5 max-w-5xl">
            {categoryPosts.length > 0 && <MoreStories category={category} posts={categoryPosts} />}
          </div>
        </Container>
      </Layout>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
    'keyword',
    'categories',
    'thumbnail',
    'WIP',
  ]).posts.filter((element) => !element.WIP)
  const postCategorySet = new Set()
  allPosts
    .filter((element) => !element.WIP)
    .map((project) => {
      const categories = project.categories as string[]
      categories.map((category) => {
        postCategorySet.add(category)
      })
    })
  const categoryPosts = allPosts.filter((post) => post.categories.includes(params.slug))

  return {
    props: {
      categoryPosts,
      category: params.slug,
      postCategories: Array.from(postCategorySet),
    },
  }
}

export async function getStaticPaths() {
  const { posts } = getAllPosts(['categories'])
  const categorySet = new Set()
  posts.map((post) => {
    const categories = post.categories as string[]
    categories.map((category) => {
      categorySet.add(category)
    })
  })

  return {
    paths: Array.from(categorySet).map((category) => {
      return {
        params: {
          slug: category,
        },
      }
    }),
    fallback: false,
  }
}
