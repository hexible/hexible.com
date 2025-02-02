import WebDevelopment from "@/assets/services/web-development.svg";
import DataAnalytics from "@/assets/services/data-analytics.svg";
import CloudSolutions from "@/assets/services/cloud-solutions.svg";
import Maintenance from "@/assets/services/maintenance.svg";
import UIUX from "@/assets/services/figma.svg";
import AI from "@/assets/services/AI-ML.svg";

type ServiceType = {
  heading1: string;
  heading2: string;
  Element: typeof WebDevelopment;
  extantLink: string;
};

export const ServicesData: {
  heading: string;
  description1: string;
  description2: string;
  items: ServiceType[];
} = {
  heading: "Services",
  description1: "At Hexible, we offer a range of services to ",
  description2:
    "help businesses build innovative software solutions and achieve success",
  items: [
    {
      heading1: "Web/Mobile",
      heading2: "Development",
      Element: WebDevelopment,
      extantLink: "#",
    },
    {
      heading1: "UI/UX",
      heading2: "Design",
      Element: UIUX,
      extantLink: "#",
    },
    {
      heading1: "AI/ML",
      heading2: "Integrations",
      Element: AI,
      extantLink: "#",
    },
    {
      heading1: "Cloud",
      heading2: "Solutions",
      Element: CloudSolutions,
      extantLink: "#",
    },
    {
      heading1: "BI and",
      heading2: "Data Analytics",
      Element: DataAnalytics,
      extantLink: "#",
    },
    {
      heading1: "Website",
      heading2: "Maintenance",
      Element: Maintenance,
      extantLink: "#",
    },
  ],
};
