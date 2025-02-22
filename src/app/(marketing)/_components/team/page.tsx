import { Button } from "@/src/components";
import { SectionsHeader } from "@/src/components/common";
import { TeamCard } from "./team-card";
import { TeamsData } from "./teams.data";

export const Team = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading={TeamsData.heading}
        description1={TeamsData.description1}
        description2={TeamsData.description2}
      />

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {TeamsData.items.map((data) => (
          <TeamCard data={data} key={data.review} />
        ))}
      </div>

      <div className="flex justify-end items-start mt-4">
        <Button>See All Of them </Button>
      </div>
    </div>
  );
};
