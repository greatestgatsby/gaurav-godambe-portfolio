
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Resume | Gaurav Godambe</title>
        <meta name="description" content="View Gaurav Godambe's professional resume showcasing his experience in AI consulting, finance transformation, and business strategy." />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-navy-900">My Resume</h1>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/Resume Image.png" 
              alt="Gaurav Godambe's Resume" 
              className="w-full object-contain"
            />
          </div>
          <div className="mt-8 text-center">
            <a 
              href="/lovable-uploads/Resume Image.png"
              download="Gaurav Godambe Resume.png"
              className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors inline-flex items-center"
            >
              Download Resume Image
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
