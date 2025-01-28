import { CompanyFooterNavigationData, LegalFooterNavigationData } from "@/data";
import Link from "next/link";

export const FooterContactAndLinks = ({
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div {...props} className="grid grid-cols-1 md:grid-cols-4 my-8">
      <div className="space-y-3 md:col-span-2 my-4 text-center md:text-start">
        <h6 className="font-bold text-xl">Contact Us</h6>
        <p>Email: contact@hexible.com</p>
        <p>Phone: +91 8800100101, +91 9992244008</p>
        <p>
          Address: D160, Siddharth Nagar, <br className="md:block hidden" />
          Jaipur City, Rajasthan, India 302017
        </p>
      </div>
      <div className="md:block space-y-3 hidden my-4 text-center md:text-start">
        <h6 className="font-bold text-xl">Company</h6>
        <div className="flex flex-col my-1">
          {CompanyFooterNavigationData.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="py-1 hover:text-main-green underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-3 my-4 text-center md:text-start">
        <h6 className="font-bold text-xl">Legal</h6>
        <div className="flex flex-col my-1">
          {LegalFooterNavigationData.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="py-1 hover:text-main-green underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
