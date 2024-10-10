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
import remarkImages from "remark-images";
import remarkUnwrapImages from "remark-unwrap-images";

export default function markdownToHtml(markdown: string) {
  const result = remark()
    .use(parse)
    .use(html, { sanitize: false })
    .use(remarkMath)
    // Ensure math is processed before converting to HTML.
    // Now convert to HTML without sanitizing to keep the math HTML intact.
    .use(prism, { plugins: ["line-numbers"] })
    .use(remarkRehype)
    .use(remarkUnwrapImages)
    .use(rehypeKatex)
    .use(remarkImages)
    // Finally, apply syntax highlighting.

    .use(rehypeStringify)
    .processSync(markdown);
  return String(result);
}
