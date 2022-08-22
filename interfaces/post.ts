import type Author from "./author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  author: Author;
  excerpt: string;
  content: string;
  categories: string[];
  keyword: string;
};

export default PostType;
