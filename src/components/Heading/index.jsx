import React from "react";

const sizes = {
  texts: "text-base font-medium",
  headingxs: "text-sm font-semibold",
  headings: "text-base font-semibold",
  headingmd: "text-lg font-semibold",
  headinglg: "text-2xl font-semibold md:text-[22px]",
  headingxl: "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
};

const Heading = ({ children, className = "", size = "texts", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-qanelassoft ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
