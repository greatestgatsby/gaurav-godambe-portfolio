
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import BlogPost from '@/components/BlogPost';
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
        <section className="py-12">
          <BlogPost />
        </section>
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8 text-center">More Articles</h2>
            <BlogSection fullPage />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
