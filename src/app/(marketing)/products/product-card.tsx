import Link from "next/link";
import { ProductsData } from "./products.data";
import Tick from "@/assets/icons/tick.svg";

interface Props extends React.ComponentProps<"div"> {
  item: (typeof ProductsData.items)[number];
}

export const ProductsCard = ({ item, ...props }: Props) => {
  return (
    <div
      {...props}
      className="gap-6 bg-main-gray shadow-lg px-6 md:px-10 py-12 border border-main-black/70 border-b-4 border-b-main-black rounded-3xl"
    >
      {/* Content Section */}
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        {/* Title */}
        <Link
          href={item.website}
          className="font-bold hover:text-main-green text-2xl md:text-3xl text-left underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </Link>

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
                <Tick className="flex-shrink-0 mt-1 w-4 h-4" />
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
                className="bg-main-black px-3 py-1 rounded-lg text-white text-sm"
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
