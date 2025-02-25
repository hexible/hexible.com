import { AboutData } from "./about.data";

interface Props extends React.ComponentProps<"div"> {
  item: (typeof AboutData.sections)[number];
}

export const AboutCard = ({ item, ...props }: Props) => {
  return (
    <div
      {...props}
      className="grid grid-cols-1 md:grid-cols-5 bg-main-gray px-6 md:px-10 py-12 rounded-3xl"
    >
      <div
        className={`flex justify-center items-center col-span-2 mb-8 md:mb-0`}
      >
        <item.icon className="w-32 md:w-48 h-32 md:h-48" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 col-span-3">
        <div className="flex flex-col justify-between space-y-5 w-full">
          <span className="font-bold text-2xl text-center">{item.heading}</span>
        </div>
        <p className="py-1 text-center">{item.description}</p>
      </div>
    </div>
  );
};
