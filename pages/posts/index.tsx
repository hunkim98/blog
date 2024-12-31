import MoreProjects from 'components/deprecated/more-projects'
import MoreStories from 'components/deprecated/more-stories'
import { getAllStaticProps } from 'utils/common/staticProps'
import { HOME_OG_IMAGE_URL } from 'lib/constants'
import About from 'components/deprecated/about'
import { redirect } from 'next/navigation'
import Intro from 'components/home/Intro'
import Sidebar from 'components/sidebar'
import Project from 'interfaces/project'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/layout'
import Post from 'interfaces/post'
import Head from 'next/head'

type Props = {
  allPosts: Post[]
  allProjects: Project[]
  postCategories: string[]
  projectCategories: string[]
}

export default function PostsPage({
  allPosts,
  postCategories,
  allProjects,
  projectCategories,
}: Props) {
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  }, [])
  return null
  // return (
  //   <>
  //     <Layout>
  //       <Head>
  //         <title>Donghun Kim | Posts</title>
  //         <meta property="og:image" content={HOME_OG_IMAGE_URL} />
  //         <meta
  //           name="description"
  //           content="This is my collection of posts that I have written to record my learning journey and my personal thoughts on technology and business issues"
  //         />
  //       </Head>
  //       <Container>
  //         {/* <Sidebar projectCategories={projectCategories} /> */}
  //         <div>
  //           {/* <Intro selectedCategory={'posts'} /> */}
  //           <MoreStories posts={allPosts} />
  //         </div>
  //       </Container>
  //     </Layout>
  //   </>
  // )
}

export const getStaticProps = getAllStaticProps
