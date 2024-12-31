import React, { useEffect, useRef } from 'react'

const Utterances: React.FC = () => {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://utteranc.es/client.js'
    scriptElem.async = true
    scriptElem.setAttribute('repo', 'hunkim98/hunkim98.github.io')
    scriptElem.setAttribute('issue-term', 'title')
    scriptElem.setAttribute('theme', 'github-dark')
    scriptElem.setAttribute('label', 'blog-comment')
    scriptElem.crossOrigin = 'anonymous'

    ref.current.appendChild(scriptElem)
  }, [])
  return (
    <section
      ref={ref}
      //   if (!elem) {
      //     return
      //   }
      //   const scriptElem = document.createElement('script')
      //   scriptElem.src = 'https://utteranc.es/client.js'
      //   scriptElem.async = true
      //   scriptElem.setAttribute('repo', 'hunkim98/hunkim98.github.io')
      //   scriptElem.setAttribute('issue-term', 'title')
      //   scriptElem.setAttribute('theme', 'github-dark')
      //   scriptElem.setAttribute('label', 'blog-comment')
      //   scriptElem.crossOrigin = 'anonymous'
      //   // check if utterance is already loaded
      //   elem.appendChild(scriptElem)
      // }}
    />
  )
}

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
