import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import PortfolioCard from './PortfolioCard';
import Button from '@/components/ui/CustomButton';

interface PortfolioSectionProps {
  className?: string;
  fullPage?: boolean;
}

const PortfolioSection = ({ className, fullPage = false }: PortfolioSectionProps) => {
  // Define project categories
  const categories = ['All', 'Strategy', 'Sales', 'Product', 'AI', 'Automation'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample portfolio projects
  const projects = [
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
      id: 1,
      title: 'Client Coverage Performance Dashboard',
      summary: 'Real-time dashboard for tracking sales teams performance and client coverage incentives.',
      impact: 'Saved $350K annually by building real-time Coverage Incentive dashboards for Sales teams.',
      category: 'Sales',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tech: 'Power BI, Excel Macros',
    },
    {
      id: 2,
      title: 'AI-Driven RFP & Forecasting Tool',
      summary: 'Intelligent system for responding to RFPs and improving sales forecasting accuracy.',
      impact: 'Improved sales forecasting accuracy by 10%, reduced client onboarding time.',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
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

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={cn(fullPage ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl", "font-bold text-navy-900 mb-6")}>
            {fullPage ? 'My Portfolio' : 'My Work'}
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
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
                      ? 'bg-accent text-white'
                      : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
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
