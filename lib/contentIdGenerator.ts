export function contentIdGenerator({ slug, type }) {
  return `${type}-${slug}`
}
