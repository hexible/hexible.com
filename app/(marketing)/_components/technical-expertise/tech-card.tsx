import { TechnicalExpertiseData } from "./technical-expertise.data";

interface Props extends React.ComponentProps<"div"> {
  item: (typeof TechnicalExpertiseData.items)[number];
}

export const TechCard = ({ item, ...props }: Props) => {
  return (
    <div
      {...props}
      className="border-main-black/70 px-4 md:px-8 py-4 border border-b-4 border-b-main-black rounded-3xl"
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col justify-center items-center">
            <item.icon className="w-12 h-12" />
            <p>{item.heading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
