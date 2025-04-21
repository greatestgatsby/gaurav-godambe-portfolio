
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/PortfolioSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <PortfolioSection fullPage />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
