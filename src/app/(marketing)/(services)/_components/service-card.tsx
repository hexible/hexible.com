import { AIMLIntegrationsData } from "../ai-ml-integrations/ai-ml-integrations.data";
import Tick from "@/assets/icons/tick.svg";

interface Props extends React.ComponentProps<"div"> {
  data: (typeof AIMLIntegrationsData.sections)[number];
}

export const ServiceCard = ({ data, ...props }: Props) => {
  return (
    <div
      {...props}
      className="border-main-black/70 px-4 md:px-8 py-12 border border-b-4 border-b-main-black rounded-3xl"
    >
      <div className="flex flex-col items-center">
        <data.icon className="mb-4 w-24 h-24" />
        <p className="mb-4 font-bold text-center text-xl">{data.heading}</p>
        <div className="flex flex-col gap-2 w-full">
          {data.items.map((item) => (
            <div key={item} className="flex items-center">
              <div className="flex-shrink-0 mr-2 w-5 h-5">
                <Tick className="w-full h-full" />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
