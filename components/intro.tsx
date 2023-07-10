import React from "react";
import { CMS_NAME } from "../lib/constants";
import SocialIcon from "./social-icons";
import { useRouter } from "next/router";

const Intro = () => {
  const router = useRouter();
  return (
    <section className="flex-col flex md:justify-between mt-16 mb-6 md:mb-10">
      <h1
        className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8"
        onClick={() => {
          router.push("/");
        }}
      >
        Hun Kim
      </h1>
      <h4 className="md:text-left text-md mt-5 pr-6">
        I am a developer driven by the desire to create services that enable
        people to perceive their surrounding worlds in unique and transformative
        ways
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
        {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" /> */}
        {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" /> */}
        {/* <SocialIcon
          kind="linkedin"
          href={`https://www.linkedin.com/in/hun-kim-2b290a223`}
          size={6}
        /> */}
      </div>
    </section>
  );
};

export default Intro;
