import { getAllPosts, getAllProjects } from '../../lib/api'

export const getAllStaticProps = async () => {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'excerpt',
    'keyword',
    'categories',
    'coverImg',
    'WIP',
  ]).projects.filter((element) => !element.WIP)
  const projectCategorySet = new Set()
  allProjects
    .filter((element) => !element.WIP)
    .map((project) => {
      const categories = project.categories as string[]

      categories.map((category) => {
        projectCategorySet.add(category)
      })
    })

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
  ]).filter((element) => !element.WIP)
  const postCategorySet = new Set()
  allPosts
    .filter((element) => !element.WIP)
    .map((post) => {
      const categories = post.categories as string[]
      console.log()
      categories.map((category) => {
        postCategorySet.add(category)
      })
    })

  return {
    props: {
      allPosts,
      postCategories: Array.from(postCategorySet),
      allProjects,
      projectCategories: Array.from(projectCategorySet),
    },
  }
}
