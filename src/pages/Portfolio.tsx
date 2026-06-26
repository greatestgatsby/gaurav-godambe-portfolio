import React from 'react';
import { useParams } from 'react-router-dom';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHeader from '@/components/PageHeader';
import PortfolioSection from '@/components/PortfolioSection';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const { caseStudyId } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-ink text-bone">
      <Helmet>
        <title>{caseStudyId ? 'Case Study | Gaurav Godambe' : 'Portfolio | Gaurav Godambe'}</title>
        <meta
          name="description"
          content={caseStudyId
            ? "Detailed case study of impactful finance and business transformation projects"
            : "View Gaurav Godambe's portfolio of finance transformation, AI consulting, and business strategy projects"}
        />
      </Helmet>
      <SiteNav />
      <main className="flex-grow pt-20">
        {!caseStudyId && (
          <PageHeader
            eyebrow="Selected work"
            title="Portfolio"
            subtitle="Problems diagnosed, systems shipped — across finance, AI agents, and operations."
          />
        )}
        <PortfolioSection fullPage showCaseStudy={caseStudyId} />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Portfolio;
