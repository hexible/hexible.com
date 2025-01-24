import Link from "next/link";

export const FooterCopyright = ({ ...props }: React.ComponentProps<"div">) => {
  const fulllYear = new Date().getFullYear();
  return (
    <div {...props}>
      <div className="bg-main-gray/30 my-8 rounded-xl h-1"></div>
      <div className="flex md:flex-row flex-col md:justify-center lg:justify-start items-center gap-x-10 pb-8 md:pb-0">
        <p className="text-center text-sm md:text-base">
          © {fulllYear} Hexible. All Rights Reserved.
        </p>
        <Link href="/" className="hover:text-main-green underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};
