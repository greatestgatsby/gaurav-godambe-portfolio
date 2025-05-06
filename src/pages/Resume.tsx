
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Resume | Gaurav Godambe | AI Consultant & Financial Expert</title>
        <meta name="description" content="View Gaurav Godambe's professional resume showcasing his experience in AI consulting, AI strategy, financial analysis, budgeting, and forecasting." />
        <meta name="keywords" content="Gaurav Godambe, AI agent, AI consultant, AI strategy, financial analysis, budgeting, forecasting, resume, professional experience" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-navy-900">My Resume</h1>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/Resume%20Image.png" 
              alt="Gaurav Godambe's Resume - AI Consultant and Financial Expert" 
              className="w-full object-contain"
              width="1200"
              height="1553"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error(`Failed to load resume image: ${target.src}`);
                // Fallback to a placeholder if loading fails
                target.src = 'https://placehold.co/1200x1553/e2e8f0/64748b?text=Resume';
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
