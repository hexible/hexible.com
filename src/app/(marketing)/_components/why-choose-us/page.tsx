import { SectionsHeader } from "@/src/components/common";
import { WhyChooseUsData } from "./why-choose-us.data";
import { WhyChooseUsCard } from "./why-choose-us-card";

export const WhyChooseUs = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading={WhyChooseUsData.heading}
        description1={WhyChooseUsData.description1}
        description2={WhyChooseUsData.description2}
      />

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {WhyChooseUsData.items.map((item) => (
          <WhyChooseUsCard item={item} key={item.heading} />
        ))}
      </div>
    </div>
  );
};
