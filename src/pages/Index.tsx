
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gaurav Godambe | AI Consulting & Finance Transformation Expert</title>
        <meta name="description" content="Expert in AI agents, AI consulting, financial transformation, and business strategy with 15+ years of leadership experience." />
        <meta name="keywords" content="AI consulting, AI agents, finance transformation, FP&A leadership, business finance, strategic planning, digital transformation" />
        <link rel="canonical" href="https://your-domain.com" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
