import { SectionsHeader } from "@/components/common";
import { TechnicalExpertiseData } from "./technical-expertise.data";
import { TechCard } from "./tech-card";

export const TechnicalExpertise = ({
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading={TechnicalExpertiseData.heading}
        description1={TechnicalExpertiseData.description1}
        description2={TechnicalExpertiseData.description2}
      />

      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {TechnicalExpertiseData.items.map((item) => (
          <TechCard item={item} key={item.heading} />
        ))}
      </div>
    </div>
  );
};
