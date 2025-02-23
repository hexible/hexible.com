import { SectionsHeader } from "@/components/common";
import { CaseStudiesForLargeDevice } from "./case-studies-for-large-device";
import { CaseStudyForSmallDevice } from "./case-study-for-small-device";
import { CaseStudyData } from "./case-study.data";

export const CaseStudies = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading={CaseStudyData.heading}
        description1={CaseStudyData.description1}
        description2={CaseStudyData.description2}
      />
      <CaseStudiesForLargeDevice />
      <CaseStudyForSmallDevice />
    </div>
  );
};
