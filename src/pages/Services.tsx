import React from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHeader from '@/components/PageHeader';
import ServicesSection from '@/components/ServicesSection';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-bone">
      <Helmet>
        <title>AI Agent Development & AI Consulting Services | Gaurav Godambe</title>
        <meta name="description" content="Gaurav Godambe offers expert AI consulting services, custom AI agent development, LLM integration, finance transformation, and FP&A leadership solutions." />
        <meta name="keywords" content="Gaurav, AI agent development, AI consultant, AI consulting services, AI agents, LLM integration, finance transformation, FP&A consulting, business finance optimization" />
        <link rel="canonical" href="https://your-domain.com/services" />
      </Helmet>
      <SiteNav />
      <main className="flex-grow pt-20">
        <PageHeader
          eyebrow="How I can help"
          title="Services"
          subtitle="AI agent development, AI consulting, finance transformation, and business process optimization — built around the outcome, not the tech."
        />
        <ServicesSection fullPage />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Services;
