import React from "react";
import markdownStyles from "./markdown-styles.module.css";
import { isMainThread } from "worker_threads";
import { MDXRemote } from "next-mdx-remote";
import ProjectComponents from "../../_projects/components";

type Props = {
  isMdx: boolean;
  content: any;
};

const Components = {
  ...ProjectComponents,
};

const PostBody = ({ content, isMdx }: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      {isMdx ? (
        <div className={markdownStyles["markdown"]}>
          <MDXRemote {...(content as any)} components={Components} />
        </div>
      ) : (
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default PostBody;
