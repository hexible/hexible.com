export const ProjectsData = {
  title: "Projects We Have Delivered",
  description:
    "Explore the diverse range of products we have developed for our clients. Discover how we have helped businesses achieve their goals by delivering high-quality software solutions tailored to their unique needs. From quick development support to dedicated teams, our portfolio showcases our expertise and commitment to excellence.",
  items: [
    {
      title: "Linkscout",
      website: "https://linkscout.com",
      description:
        "Automate internal SEO linking effortlessly with LinkScout. Save hundreds of hours by eliminating the manual search for internal link opportunities! LinkScout scans all your content, leverages AI-driven analysis to identify optimal internal links, and seamlessly inserts them—boosting your SEO and site structure with minimal effort. 🚀",
      tech: ["Ruby on Rails", "ChatGPT APIs", "Postgres", "Stripe"],
      highlights: [
        "Enhanced internal linking algorithm to optimize link distribution, improve SEO performance, and boost site ranking efficiency.",
        "Developed automated email workflows to remind trial users to subscribe, leading to increased conversion rates and improved customer retention.",
        "Integrated Stripe with support for multiple subscription plans, enabling seamless payment processing, invoicing, and recurring billing management.",
        "Redesigned and optimized the user interface with an improved layout, better accessibility, and smoother navigation for an enhanced user experience.",
        "Built a comprehensive analytics dashboard to track LinkScout-generated link performance, user engagement, click-through rates, and other key metrics in real time.",
      ],
    },
    {
      title: "PlanPlusOnline",
      website: "https://planplusonline.com",
      description:
        "PlanPlusOnline is a legacy CRM designed to enhance productivity with essential organizational tools. It offers contact management, task tracking, and calendar integration, helping businesses streamline their workflows. With valuable planning features and a proven productivity system, it enables users to build a culture of efficiency and stay organized.",
      tech: ["Java", "Javascript", "MySQL", "Angular 19", "AWS", "Docker"],
      highlights: [
        "Consolidated 8 underutilized VMs, each running a single application instance, into a single VM using Docker with 8 containers. This optimization significantly reduced infrastructure complexity and slashed costs from $8,000 to $2,000 per month.",
        "Upgraded MySQL from version 5 to 8, improving database performance, security, and compatibility with modern applications.",
        "Merged 4 RDS instance databases into a single RDS with multiple schemas, optimizing resource utilization and further reducing operational costs.",
        "Archived 15 years of historical data, reducing database storage by multiple terabytes, enhancing query performance and backup efficiency.",
        "Optimized application architecture and query performance, achieving a 300% improvement in speed and responsiveness.",
        "Integrated Google and Microsoft calendar synchronization, enabling seamless scheduling and enhanced productivity for users.",
        "Implemented social authentication with Google and Apple login, simplifying user onboarding and improving security with OAuth-based authentication.",
      ],
    },
    {
      title: "Pocket Informant",
      website: "https://pocketinformant.com",
      description:
        "Pocket Informant is a powerful productivity app that combines task management, calendar scheduling, contacts, and notes in one seamless platform. Designed for professionals and individuals, it offers robust planning features, smart organization tools, and cross-platform syncing to keep users on top of their schedules and commitments.",
      tech: [
        "Python",
        "Google Datastore",
        "Angular 19",
        "Redis",
        "Google Cloud Platform",
      ],
      highlights: [
        "Implemented calendarization with customizable recurrence options for events and tasks, allowing users to schedule repeating activities effortlessly.",
        "Introduced teams support, enabling multi-user collaboration with shared tasks, calendars, and real-time updates.",
        "Added comprehensive logging across the entire application, improving troubleshooting, error tracking, and system monitoring.",
        "Integrated social authentication with Google and Apple, simplifying the login process and enhancing security with OAuth-based authentication.",
        "Created pixel-perfect designs, ensuring a visually appealing and consistent user experience across all devices.",
        "Implemented JWT-based authentication and authorization, enhancing security and access control for users.",
      ],
    },
  ],
};
