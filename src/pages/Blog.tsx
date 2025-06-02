
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI in Finance & FP&A Blog | Gaurav Godambe</title>
        <meta name="description" content="Insights on AI in finance, FP&A transformation, and business optimization from Gaurav Godambe - expert consultant in AI agent development and finance transformation." />
        <link rel="canonical" href="https://your-domain.com/blog" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-accent/10 to-transparent py-10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Latest Insights & Articles
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Thoughts on <span className="text-accent font-medium">AI in finance</span>, FP&A transformation, 
              and optimizing business performance through technology.
            </p>
          </div>
        </div>
        <section className="py-12 bg-gray-50">
          <div className="container">
            <BlogSection fullPage />
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Stay Connected
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Get in touch or subscribe to my newsletter for the latest insights on AI in finance and business optimization.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <iframe
                src="https://gauravg83.app.n8n.cloud/form/486513e5-52b2-411a-893d-eb9e5a5e3720"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-lg shadow-lg"
                title="Contact Form"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
