
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-accent/10 to-transparent py-10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              My Services
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Specializing in <span className="text-accent font-medium">AI consulting</span>, financial transformation, 
              and business process optimization to help your organization thrive.
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
