import React from 'react'

const Utterances: React.FC = () => (
  <section
    ref={(elem) => {
      if (!elem) {
        return
      }
      const scriptElem = document.createElement('script')
      scriptElem.src = 'https://utteranc.es/client.js'
      scriptElem.async = true
      scriptElem.setAttribute('repo', 'hunkim98/hunkim98.github.io')
      scriptElem.setAttribute('issue-term', 'title')
      scriptElem.setAttribute('theme', 'github-light')
      scriptElem.setAttribute('label', 'blog-comment')
      scriptElem.crossOrigin = 'anonymous'
      elem.appendChild(scriptElem)
    }}
  />
)

{
  /* <script src="https://utteranc.es/client.js"
        repo="hunkim98/hunkim98.github.io"
        issue-term="pathname"
        label="blog-comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script> */
}
export default Utterances
