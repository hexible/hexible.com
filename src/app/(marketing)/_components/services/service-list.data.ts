import Img5 from "@/assets/Illustration/browser-windows-with-different-information 1.svg";
import StarEmoticon from "@/assets/Illustration/emoticon-likes-and-stars-around 2.svg";
import MobileDevelopment from "@/assets/services/mobile-development.svg";
import SendingMessage from "@/assets/Illustration/sending-messages-from-one-place-to-another 1.svg";
import VolumetricAnalytics from "@/assets/Illustration/volumetric-analytics-of-different-types-in-web-browsers 2.svg";
import Img1 from "@/assets/Illustration/web-search-with-elements 2.svg";

type ServiceType = {
  heading1: string;
  heading2: string;
  Element: typeof MobileDevelopment;
  extantLink: string;
  bgColor: "gray" | "green" | "black";
};

export const serviceList: ServiceType[] = [
  {
    heading1: "Web/Mobile",
    heading2: "Development",
    Element: Img1,
    bgColor: "gray",
    extantLink: "#",
  },
  {
    heading1: "UI/UX",
    heading2: "Design",
    Element: MobileDevelopment,
    bgColor: "green",
    extantLink: "#",
  },
  {
    heading1: "AI/ML",
    heading2: "Integrations",
    Element: StarEmoticon,
    bgColor: "black",
    extantLink: "#",
  },
  {
    heading1: "Cloud",
    heading2: "DevOps",
    Element: SendingMessage,
    bgColor: "green",
    extantLink: "#",
  },
  {
    heading1: "No-Code/Low-Code",
    heading2: "Development",
    Element: Img5,
    bgColor: "black",
    extantLink: "#",
  },
  {
    heading1: "Website",
    heading2: "Maintenance",
    Element: VolumetricAnalytics,
    bgColor: "gray",
    extantLink: "#",
  },
];
