import BusinessDeal from "@/public/Illustration/business-deal.svg";
import { buttonVariants } from "@/components";
import { AppData } from "@/data/app.data";
import { cn } from "@/utils";
import Link from "next/link";

export const ProposalBanner = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className="items-center grid grid-cols-1 md:grid-cols-2 bg-main-gray my-20 px-10 py-8 rounded-3xl max-h-96"
    >
      <div>
        <h4 className="font-medium text-xl"> Let&apos;s make things happen</h4>
        <p>
          Contact us today to learn more about how our software development
          services can help bring your ideas to life, streamline your
          operations, and drive your business growth through innovative
          technology solutions.
        </p>
        <Link
          href={AppData.getYourProposal.link}
          className={cn(buttonVariants(), "my-4")}
        >
          {AppData.getYourProposal.title}
        </Link>
      </div>

      <div className="hidden md:flex justify-center items-center">
        <BusinessDeal className="relative size-60 scale-125" />
      </div>
    </div>
  );
};
