import Link from "next/link";
import { ProjectsData } from "./projects.data";
import Tick from "@/assets/icons/tick.svg";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
  item: (typeof ProjectsData.items)[number];
}

export const ProjectCard = ({ item, ...props }: Props) => {
  return (
    <div
      {...props}
      className="gap-6 bg-main-gray px-6 md:px-10 py-12 rounded-3xl"
    >
      {/* Content Section */}
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-2 md:mb-2 w-full">
          {/* Title */}
          <span className="font-bold text-2xl md:text-3xl">{item.title}</span>

          {/* Website Link Button */}
          <Link href={item.website} target="_blank" rel="noopener noreferrer">
            <span className={cn("text-main-black text-sm underline")}>
              Visit Website
            </span>
          </Link>
        </div>

        {/* Description */}
        <p className="text-main-black text-left leading-relaxed">
          {item.description}
        </p>

        {/* Highlights (Full Width) */}
        <div className="space-y-2 col-span-full w-full">
          <span className="block font-bold text-main-black text-lg">
            Project highlights
          </span>
          <div className="gap-2 grid">
            {item.highlights.map((highlight, idx) => (
              <div key={item.title + idx} className="flex items-start">
                <Tick className="flex-shrink-0 mt-1 w-5 h-5" />
                <p className="ml-2 text-main-black">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-3 w-full">
          <span className="font-bold text-main-black text-lg">Tech stack</span>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech, idx) => (
              <span
                key={tech + idx}
                className="px-3 py-1 border border-main-black rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
