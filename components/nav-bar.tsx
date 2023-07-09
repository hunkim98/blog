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
    <div className="md:ml-[300px] flex mt-16 mb-6 md:mb-7 gap-10">
      <div
        className={"" + (selectedCategory === "About" ? "font-bold" : "")}
        onClick={() => {
          setSelectedCategory("About");
        }}
      >
        About
      </div>
      <div
        className={"" + (selectedCategory === "Projects" ? "font-bold" : "")}
        onClick={() => {
          setSelectedCategory("Projects");
        }}
      >
        Projects
      </div>
      <div
        className={"" + (selectedCategory === "Posts" ? "font-bold" : "")}
        onClick={() => {
          setSelectedCategory("Posts");
        }}
      >
        Posts
      </div>
      <div>CV</div>
    </div>
  );
};

export default NavBar;
