import { TeamsData } from "./teams.data";

interface Props extends React.ComponentProps<"div"> {
  data: (typeof TeamsData.items)[number];
}

export const TeamCard = ({ data, ...props }: Props) => {
  return (
    <div
      {...props}
      className="border-main-black/70 bg-main-gray px-4 md:px-8 py-4 border border-b-4 border-b-main-black rounded-3xl"
    >
      <div className="flex items-center gap-2">
        {/* <Image src={data.image} alt={data.name} /> */}
        <div className="flex flex-col flex-1 justify-between">
          {/* <a href={data.linkedinUrl} className="self-end">
            <LinkedinIcon />
          </a> */}
          <div>
            <p className="font-bold"> {data.name} </p>
            <p className="text-sm"> {data.position} </p>
          </div>
        </div>
      </div>

      <div className="bg-main-black my-4 w-full h-px"> </div>

      <div>{data.review}</div>
    </div>
  );
};
