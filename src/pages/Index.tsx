
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import CertificationsSection from '@/components/CertificationsSection';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gaurav Godambe | AI Agent Development & AI Consulting Expert</title>
        <meta name="description" content="Gaurav Godambe - Expert in AI agents, AI consulting, AI strategy, financial analysis, budgeting, and forecasting with 15+ years of leadership experience." />
        <meta name="keywords" content="Gaurav, AI agent, AI consultant, AI strategy, financial analysis, budgeting, forecasting, finance transformation, FP&A leadership, business finance, strategic planning, digital transformation" />
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <CertificationsSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
