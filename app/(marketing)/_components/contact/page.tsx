import HalfRing from "@/public/Illustration/half-zig-ring.svg";
import { SectionsHeader } from "@/components/common";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ContactForm } from "./contact-form";
import { ContactData } from "./contact.data";

interface ContactUsProps extends React.ComponentProps<"div"> {
  showHeader?: boolean;
}

export const Contact = ({ showHeader = true, ...props }: ContactUsProps) => {
  return (
    <div {...props}>
      {showHeader && (
        <SectionsHeader
          heading={ContactData.heading}
          description1={ContactData.description1}
          description2={ContactData.description2}
        />
      )}
      <div className="relative bg-main-gray my-4 rounded-3xl min-h-60 overflow-hidden">
        <div className="lg:p-10 px-6 py-8">
          <RadioGroup defaultValue="option-one" className="flex gap-x-5">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Say Hi</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Get a Quote</Label>
            </div>
          </RadioGroup>

          <ContactForm />
          <HalfRing className="hidden lg:block lg:top-[5%] right-0 absolute lg:w-[50%] lg:h-[85%] translate-x-60" />
        </div>
      </div>
    </div>
  );
};
