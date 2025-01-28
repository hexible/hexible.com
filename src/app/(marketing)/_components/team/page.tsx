import { Button } from "@/components";
import { SectionsHeader } from "@/components/common";
import { TeamCard } from "./team-card";
import { teamMemberData } from "./team-member.data";

export const Team = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Team"
        description1="Meet the skilled and experienced team behind our "
        description2="successful software development projects"
      />

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMemberData.map((data) => (
          <TeamCard data={data} key={data.review} />
        ))}
      </div>

      <div className="flex justify-end items-start mt-4">
        <Button>See All Of them </Button>
      </div>
    </div>
  );
};
