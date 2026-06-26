import React from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-bone">
      <Helmet>
        <title>Contact Gaurav Godambe | AI Consultant & Agent Development Expert</title>
        <meta name="description" content="Get in touch with Gaurav Godambe for AI consulting, AI agent development, finance transformation solutions, and expert business strategy." />
        <meta name="keywords" content="contact Gaurav, hire AI consultant, AI agent development services, finance transformation expert, schedule consultation" />
        <link rel="canonical" href="https://your-domain.com/contact" />
      </Helmet>
      <SiteNav />
      <main className="flex-grow pt-20">
        <PageHeader
          eyebrow="Get in touch"
          title="Let's talk"
          subtitle="Have a finance or AI problem worth solving? Reach out and I'll tell you honestly whether it's worth building."
        />
        <ContactSection fullPage />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Contact;
