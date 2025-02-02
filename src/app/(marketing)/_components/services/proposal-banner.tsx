import BusinessDeal from "@/assets/Illustration/business-deal.svg";
import { Button } from "@/components";

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
        <Button className="my-4">Get your free proposal</Button>
      </div>

      <div className="md:flex justify-center items-center hidden">
        <BusinessDeal className="relative scale-125 size-60" />
      </div>
    </div>
  );
};
