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
        link: "/software-development",
      },
      {
        label: "UI/UX Design",
        link: "/ui-ux-design",
      },
      {
        label: "AI/ML Integrations",
        link: "/ai-ml-integrations",
      },
      {
        label: "Cloud Solutions",
        link: "/cloud-solutions",
      },
      {
        label: "BI & Data Analytics",
        link: "/bi-data-analytics",
      },
      {
        label: "Software Maintenance",
        link: "/software-maintenance",
      },
    ],
  },
  {
    label: "Pricing",
    link: "/pricing",
  },
  // {
  //   label: "Blogs",
  //   link: "/blogs",
  // },
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
