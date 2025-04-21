
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <BlogSection fullPage />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
