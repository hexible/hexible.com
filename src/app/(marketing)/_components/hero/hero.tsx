import HeroImg from "@/assets/Illustration/hero.svg";
import { buttonVariants } from "@/components/ui";
import { AppData } from "@/data/app.data";
import { cn } from "@/utils";
import Link from "next/link";

export const Hero = ({ ...rest }: React.ComponentProps<"main">) => {
  return (
    <main
      className="justify-between items-center grid grid-cols-1 md:grid-cols-2 my-10 md:my-12 h-full"
      {...rest}
    >
      <div>
        <h1 className="font-extrabold text-3xl md:text-4xl leading-tight">
          {AppData.taglinePart1}, <br /> {AppData.taglinePart2}
        </h1>
        <h2 className="my-4">{AppData.longDescription}</h2>
        <Link
          href={AppData.consultation.link}
          className={cn(buttonVariants())}
          target="_blank"
          rel="noopener noreferrer"
        >
          {AppData.consultation.title}
        </Link>
      </div>

      <div className="md:block justify-center items-center hidden">
        <HeroImg className="w-full h-72" />
      </div>
    </main>
  );
};
