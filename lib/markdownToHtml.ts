import { remark } from "remark";
import html from "remark-html";
import parse from "remark-parse";
// Use only one syntax highlighter. Here, we choose remark-prism as an example.
import prism from "remark-prism";
import remarkMath from "remark-math";
import unified from "unified";
import htmlKatex from "remark-html-katex";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

export default function markdownToHtml(markdown: string) {
  const result = remark()
    .use(parse)
    .use(remarkMath)
    // Ensure math is processed before converting to HTML.
    // Now convert to HTML without sanitizing to keep the math HTML intact.
    .use(htmlKatex)
    .use(html, { sanitize: false })
    // Finally, apply syntax highlighting.
    .use(prism, { plugins: ["line-numbers"] })
    .processSync(markdown);
  return String(result);
}
