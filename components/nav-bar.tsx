import React from "react";
import Link from "next/link";

const NavBar = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="md:ml-[300px] flex mt-16 mb-6 md:mb-7 md:gap-10 gap-6 overflow-auto select-none">
      <div
        className={
          "cursor-pointer md:px-5 py-1" +
          " " +
          (selectedCategory === "about"
            ? "font-bold border-b-lightGreen border-b-2"
            : "")
        }
        onClick={() => {
          setSelectedCategory("about");
        }}
      >
        About
      </div>
      <div
        className={
          "cursor-pointer md:px-5 py-1" +
          " " +
          (selectedCategory === "projects"
            ? "font-bold border-b-lightGreen border-b-2"
            : "")
        }
        onClick={() => {
          setSelectedCategory("projects");
        }}
      >
        Projects
      </div>
      <div
        className={
          "cursor-pointer md:px-5 py-1" +
          " " +
          (selectedCategory === "posts"
            ? "font-bold border-b-lightGreen border-b-2"
            : "")
        }
        onClick={() => {
          setSelectedCategory("posts");
        }}
      >
        Posts
      </div>
      <div className={"cursor-pointer md:px-5 py-1"}>CV</div>
    </div>
  );
};

export default NavBar;
