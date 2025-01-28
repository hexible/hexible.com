import HalfRing from "@/assets/Illustration/halh-ring-with-starts.svg";
import { SectionsHeader } from "@/components/common";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ContactForm } from "./contact-form";

export const ContactUs = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Contact Us"
        description1="Connect with Us: Let's Discuss Your"
        description2="Software Development Needs"
      />

      <div className="relative bg-main-gray my-4 rounded-3xl min-h-60 overflow-hidden">
        <div className="px-6 py-8 lg:p-10">
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
          <HalfRing className="lg:block lg:top-[5%] right-0 absolute hidden lg:w-[50%] lg:h-[85%] translate-x-60" />
        </div>
      </div>
    </div>
  );
};
