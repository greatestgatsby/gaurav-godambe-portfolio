import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import PortfolioCard from './PortfolioCard';
import Button from '@/components/ui/CustomButton';
import CaseStudyView from './CaseStudyView';

interface PortfolioSectionProps {
  className?: string;
  fullPage?: boolean;
  showCaseStudy?: string;
}

const PortfolioSection = ({ className, fullPage = false, showCaseStudy }: PortfolioSectionProps) => {
  // Define project categories
  const categories = ['All', 'Strategy', 'Sales', 'Product', 'AI', 'Automation', 'Healthcare', 'Finance'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample portfolio projects
  const projects = [
    {
      id: 9,
      title: 'Client Profitability Framework',
      summary: 'Designed and implemented a comprehensive client profitability framework for MSCI\'s Analytics business to enable data-driven pricing decisions.',
      impact: 'Provided critical insights for commercial decision-making, optimized pricing models, and supported strategic account planning.',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tech: 'Financial Modeling, Data Analytics, Excel, Power BI',
      caseStudy: 'msci',
      trending: true,
    },
    {
      id: 1,
      title: 'Client Coverage Performance Dashboard',
      summary: 'Real-time dashboard for tracking sales teams performance and client coverage incentives.',
      impact: 'Saved $350K annually by building real-time Coverage Incentive dashboards for Sales teams.',
      category: 'Sales',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tech: 'Power BI, Excel Macros',
      caseStudy: 'coverage-dashboard',
      trending: true,
    },
    {
      id: 7,
      title: 'AI-Curated Premium Website Landing Page for Paper Manufacturer',
      summary: 'Created a fully responsive, premium landing page for a paper manufacturing company using advanced AI tools.',
      impact: 'Delivered a professional website in a fraction of the time of traditional development.',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tech: 'Lovable AI, React, Tailwind CSS',
      previewUrl: 'https://preview-e549300c--premium-pack-mumbai.lovable.app/',
      trending: true,
    },
    {
      id: 8,
      title: 'Healthcare Record Management System',
      summary: 'Built a modern web app for a small clinic to manage patient records with an intuitive interface and secure data handling.',
      impact: 'Reduced record retrieval time by 65% and improved staff productivity by 40%.',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d',
      tech: 'React, TypeScript, Tailwind CSS, Supabase',
      previewUrl: 'https://preview--clinic-record-central.lovable.app/',
    },
    {
      id: 2,
      title: 'AI-Driven RFP & Forecasting Tool',
      summary: 'Intelligent system for responding to RFPs and improving sales forecasting accuracy.',
      impact: 'Improved sales forecasting accuracy by 10%, reduced client onboarding time.',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      tech: 'AI, GPT-4, Power Automate',
    },
    {
      id: 3,
      title: 'Operational Efficiency via KPI Dashboards',
      summary: 'Comprehensive KPI dashboards providing real-time operational insights.',
      impact: 'Reduced commentary and reporting prep time by 50%.',
      category: 'Product',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
      tech: 'Power BI + Copilot',
    },
    {
      id: 4,
      title: 'Investment Expense Tracker Revamp',
      summary: 'Modernized expense tracking system for investment operations.',
      impact: '50% time reduction in monthly reporting cycles.',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
      tech: 'Excel VBA, Workflow Automation',
    },
    {
      id: 5,
      title: 'Finance Transformation Strategy',
      summary: 'End-to-end finance transformation roadmap and implementation plan.',
      impact: 'Delivered $1.2M in annual savings through process optimization.',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      tech: 'Strategic Planning, Change Management',
    },
    {
      id: 6,
      title: 'Sales Performance Analytics',
      summary: 'Advanced analytics platform for tracking and optimizing sales performance.',
      impact: 'Increased sales team productivity by 15% through data-driven insights.',
      category: 'Sales',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603',
      tech: 'Power BI, SQL, Data Modeling',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Display all projects for full page, but limited set for homepage
  const displayedProjects = fullPage ? filteredProjects : filteredProjects.slice(0, 3);

  // Case study data
  const caseStudies = {
    msci: {
      title: "Building a Client Profitability Framework for MSCI's Analytics Business",
      client: "MSCI",
      summary: "Developed an off-system financial framework that helped product and sales teams understand client profitability and make informed pricing decisions.",
      background: "During my tenure at MSCI, I led an initiative to design and implement a client profitability framework for the Analytics business line. This was an off-system project developed from scratch, aimed at helping the Product and Sales teams better understand the financial impact of each client relationship and make more informed pricing decisions.",
      objective: "The core objective was to quantify the profitability of individual clients by aligning revenue with associated costs. This would enable the business to assess the value each client brought relative to the resources consumed, particularly in a complex environment where direct cost attribution was not previously tracked.",
      approach: [
        "The process involved multiple stages of data aggregation, metric alignment, and financial modeling.",
        "Data Collection: I collated client-level run rate revenue and sales data, and gathered data on system usage — including compute time and storage consumption — to understand operational costs tied to each client.",
        "Revenue Allocation: Revenue was allocated based on each client's run rate, providing a normalized view that captured ongoing business activity rather than just point-in-time transactions.",
        "Expense Allocation: Direct costs related to infrastructure were allocated based on actual usage per client. Shared costs and corporate overheads were distributed evenly across all clients to ensure a balanced pro forma P&L. Sales & support costs were allocated proportionally using sales metrics and client engagement data where available.",
        "Profitability Modeling: Using the allocated revenue and cost data, I constructed a pro forma Profit & Loss (P&L) statement for each client. This modeling provided a bottom-line view of client contribution, surfacing both highly profitable accounts and those with low or negative margins.",
        "Dashboard Development: I created a dashboard to visualize key metrics and P&L outputs. The dashboard was used actively by Product and Sales teams to evaluate pricing strategies, identify clients where renegotiation might be necessary, and align product offerings with financial value derived."
      ],
      impact: "This profitability framework became a crucial tool for commercial decision-making. It provided transparency into the economics of individual client relationships, helped optimize pricing models, and supported strategic account planning. The model also laid the groundwork for potential integration into system-based reporting tools in the future.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    "coverage-dashboard": {
      title: "Real-Time Client Coverage Performance Dashboard",
      client: "MSCI",
      summary: "Developed a real-time dashboard for tracking sales team performance and client coverage incentives, eliminating manual processes and improving transparency.",
      background: "At MSCI, I spearheaded the development of a real-time dashboard designed to track sales team performance and manage client coverage incentives across the organization. The initiative aimed to eliminate inefficiencies in the existing manual processes, improve incentive transparency, and ultimately drive better sales outcomes.",
      objective: "The primary goal was to streamline the incentive management process by building a dynamic, real-time reporting solution that captured performance metrics and coverage alignment. The manual approach being used was error-prone, time-consuming, and lacked the agility needed for timely decision-making.",
      approach: [
        "To address these challenges, I developed an end-to-end dashboard solution combining Excel macros for data processing and Power BI for visualization and real-time updates.",
        "Data Automation: Built Excel macros to clean, validate, and consolidate data from CRM, HR systems, and sales logs. Standardized inputs to eliminate manual inconsistencies and reduce processing time.",
        "Dashboard Development (Power BI): Created interactive dashboards showing individual and team performance against targets, coverage effectiveness by client and region, and incentive payout tracking and forecast. Incorporated filters by sales region, product line, and time period for granular insights.",
        "Real-Time Updates: Automated data refresh schedules to enable real-time tracking. Integrated alert mechanisms for performance thresholds and incentive triggers.",
        "Access and Usability: Provided secure, role-based access for sales leadership and regional heads. Optimized UI for quick interpretation of metrics with a clean layout and mobile-friendly view."
      ],
      impact: "Cost Savings: Eliminated the need for manual tracking and third-party processing, saving approximately $350K annually. Efficiency Gains: Reduced reporting time from days to minutes, enabling faster decisions. Sales Effectiveness: Gave managers better tools to motivate teams, track incentives, and align coverage strategy with performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }
  };

  if (showCaseStudy && caseStudies[showCaseStudy]) {
    return <CaseStudyView {...caseStudies[showCaseStudy]} />;
  }

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={cn(fullPage ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl", "font-bold text-bone mb-6")}>
            {fullPage ? 'My Portfolio' : 'My Work'}
          </h2>
          <p className="text-xl text-fog max-w-3xl mx-auto">
            A selection of my most impactful projects and initiatives that have driven measurable business results.
          </p>
          
          {fullPage && (
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'px-4 py-2 rounded-full transition-all',
                    activeCategory === category
                      ? 'bg-brand text-white'
                      : 'bg-surface text-bone/90 hover:bg-surface'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <PortfolioCard
                title={project.title}
                summary={project.summary}
                impact={project.impact}
                category={project.category}
                image={project.image}
                tech={project.tech}
                previewUrl={project.previewUrl}
                caseStudy={project.caseStudy}
                trending={project.trending}
              />
            </div>
          ))}
        </div>

        {!fullPage && (
          <div className="text-center mt-12">
            <Button variant="outline" href="/portfolio" icon="arrow">
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
