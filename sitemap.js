// import fs from "fs";
// import matter from "gray-matter";
// import { join } from "path";

const fs = require("fs");
const matter = require("gray-matter");
const join = require("path").join;

const postsDirectory = join(process.cwd(), "_posts");
const projectsDirectory = join(process.cwd(), "_projects");

function generateSiteMap(posts, projects) {
  const URL =
    process.env.RUNTIME_ENV === "prod"
      ? "https://hunkim98.github.io"
      : "http://localhost:3000";
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${URL}</loc>
        </url>
        ${posts
          .map(({ id, date }) => {
            return `
        <url>
            <loc>${`${URL}/posts/${id}`}</loc>
            <lastmod>${new Date(date).toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
        `;
          })
          .join("")}
        ${projects
          .map(({ id, date }) => {
            return `
        <url>
            <loc>${`${URL}/projects/${id}`}</loc>
            <lastmod>${new Date(date).toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
        `;
          })
          .join("")}
    </urlset>
`;
}

function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    // Read markdown file as string
    const fullPath = join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Filter out draft posts
  const liveProjects = allProjectsData.filter((projectData) => {
    return projectData.WIP == false;
  });
  // Sort posts by date
  return liveProjects.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    // Read markdown file as string
    const fullPath = join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Filter out draft posts
  const livePosts = allPostsData.filter((postData) => {
    return postData.WIP == false;
  });
  // Sort posts by date
  return livePosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
// export async function getStaticProps({ res }) {
//   const posts = getSortedPostsData();
//   const projects = getSortedProjectsData();
//   // Generate the XML sitemap with the blog data
//   const sitemap = generateSiteMap(posts, projects);
//   res.setHeader("Content-Type", "text/xml");
//   // Send the XML to the browser
//   res.write(sitemap);
//   res.end();
//   return {
//     props: {},
//   };
// }
// export default function SiteMap() {
//   // This page does not need to return anything. It just needs to generate
//   // and return the XML sitemap.
//   return null;
// }

(async () => {
  const posts = getSortedPostsData();
  const projects = getSortedProjectsData();
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(posts, projects);
  fs.writeFileSync("public/sitemap.xml", sitemap);
})();