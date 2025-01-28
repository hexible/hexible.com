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
          Your Vision, <br /> Perfectly Engineered
        </h1>
        <h2 className="my-4">
          10x your revenue with a better digital presence, web design, and app
          development solutions that engage your visitors like never before.
          Book a free consultancy call to know how we helped hundreds like you
          scale from zero to millions with better web solutions.
        </h2>
        <Link
          href={AppData.consultation.link}
          className={cn(buttonVariants())}
          target="_blank"
          rel="noopener noreferrer"
        >
          {AppData.consultation.title}
        </Link>
      </div>

      <div className="md:block flex justify-center items-center hidden">
        <HeroImg className="w-full h-72" />
      </div>
    </main>
  );
};
