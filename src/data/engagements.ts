export type Engagement = {
  index: string;
  title: string;
  industry: string;
  challengeLead?: string;
  challenge: string[];
  solutionLead?: string;
  solution: string[];
  impact: string[];
  technology: string[];
  href?: string;
};

export const featuredEngagements: Engagement[] = [
  {
    index: "01",
    title: "Digital Transformation for a Leading Family Lawyer",
    industry: "Legal Services",
    challengeLead:
      "The client had a fragmented digital presence and significant administrative workload.",
    challenge: [
      "No modern website",
      "Manual tracking of legal fees",
      "Time-consuming drafting of petitions",
      "Knowledge spread across years of experience rather than systems",
    ],
    solutionLead: "I designed and implemented an end-to-end digital ecosystem.",
    solution: [
      "Professional SEO-optimized website",
      "Revenue & receivables management system",
      "AI legal drafting assistant trained on legal workflows",
      "AI-assisted legal strategy framework for case preparation",
    ],
    impact: [
      "Reduced administrative effort",
      "Faster petition drafting",
      "Improved cash collection visibility",
      "Standardized legal knowledge into repeatable AI workflows",
    ],
    technology: [
      "OpenAI",
      "Automation",
      "Custom GPT",
      "Web Development",
      "Workflow Design",
    ],
  },
  {
    index: "02",
    title: "Workflow Automation for Chartered Accountant Firm",
    industry: "Accounting & Tax",
    challengeLead:
      "The firm tracked client work manually, making deadlines difficult to monitor during busy filing seasons.",
    challenge: [],
    solutionLead:
      "Designed a lightweight task management platform that enabled:",
    solution: [
      "Client-wise tracking",
      "Deadline monitoring",
      "Staff assignment",
      "Status dashboards",
      "Pending work visibility",
    ],
    impact: [
      "Better operational visibility",
      "Reduced missed deadlines",
      "Improved accountability",
      "Faster work allocation",
    ],
    technology: ["Automation", "Workflow Design", "Task Management"],
  },
];

export type EngagementRowItem = {
  index: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
  tech: string;
  href?: string;
  externalHref?: string;
};

export const additionalEngagements: EngagementRowItem[] = [
  {
    index: "03",
    title: "Client Profitability Framework",
    category: "Finance",
    summary:
      "Designed an off-system client profitability framework for MSCI's Analytics business to power data-driven pricing decisions.",
    impact:
      "Enabled commercial decisions, optimized pricing models, and supported strategic account planning.",
    tech: "Financial Modeling • Data Analytics • Excel • Power BI",
    href: "/portfolio/case-study/msci",
  },
  {
    index: "04",
    title: "Client Coverage Performance Dashboard",
    category: "Sales",
    summary:
      "Real-time dashboard tracking sales team performance and client coverage incentives at MSCI.",
    impact: "Saved ~$350K annually by replacing manual incentive tracking.",
    tech: "Power BI • Excel Macros",
    href: "/portfolio/case-study/coverage-dashboard",
  },
  {
    index: "05",
    title: "AI-Curated Premium Website for Paper Manufacturer",
    category: "AI",
    summary:
      "Fully responsive, premium landing page built end-to-end with AI tooling.",
    impact: "Delivered a production site in a fraction of traditional dev time.",
    tech: "Lovable AI • React • Tailwind CSS",
    externalHref: "https://preview-e549300c--premium-pack-mumbai.lovable.app/",
  },
  {
    index: "06",
    title: "Healthcare Record Management System",
    category: "Healthcare",
    summary:
      "Modern web app for a clinic to manage patient records with a clean UI and secure data handling.",
    impact:
      "Cut record retrieval time by 65% and improved staff productivity by 40%.",
    tech: "React • TypeScript • Tailwind CSS • Supabase",
    externalHref: "https://preview--clinic-record-central.lovable.app/",
  },
  {
    index: "07",
    title: "AI-Driven RFP & Forecasting Tool",
    category: "AI",
    summary:
      "Intelligent system for responding to RFPs and lifting sales forecast accuracy.",
    impact:
      "Improved forecast accuracy by 10% and reduced client onboarding time.",
    tech: "AI • GPT-4 • Power Automate",
  },
  {
    index: "08",
    title: "Operational Efficiency via KPI Dashboards",
    category: "Product",
    summary: "KPI dashboards delivering real-time operational insight.",
    impact: "Reduced commentary and reporting prep time by 50%.",
    tech: "Power BI • Copilot",
  },
  {
    index: "09",
    title: "Investment Expense Tracker Revamp",
    category: "Automation",
    summary: "Modernized expense tracking for investment operations.",
    impact: "50% time reduction across monthly reporting cycles.",
    tech: "Excel VBA • Workflow Automation",
  },
  {
    index: "10",
    title: "Finance Transformation Strategy",
    category: "Strategy",
    summary: "End-to-end finance transformation roadmap and execution plan.",
    impact: "Delivered $1.2M in annual savings through process optimization.",
    tech: "Strategic Planning • Change Management",
  },
  {
    index: "11",
    title: "Sales Performance Analytics",
    category: "Sales",
    summary: "Analytics platform for tracking and optimizing sales performance.",
    impact: "Lifted sales team productivity by 15% via data-driven insights.",
    tech: "Power BI • SQL • Data Modeling",
  },
];
