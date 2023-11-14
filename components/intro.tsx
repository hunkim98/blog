import React from "react";
import { CMS_NAME } from "../lib/constants";
import SocialIcon from "./social-icons";
import { useRouter } from "next/router";

const Intro = () => {
  const router = useRouter();
  return (
    <section className="flex-col flex md:justify-between mt-16 mb-6 md:mb-10">
      {/* <div className="md:pr-8">
        <img
          className="h-[250px] object-cover w-full mb-7 rounded-lg drop-shadow-md"
          src="/assets/profile/dotting_intro.JPG"
        />
      </div> */}
      <h1
        className="cursor-pointer text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8"
        onClick={() => {
          router.push("/");
        }}
      >
        Donghun Kim
      </h1>
      <h4 className="md:text-left text-md mt-5 pr-6">
        I am developer interested in building technologies that encourage people
        to create creative contents
      </h4>
      <div className="mt-[15px] flex space-x-1.5">
        <SocialIcon
          kind="github"
          href={`https://github.com/hunkim98`}
          size={6}
        />
        <SocialIcon
          kind="twitter"
          href={`https://twitter.com/hunkim98`}
          size={6}
        />
        <SocialIcon kind="mail" href={`mailto:hunkim98@gmail.com`} size={6} />
      </div>
    </section>
  );
};

export default Intro;
