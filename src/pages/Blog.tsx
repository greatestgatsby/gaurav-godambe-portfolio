import React from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHeader from '@/components/PageHeader';
import BlogSection from '@/components/BlogSection';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-bone">
      <Helmet>
        <title>AI in Finance & FP&A Blog | Gaurav Godambe</title>
        <meta name="description" content="Insights on AI in finance, FP&A transformation, and business optimization from Gaurav Godambe - expert consultant in AI agent development and finance transformation." />
        <link rel="canonical" href="https://your-domain.com/blog" />
      </Helmet>
      <SiteNav />
      <main className="flex-grow pt-20">
        <PageHeader
          eyebrow="Blog"
          title="Insights & articles"
          subtitle="Thoughts on AI in finance, FP&A transformation, and optimizing business performance through technology."
        />
        <section className="py-12">
          <div className="container">
            <BlogSection fullPage />
          </div>
        </section>

        <section className="border-t border-line py-16">
          <div className="container text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-bone mb-4">
              <a
                href="https://gauravg83.app.n8n.cloud/form/486513e5-52b2-411a-893d-eb9e5a5e3720"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline underline-offset-4"
              >
                Stay Connected
              </a>
            </h2>
            <p className="text-base text-fog max-w-2xl mx-auto">
              Get in touch or subscribe to my newsletter for the latest insights on AI in finance and business optimization.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Blog;
