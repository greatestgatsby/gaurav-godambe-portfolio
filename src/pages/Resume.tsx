import React from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHeader from '@/components/PageHeader';
import { Helmet } from 'react-helmet';

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-bone">
      <Helmet>
        <title>Resume | Gaurav Godambe | AI Consultant & Financial Expert</title>
        <meta name="description" content="View Gaurav Godambe's professional resume showcasing his experience in AI consulting, AI strategy, financial analysis, budgeting, and forecasting." />
        <meta name="keywords" content="Gaurav Godambe, AI agent, AI consultant, AI strategy, financial analysis, budgeting, forecasting, resume, professional experience" />
      </Helmet>
      <SiteNav />
      <main className="flex-grow pt-20">
        <PageHeader eyebrow="Resume" title="My Resume" />
        <section className="py-12">
          <div className="container max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-line bg-surface/50">
              <img
                src="/lovable-uploads/Resume%20Image.png"
                alt="Gaurav Godambe's Resume - AI Consultant and Financial Expert"
                className="w-full object-contain"
                width="1200"
                height="1553"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/1200x1553/F2F1EC/5C6470?text=Resume';
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Resume;
