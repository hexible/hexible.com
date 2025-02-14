import { OurValuesData } from "./our-values.data";

interface Props extends React.ComponentProps<"div"> {
  item: (typeof OurValuesData.items)[number];
}

export const OurValuesCard = ({ item, ...props }: Props) => {
  return (
    <div
      {...props}
      className="bg-white px-4 md:px-8 py-4 border border-main-black/70 border-b-4 border-b-main-black rounded-3xl"
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col justify-center items-center">
            <item.icon className="w-16 h-16" />
            <p className="p-1 font-semibold text-lg">{item.heading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
