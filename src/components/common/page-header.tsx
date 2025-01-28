import React from "react";
import { cn } from "@/utils";

interface PageHeaderProps extends React.ComponentProps<"div"> {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mx-auto my-8 lg:my-10 mb-3 max-w-screen-md text-center",
        className
      )}
      {...props}
    >
      <h1 className="bg-main-green mx-auto px-2 rounded-lg w-min md:w-max font-bold text-3xl text-main-black text-nowrap md:text-4xl lg:text-3xl">
        {title}
      </h1>
      <p className="my-8">{description}</p>
    </div>
  );
};

export default PageHeader;
