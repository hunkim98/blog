import React from "react";
import Link from "next/link";

const Header = ({ link, title }: { link: string; title: string }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href={link}>
        <a className="hover:underline">{title}</a>
      </Link>
    </h2>
  );
};

export default Header;
