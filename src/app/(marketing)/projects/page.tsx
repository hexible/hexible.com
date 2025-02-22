import PageHeader from "@/src/components/common/page-header";
import { Metadata } from "next";
import { ProjectsData } from "./projects.data";
import { ProjectCard } from "./project-card";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: ProjectsData.title,
  description: ProjectsData.description,
};

export default function ClientProjects() {
  return (
    <div className="space-y-16 container">
      <PageHeader
        title={ProjectsData.title}
        description={ProjectsData.description}
      />
      <div className="gap-8 grid grid-cols-1">
        {ProjectsData.items.map((data) => (
          <ProjectCard key={data.title} item={data} />
        ))}
      </div>
    </div>
  );
}
