import React from 'react';
import { cn } from '@/lib/utils';
import ServiceCard from './ServiceCard';
import Button from '@/components/ui/CustomButton';
import BusinessCategoryCard from './BusinessCategoryCard';

interface ServicesSectionProps {
  className?: string;
  fullPage?: boolean;
}

const ServicesSection = ({ className, fullPage = false }: ServicesSectionProps) => {
  const services = [
    {
      id: 2,
      title: 'AI-Powered Automation for Finance Teams',
      description: 'Leverage cutting-edge AI tools (ChatGPT, Zapier, Copilot) to automate routine workflows and reports, saving time and improving accuracy.',
      icon: 'robot',
      highlights: [
        'Workflow Automation',
        'AI-Powered Reporting',
        'Process Bot Development',
        'Custom GPT Solutions',
      ],
    },
    {
      id: 3,
      title: 'AI Consulting & Implementation',
      description: 'Strategic guidance on leveraging AI technologies to transform your business operations. From assessment to implementation of custom AI solutions.',
      icon: 'brain',
      highlights: [
        'ChatGPT Integration',
        'AI Workflow Automation',
        'Custom Chat Bots for businesses',
        'AI agent for booking appointments',
      ],
    },
    {
      id: 5,
      title: 'Data Visualization & BI Development',
      description: 'Build custom Power BI, Qlik, or Tableau dashboards that transform raw data into actionable insights for better decision-making.',
      icon: 'presentation-chart-bar',
      highlights: [
        'Custom Dashboard Creation',
        'Data Model Development',
        'Executive Reporting',
        'Self-Service Analytics',
      ],
    },
    {
      id: 1,
      title: 'Performance & Cost Optimization Strategy',
      description: 'Develop metrics design, cost-saving frameworks, and operational benchmarking to drive efficiencies and reduce expenses.',
      icon: 'chart-line',
      highlights: [
        'Cost Reduction Strategies',
        'Performance Metrics Design',
        'Benchmarking & Analysis',
        'Continuous Improvement Programs',
      ],
    },
    {
      id: 4,
      title: 'Program & Project Management',
      description: 'End-to-end program management services with Agile execution, stakeholder alignment, and governance structures to ensure successful delivery.',
      icon: 'clipboard-list',
      highlights: [
        'Agile/Waterfall Methodologies',
        'Cross-functional Coordination',
        'Governance Frameworks',
        'Stakeholder Management',
      ],
    },
  ];

  const displayedServices = fullPage ? services : services.slice(0, 3);

  return (
    <section className={cn('py-16 md:py-24 bg-surface/40', className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={cn(fullPage ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl", "font-bold text-bone mb-6")}>
            {fullPage ? 'Services I Offer' : 'My Services'}
          </h2>
          <p className="text-xl text-fog max-w-3xl mx-auto">
            Specialized expertise to help your business thrive through <span className="text-brand font-medium">AI integration</span>, financial optimization,
            technology integration, and strategic guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service, index) => (
            <div 
              key={service.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                highlights={service.highlights}
                className={service.id === 2 ? "border-2 border-brand shadow-accent/20" : ""}
              />
            </div>
          ))}

          {fullPage && (
            <>
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <ServiceCard
                  title="Finance Transformation & FP&A Consulting"
                  description="Expert guidance on forecasting, annual operating planning, P&L management, and KPI reporting systems to optimize your financial operations."
                  icon="chart-bar"
                  highlights={[
                    'Financial Process Optimization',
                    'Budget & Forecast Modeling',
                    'P&L Management Frameworks',
                    'KPI Design & Implementation',
                  ]}
                />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <BusinessCategoryCard />
              </div>
            </>
          )}
        </div>

        {!fullPage && (
          <div className="text-center mt-12">
            <Button variant="outline" href="/services" icon="arrow">
              View All Services
            </Button>
          </div>
        )}

        {fullPage && (
          <div className="mt-20 text-center">
            <div className="bg-surface/60 border border-line rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-bone mb-6">Ready to Work Together?</h3>
              <p className="text-lg text-fog mb-8">
                Have a specific project in mind or need customized <span className="text-brand font-medium">AI solutions</span>? Let's discuss how I can help
                you transform your operations and drive business growth.
              </p>
              <Button variant="primary" href="/contact" icon="arrow" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
