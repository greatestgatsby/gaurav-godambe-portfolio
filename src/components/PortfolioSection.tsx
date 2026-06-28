import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import PortfolioCard from './PortfolioCard';
import Button from '@/components/ui/CustomButton';
import CaseStudyView from './CaseStudyView';
import SelectedEngagement from './SelectedEngagement';
import EngagementRow from './EngagementRow';
import { featuredEngagements, additionalEngagements } from '@/data/engagements';

interface PortfolioSectionProps {
  className?: string;
  fullPage?: boolean;
  showCaseStudy?: string;
}

const PortfolioSection = ({ className, fullPage = false, showCaseStudy }: PortfolioSectionProps) => {
  // Homepage preview projects (compact cards on /)
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
  ];

  // Case study data (preserved for /portfolio/case-study/:id)
  const caseStudies: Record<string, any> = {
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

  if (fullPage) {
    return (
      <section className={cn('pb-24', className)}>
        <div className="mx-auto max-w-content px-6 py-12 md:py-16">
          <p className="max-w-3xl text-base leading-relaxed text-fog md:text-lg">
            Over the past few years I've worked at the intersection of finance,
            strategy, automation and AI. Below are examples of projects where
            technology created tangible business value.
          </p>
        </div>

        <div>
          {featuredEngagements.map((e) => (
            <SelectedEngagement key={e.index} engagement={e} />
          ))}
        </div>

        <div className="mx-auto max-w-content px-6 pt-16 md:pt-24">
          <p className="eyebrow text-brand">Additional Engagements</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
            Selected work across finance, AI and operations
          </h2>
        </div>

        <div className="mx-auto max-w-content px-6 pt-8">
          {additionalEngagements.map((item) => (
            <EngagementRow key={item.index} item={item} />
          ))}
        </div>
      </section>
    );
  }

  // Homepage compact preview
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bone mb-6">My Work</h2>
          <p className="text-xl text-fog max-w-3xl mx-auto">
            A selection of my most impactful projects and initiatives that have driven measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
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
                previewUrl={(project as any).previewUrl}
                caseStudy={(project as any).caseStudy}
                trending={(project as any).trending}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" href="/portfolio" icon="arrow">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
