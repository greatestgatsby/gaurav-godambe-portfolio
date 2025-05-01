
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Agent Development & AI Consulting Services | Gaurav Godambe</title>
        <meta name="description" content="Gaurav Godambe offers expert AI consulting services, custom AI agent development, LLM integration, finance transformation, and FP&A leadership solutions." />
        <meta name="keywords" content="Gaurav, AI agent development, AI consultant, AI consulting services, AI agents, LLM integration, finance transformation, FP&A consulting, business finance optimization" />
        <link rel="canonical" href="https://your-domain.com/services" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-accent/10 to-transparent py-10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              AI Agent Development & AI Consulting Services
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Specializing in <span className="text-accent font-medium">AI agent development</span>, AI consulting, 
              financial transformation, and business process optimization to help your organization thrive.
            </p>
          </div>
        </div>
        <ServicesSection fullPage />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
