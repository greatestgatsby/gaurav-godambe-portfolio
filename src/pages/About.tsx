import React from 'react';
import Navbar from '@/components/SiteNav';
import Footer from '@/components/SiteFooter';
import PageHeader from '@/components/PageHeader';
import AboutSection from '@/components/AboutSection';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-bone">
      <Helmet>
        <title>About Gaurav Godambe | AI Consultant & Agent Development Expert</title>
        <meta name="description" content="Gaurav Godambe is an experienced AI consultant and agent development expert with 15+ years in finance transformation and strategic leadership." />
        <meta name="keywords" content="Gaurav, AI consultant, AI agent developer, finance transformation expert, FP&A leadership, business strategy, automation expert" />
        <link rel="canonical" href="https://your-domain.com/about" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20">
        <PageHeader
          eyebrow="About"
          title="About Me"
          subtitle="A finance transformation leader with 15+ years of experience and a passion for AI-native builds."
        />
        <AboutSection fullPage />
      </main>
      <Footer />
    </div>
  );
};

export default About;
