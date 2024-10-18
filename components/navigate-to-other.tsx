import React from 'react'

type Props = {
  prevTitle?: string
  nextTitle?: string
  prevPath?: string
  nextPath?: string
}

function NavigateToOther({ prevTitle, nextTitle, prevPath, nextPath }: Props) {
  return (
    <div className="flex justify-between w-full mb-20 flex-wrap">
      {prevTitle && (
        <a
          href={prevPath}
          className="bg-white rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md p-3 mb-3"
        >
          <div>Previous</div>
          <div className="text-sm font-bold text-left">← {prevTitle}</div>
        </a>
      )}
      {nextTitle && (
        <a
          href={nextPath}
          className="ml-auto bg-white rounded-lg md:hover:scale-[1.01] transition hover:shadow-lg duration-200 cursor-pointer drop-shadow-md p-3 mb-3"
        >
          <div className="text-right">Next</div>
          <div className="text-sm font-bold text-right">{nextTitle} →</div>
        </a>
      )}
    </div>
  )
}

export default NavigateToOther
