import React from "react";
import cn from "classnames";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  // this will later change to create random svgs
  // do not erase it yet
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={"hover:shadow-lg transition-shadow duration-200 rounded-t-lg"}
      // className={cn("shadow-sm", {
      //   "hover:shadow-lg transition-shadow duration-200": slug,
      // })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/projects/${slug}`} href="/projects/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
