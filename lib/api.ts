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

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
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

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return projects;
}
