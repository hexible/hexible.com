import { SectionsHeader } from "@/components/common";
import { OurValuesData } from "./our-values.data";
import { OurValuesCard } from "./our-values-card";

export const OurValues = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading={OurValuesData.title}
        description1={OurValuesData.description1}
        description2={OurValuesData.description2}
      />

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-main-black p-8 rounded-3xl">
        {OurValuesData.items.map((item) => (
          <OurValuesCard item={item} key={item.heading} />
        ))}
      </div>
    </div>
  );
};
