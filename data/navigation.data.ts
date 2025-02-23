export interface NavigationItem {
  label: string;
  link: string;
  children?: NavigationItem[];
}

export const HeaderNavigationData: NavigationItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Services",
    link: "",
    children: [
      {
        label: "Software Development",
        link: "/services/software-development",
      },
      {
        label: "UI/UX Design",
        link: "/services/ui-ux-design",
      },
      {
        label: "AI/ML Integrations",
        link: "/services/ai-ml-integrations",
      },
      {
        label: "Cloud Solutions",
        link: "/services/cloud-solutions",
      },
      {
        label: "BI & Data Analytics",
        link: "/services/bi-data-analytics",
      },
      {
        label: "Software Maintenance",
        link: "/services/software-maintenance",
      },
    ],
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
  {
    label: "Blogs",
    link: "/blogs",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const LegalFooterNavigationData = [
  {
    label: "Cookies Policy",
    link: "/cookies-policy",
  },
  {
    label: "Terms of Service",
    link: "/terms-of-service",
  },
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
];

export const CompanyFooterNavigationData = [
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
  {
    label: "Blogs",
    link: "/blogs",
  },
];
