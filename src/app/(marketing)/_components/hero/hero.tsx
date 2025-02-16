import HeroImg from "@/assets/Illustration/hero.svg";
import { buttonVariants } from "@/components/ui";
import { AppData } from "@/data/app.data";
import { cn } from "@/utils";
import Link from "next/link";

export const Hero = ({ ...rest }: React.ComponentProps<"main">) => {
  return (
    <main
      className="justify-between items-center grid grid-cols-1 lg:grid-cols-3 mt-16 md:mt-24 h-full"
      {...rest}
    >
      <div className="space-y-6 lg:col-span-2">
        <h1 className="font-extrabold text-3xl md:text-6xl text-center lg:text-start leading-tight">
          {AppData.taglinePart1}, <br /> {AppData.taglinePart2}
        </h1>
        <h2 className="my-4 md:text-lg text-center lg:text-start">
          {AppData.longDescription}
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-6">
          <Link
            href={AppData.requestQuote.link}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "w-full md:w-auto px-6"
            )}
          >
            {AppData.requestQuote.title}
          </Link>
          <Link
            href={AppData.consultation.link}
            className={cn(buttonVariants(), "w-full md:w-auto px-6")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {AppData.consultation.title}
          </Link>
        </div>
      </div>

      <div className="hidden lg:block justify-center items-center lg:col-span-1">
        <HeroImg className="w-full h-80" />
      </div>
    </main>
  );
};
