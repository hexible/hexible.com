import { FooterContactAndLinks } from "./footer-contact-and-links";
import { FooterCopyright } from "./footer-copyright";
import { FooterHeader } from "./footer-header";

export const Footer = ({ ...props }: React.ComponentProps<"footer">) => {
  return (
    <footer
      {...props}
      className="bg-main-black mt-10 px-2 md:p-8 pt-4 rounded-t-3xl text-main-gray container"
    >
      <FooterHeader />
      <FooterContactAndLinks />
      <FooterCopyright />
    </footer>
  );
};
