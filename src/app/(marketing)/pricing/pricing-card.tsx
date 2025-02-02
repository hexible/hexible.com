import { Button } from "@/components";
import Tick from "@/assets/icons/tick.svg";
interface Props extends React.ComponentProps<"div"> {
  title: string;
  pricing: string;
  priceType: string;
  description: string;
  features: string[];
}

export const PricingCard = ({
  title,
  pricing,
  priceType,
  description,
  features,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className="border-main-black/70 shadow-lg px-6 md:px-10 py-12 border border-b-4 border-b-main-black rounded-3xl"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between space-y-5 w-full">
          <span className="font-bold text-2xl">{title}</span>
          <div className="flex items-center gap-2 text-sm">
            {priceType.toLowerCase().includes("fixed price") ? null : (
              <span>Starts from</span>
            )}
            <span className="font-bold text-main-green text-xl">{pricing}</span>
          </div>
        </div>
        <p className="py-1">{description}</p>
        <Button className="px-8 w-full">Ready to go</Button>
        <div className="pt-6">
          {features.map((feature) => (
            <p key={feature} className="py-1">
              <Tick className="inline-block mr-2 w-5 h-5" />
              {feature}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
