import { remark } from "remark";
import html from "remark-html";
import parse from "remark-parse";
import prism from "remark-prism";
import remarkImages from "remark-images";
import { unified } from "unified";
import remarkUnwrapImages from "remark-unwrap-images";

export default function markdownToHtml(markdown: string) {
  const result = remark()
    .use(parse)
    .use(html, { sanitize: false })
    .use(prism)
    .processSync(markdown);
  return String(result);
}
