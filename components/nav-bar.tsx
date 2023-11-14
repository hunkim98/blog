import React from "react";
import Link from "next/link";

const NavBar = ({ selectedCategory }: { selectedCategory: string }) => {
  return (
    <div className="md:ml-[300px] flex mt-16 mb-6 md:mb-7 md:gap-10 gap-6 overflow-auto select-none">
      <Link href={"/"}>
        <div
          className={
            "cursor-pointer md:px-5 py-1" +
            " " +
            (selectedCategory === "about"
              ? "font-bold border-b-lightGreen border-b-2"
              : "")
          }
        >
          About
        </div>
      </Link>
      <Link href={"/projects"}>
        <div
          className={
            "cursor-pointer md:px-5 py-1" +
            " " +
            (selectedCategory === "projects"
              ? "font-bold border-b-lightGreen border-b-2"
              : "")
          }
        >
          Projects
        </div>
      </Link>
      <Link href={"/posts"}>
        <div
          className={
            "cursor-pointer md:px-5 py-1" +
            " " +
            (selectedCategory === "posts"
              ? "font-bold border-b-lightGreen border-b-2"
              : "")
          }
        >
          Posts
        </div>
      </Link>
      <Link href={"assets/blog/cv/HunKim_CV.pdf"}>
        <div className={"cursor-pointer md:px-5 py-1"}>CV</div>
      </Link>
    </div>
  );
};

export default NavBar;
