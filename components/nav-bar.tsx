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
        className={
          "px-5 py-1" +
          " " +
          (selectedCategory === "About"
            ? "font-bold border-b-lightGreen border-b-2"
            : "")
        }
        onClick={() => {
          setSelectedCategory("About");
        }}
      >
        About
      </div>
      <div
        className={
          "px-5 py-1" +
          " " +
          (selectedCategory === "Projects"
            ? "font-bold border-b-lightGreen border-b-2"
            : "")
        }
        onClick={() => {
          setSelectedCategory("Projects");
        }}
      >
        Projects
      </div>
      <div
        className={
          "px-5 py-1" +
          " " +
          (selectedCategory === "Posts"
            ? "font-bold border-b-lightGreen border-b-2"
            : "")
        }
        onClick={() => {
          setSelectedCategory("Posts");
        }}
      >
        Posts
      </div>
      <div className={"px-5 py-1"}>CV</div>
    </div>
  );
};

export default NavBar;
