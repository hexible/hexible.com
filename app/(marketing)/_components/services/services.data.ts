import WebDevelopment from "@/public/services/web-development.svg";
import DataAnalytics from "@/public/services/data-analytics.svg";
import CloudSolutions from "@/public/services/cloud-solutions.svg";
import Maintenance from "@/public/services/maintenance.svg";
import UIUX from "@/public/services/UI.svg";
import AI from "@/public/services/AI-ML.svg";

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
      heading1: "Software",
      heading2: "Development",
      Element: WebDevelopment,
      extantLink: "/software-development",
    },
    {
      heading1: "UI/UX",
      heading2: "Design",
      Element: UIUX,
      extantLink: "/ui-ux-design",
    },
    {
      heading1: "AI/ML",
      heading2: "Integrations",
      Element: AI,
      extantLink: "/ai-ml-integrations",
    },
    {
      heading1: "Cloud",
      heading2: "Solutions",
      Element: CloudSolutions,
      extantLink: "/cloud-solutions",
    },
    {
      heading1: "BI and Data ",
      heading2: "Analytics",
      Element: DataAnalytics,
      extantLink: "/bi-data-analytics",
    },
    {
      heading1: "Software",
      heading2: "Maintenance",
      Element: Maintenance,
      extantLink: "/software-maintenance",
    },
  ],
};
