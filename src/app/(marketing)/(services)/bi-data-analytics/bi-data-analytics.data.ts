import DashboardIcon from "@/assets/icons/dashboard.svg";
import PieChart from "@/assets/icons/pie-chart.svg";
import DataMining from "@/assets/icons/data-mining.svg";
import RealtimeAnalytics from "@/assets/services/data-analytics.svg";
import SecurityAnalytics from "@/assets/icons/security.svg";
import DecisionSupport from "@/assets/icons/decision.svg";

export const BIDataAnalyticsData = {
  title: "BI & Data Analytics",
  description:
    "Utilize Business Intelligence and Data Analytics to uncover valuable insights, enhance operational performance, and empower data-driven decision-making. Our solutions provide real-time analytics, predictive insights, and comprehensive reporting to help your business make informed choices, improve efficiency, and stay competitive in a data-driven world.",
  sections: [
    {
      heading: "BI & Reporting",
      icon: DashboardIcon,
      items: [
        "Interactive Dashboards",
        "Automated Reports",
        "Enterprise Performance",
        "Custom KPI Tracking",
        "Self-Service BI Tools",
      ],
    },
    {
      heading: "Predictive Analytics",
      icon: PieChart,
      items: [
        "Predictive Modeling",
        "Customer Behavior",
        "Real-Time Data Processing",
        "AI Decision Optimization",
        "Risk Assessment & Mgmt",
      ],
    },
    {
      heading: "Big Data Analytics",
      icon: DataMining,
      items: [
        "Data Warehousing & ETL",
        "Scalable Cloud Pipelines",
        "Unstructured Data",
        "High-Volume Data Mining",
        "ML for Big Data",
      ],
    },
    {
      heading: "Real-Time Analytics",
      icon: RealtimeAnalytics,
      items: [
        "Real-Time Monitoring",
        "Event-Driven Systems",
        "IoT Data Processing",
        "Instant Anomaly Detection",
        "Live BI Dashboards",
      ],
    },
    {
      heading: "Data Security",
      icon: SecurityAnalytics,
      items: [
        "Data Governance",
        "Access Control Security",
        "Anomaly Detection",
        "Fraud Prevention AI",
        "GDPR & HIPAA Compliance",
      ],
    },
    {
      heading: "AI Decision Support",
      icon: DecisionSupport,
      items: [
        "AI Business Insights",
        "AI Risk Management",
        "Sales Forecasting AI",
        "AI-Augmented Decisions",
        "Data Correlation AI",
      ],
    },
  ],
};
