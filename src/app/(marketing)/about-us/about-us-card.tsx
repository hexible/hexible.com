import { AboutUsData } from "./about-us.data";

interface Props extends React.ComponentProps<"div"> {
  item: (typeof AboutUsData.sections)[number];
  index: number;
}

export const AboutUsCard = ({ item, index, ...props }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <div
      {...props}
      className="border-main-black/70 grid grid-cols-1 md:grid-cols-5 shadow-lg px-6 md:px-10 py-12 border border-b-4 border-b-main-black rounded-3xl"
    >
      <div
        className={`flex justify-center items-center col-span-2 mb-8 md:mb-0 ${isEven ? "" : "md:order-last"}`}
      >
        <item.icon className="w-64 h-64" />
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
