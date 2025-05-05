
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CertificationsSection from '@/components/CertificationsSection';
import { Helmet } from 'react-helmet';

const Certifications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Certifications & Credentials | Gaurav Godambe</title>
        <meta name="description" content="Gaurav Godambe's professional certifications in AI, project management, and business optimization methodologies." />
        <meta name="keywords" content="Gaurav, AI certifications, AI mastery, generative AI, Six Sigma, process improvement, SEO certifications, professional credentials" />
        <link rel="canonical" href="https://your-domain.com/certifications" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-accent/10 to-transparent py-10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Professional Certifications
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              A collection of my <span className="text-accent font-medium">professional credentials</span> and certifications
              in AI technologies, project management, and business optimization.
            </p>
          </div>
        </div>
        <CertificationsSection fullPage />
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
