
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/PortfolioSection';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const { caseStudyId } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{caseStudyId ? 'Case Study | Gaurav Godambe' : 'Portfolio | Gaurav Godambe'}</title>
        <meta 
          name="description" 
          content={caseStudyId 
            ? "Detailed case study of impactful finance and business transformation projects" 
            : "View Gaurav Godambe's portfolio of finance transformation, AI consulting, and business strategy projects"
          } 
        />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20">
        <PortfolioSection fullPage showCaseStudy={caseStudyId} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
