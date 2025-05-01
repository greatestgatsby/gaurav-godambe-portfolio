
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Gaurav Godambe | AI Consultant & Agent Development Expert</title>
        <meta name="description" content="Get in touch with Gaurav Godambe for AI consulting, AI agent development, finance transformation solutions, and expert business strategy." />
        <meta name="keywords" content="contact Gaurav, hire AI consultant, AI agent development services, finance transformation expert, schedule consultation" />
        <link rel="canonical" href="https://your-domain.com/contact" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20">
        <ContactSection fullPage />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
