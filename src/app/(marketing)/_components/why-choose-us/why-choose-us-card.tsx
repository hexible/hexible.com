import { WhyChooseUsData } from "./why-choose-us.data";

interface Props extends React.ComponentProps<"div"> {
  item: (typeof WhyChooseUsData.items)[number];
}

export const WhyChooseUsCard = ({ item, ...props }: Props) => {
  return (
    <div
      {...props}
      className="border-main-black/70 bg-main-black px-4 md:px-8 py-8 border border-b-4 border-b-main-black rounded-3xl text-white"
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col justify-center items-center">
            <item.icon className="mb-3 w-24 h-24" />
            <p className="p-2 font-bold text-center">{item.heading}</p>
            <p className="text-center text-sm">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
