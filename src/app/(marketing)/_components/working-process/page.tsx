import { SectionsHeader } from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WorkingProcessData } from "./working-process.data";

export const WorkingProcess = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props} className="my-10">
      <SectionsHeader
        heading="Our Working Process"
        description1="Step-by-Step Guide to Building"
        description2="Your Software Solutions"
      />

      <div className="my-6">
        <Accordion type="single" collapsible>
          {WorkingProcessData.map((data, index) => (
            <AccordionItem
              value={data.header}
              key={data.header + data.details}
              className="my-4"
            >
              <AccordionTrigger>
                <span className="flex items-center gap-x-4">
                  <span className="text-4xl"> {index + 1} </span>
                  <span className="text-sm lg:text-lg">{data.header}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>{data.details}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
