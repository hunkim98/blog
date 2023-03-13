import React from "react";
import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col flex md:justify-between mt-16 mb-6 md:mb-10">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        Hun Kim
      </h1>
      <h4 className="md:text-left text-lg mt-5">
        I build what I want I want to use.
      </h4>
    </section>
  );
};

export default Intro;
