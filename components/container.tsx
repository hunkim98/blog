import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5 max-w-5xl flex-col md:flex-row flex">
      {children}
    </div>
  );
};

export default Container;
