import { ContactLinksData } from "@/src/data/contact-links.data";
import React from "react";
import { SocialIcon } from "react-social-icons";

export const SocialIcons: React.FC = () => {
  return (
    <>
      {ContactLinksData.map((item) => (
        <SocialIcon
          style={{ height: 30, width: 30 }}
          key={item.name}
          url={item.url}
          bgColor="#ffffff"
          fgColor="#1a1a24"
        />
      ))}
    </>
  );
};
