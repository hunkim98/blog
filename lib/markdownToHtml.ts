import { remark } from "remark";
import html from "remark-html";
import parse from "remark-parse";
// Use only one syntax highlighter. Here, we choose remark-prism as an example.
import prism from "remark-prism";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkHighlight from "remark-highlight.js";

export default function markdownToHtml(markdown: string) {
  const result = remark()
    .use(parse)
    .use(remarkMath)
    // Ensure math is processed before converting to HTML.
    // Now convert to HTML without sanitizing to keep the math HTML intact.
    // .use(htmlKatex)
    .use(prism, { plugins: ["line-numbers"] })
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(html, { sanitize: false })
    // Finally, apply syntax highlighting.

    .use(rehypeStringify)
    .processSync(markdown);
  return String(result);
}
