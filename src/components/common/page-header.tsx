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
        "mx-auto my-8 lg:my-20 mb-3 max-w-screen-lg text-center",
        className
      )}
      {...props}
    >
      <h1 className="mx-auto px-2 rounded-lg w-fit md:w-max font-bold text-main-black text-4xl">
        {title}
      </h1>
      <p className="my-8">{description}</p>
    </div>
  );
};

export default PageHeader;
