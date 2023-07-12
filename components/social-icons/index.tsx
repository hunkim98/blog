import Mail from "./mail.svg";
import Github from "./github.svg";
// import Facebook from "./facebook.svg";
// import Youtube from "./youtube.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";
import React from "react";
import Image from "next/image";

// Icons taken from: https://simpleicons.org/

const components = {
  mail: "/assets/icons/mail.svg",
  github: "/assets/icons/github.svg",
  // facebook: Facebook,
  // youtube: Youtube,
  linkedin: "/assets/icons/linkedin.svg",
  twitter: "/assets/icons/twitter.svg",
};

const SocialIcon = ({
  kind,
  href,
  size = 8,
}: {
  kind: string;
  href: string;
  size: number;
}) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  // return null;

  return (
    <a
      className="opacity-20 transition hover:opacity-100"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Image src={SocialSvg} width={25} height={25} />
      {/* <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      /> */}
    </a>
  );
};

export default SocialIcon;
