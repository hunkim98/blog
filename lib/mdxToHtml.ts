import { serialize } from 'next-mdx-remote/serialize'
import { renderToString } from 'react-dom/server'
import * as runtime from 'react/jsx-runtime.js'
import rehypeHighlight from 'rehype-highlight'
import { evaluateSync } from '@mdx-js/mdx'
import rehypeKatex from 'rehype-katex'
import { compile } from '@mdx-js/mdx'
import { createElement } from 'react'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

export function mdxToHtml(body: string) {
  const mdx = serialize(body, {
    ...(runtime as any),
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  })

  return String(mdx)
}
