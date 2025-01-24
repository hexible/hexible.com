import { SectionsHeader } from "@/components/common";
import { CaseStudiesForLargeDevice } from "./case-studies-for-large-device";
import { CaseStudyForSmallDevice } from "./case-study-for-small-device";

export const CaseStudies = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Case Studies"
        description1="Explore Real-Life Examples of Our Proven Digital Marketing "
        description2="Success through Our Case Studies"
      />
      <CaseStudiesForLargeDevice />
      <CaseStudyForSmallDevice />
    </div>
  );
};
