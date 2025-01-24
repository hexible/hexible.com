import { Button, Input } from "@/components/ui";

export const FooterContact = ({ ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props} className="grid grid-cols-1 lg:grid-cols-2 my-8">
      <div className="space-y-3 my-8 text-center md:text-start">
        <h6 className="inline bg-main-green px-2 rounded-lg font-bold text-main-black text-xl">
          Contact Us
        </h6>
        <p>Email: info@hexible.com</p>
        <p>Phone: 555-567-8901</p>
        <p>
          Address: 1234 Main St <br className="md:block hidden" />
          Moonstone City, Stardust State 12345
        </p>
      </div>
      <div className="items-center gap-x-2 gap-y-4 grid grid-cols-1 md:grid-cols-2 bg-[#292A32] p-8 rounded-xl">
        <Input
          placeholder="Email"
          className="border-main-gray bg-[#292A32] py-6 border placeholder:text-lg placeholder:text-main-gray"
        />
        <Button className="bg-main-green hover:bg-white py-6 text-main-black">
          Subscribe to news
        </Button>
      </div>
    </div>
  );
};
