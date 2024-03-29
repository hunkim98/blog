import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");
const projectsDirectory = join(process.cwd(), "_projects");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents); //data has elements of PostType

  type Items = {
    [key: string]: string | string[];
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getProjectMdMdxSlugs() {
  return fs.readdirSync(projectsDirectory).filter((slug) => {
    return slug.endsWith(".md") || slug.endsWith(".mdx");
  });
}

export function getPlainProjectContentBySlug(fileName: string) {
  const fileContent = fs.readFileSync(
    join(projectsDirectory, `${fileName}`),
    "utf8"
  );
  return fileContent;
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  // first find md or mdx file

  const doesEndWithMdx = slug.endsWith(".mdx");
  const realSlug = doesEndWithMdx
    ? slug.replace(/\.mdx$/, "")
    : slug.replace(/\.md$/, "");
  const fullPath = doesEndWithMdx
    ? join(projectsDirectory, `${realSlug}.mdx`)
    : join(projectsDirectory, `${realSlug}.md`);
  // const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents); //data has elements of PostType
  type Items = {
    [key: string]: string | string[];
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  items["data"] = data as any;
  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectMdMdxSlugs();
  const mds = slugs
    .filter((slug) => slug.endsWith(".md"))
    .map((slug) => {
      return slug.replace(/\.md$/, "");
    });
  const mdxs = slugs
    .filter((slug) => slug.endsWith(".mdx"))
    .map((slug) => {
      return slug.replace(/\.mdx$/, "");
    });

  const onGoingProjects = slugs.filter((slug) => {
    const project = getProjectBySlug(slug, fields);
    return project.date === "ongoing";
  });
  const finishedProjects = slugs.filter((slug) => {
    const project = getProjectBySlug(slug, fields);
    return project.date !== "ongoing";
  });
  const projects = [
    ...onGoingProjects.map((slug) => getProjectBySlug(slug, fields)),
    ...finishedProjects
      .map((slug) => getProjectBySlug(slug, fields))
      .sort((project1, project2) => (project1.date > project2.date ? -1 : 1)),
  ];
  return { projects, mds, mdxs };
}
