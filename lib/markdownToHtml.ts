import { remark } from "remark";
import html from "remark-html";
import parse from "remark-parse";
import prism from "remark-prism";
import remark2rehype from "remark-rehype";
import remarkImages from "remark-images";
import { unified } from "unified";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkHighlightjs from "remark-highlight.js";

export default function markdownToHtml(markdown: string) {
  const result = remark()
    .use(parse)
    .use(html, { sanitize: false })
    .use(prism, { plugins: ["line-numbers"] })
    .use(remarkHighlightjs)
    .processSync(markdown);
  return String(result);
}
