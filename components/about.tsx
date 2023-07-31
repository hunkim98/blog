import React from "react";

const About = () => {
  return (
    <section className="md:ml-[300px] pb-[100px] px-2">
      {/* <div className="px-2"> */}
      <img
        className="h-[300px] object-cover w-full mb-7 rounded-lg drop-shadow-md"
        src="/assets/profile/dotting_intro.JPG"
      />
      {/* </div> */}
      <p className="mb-7 text-lg">
        Hello!🌱 I am a developer driven by the desire to create services that
        enable people to perceive their surrounding worlds in unique and
        transformative ways. My primary platform for sharing my ideas and
        innovations is the web. With a background in Computer Science and Visual
        Communication Design from Seoul National University, I am an
        enthusiastic developer dedicated to crafting productive and
        user-friendly products.
      </p>
      <p className="mb-7 text-lg">
        My particular focus lies in the integration of technology into human
        workflows. I am actively learning and researching methods to enhance
        human endeavors through computer technology.
      </p>
      <a href="https://github.com/hunkim98" className="underline">
        Visit my Gihub to see what I do!
      </a>
    </section>
  );
};

export default About;
