import { Text } from '@mantine/core'
import Headline from './cv/Headline'
import React from 'react'

const About = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      {/* <div className="px-2"> */}
      {/* <img
        className="h-[300px] object-cover w-full mb-7 rounded-lg drop-shadow-md"
        src="/assets/profile/dotting_intro.JPG"
      /> */}
      {/* </div> */}
      <Headline />
      <a href="https://github.com/hunkim98" className="underline">
        Visit my Gihub to see what I do!
      </a>
    </section>
  )
}

export default About
