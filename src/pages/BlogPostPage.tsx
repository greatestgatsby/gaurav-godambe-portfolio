
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Helmet } from 'react-helmet';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === postId);
  
  // If no post is found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | Gaurav Godambe</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://your-domain.com/blog/${post.id}`} />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-accent/10 to-transparent py-10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Blog Post
            </h1>
          </div>
        </div>
        <section className="py-12">
          <BlogPost post={post} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
