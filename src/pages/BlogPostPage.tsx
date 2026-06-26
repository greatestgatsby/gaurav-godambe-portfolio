import React from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import BlogPost from '@/components/BlogPost';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Helmet } from 'react-helmet';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const post = blogPosts.find(post => post.id === postId);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-ink text-bone">
      <Helmet>
        <title>{post.title} | Gaurav Godambe</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://your-domain.com/blog/${post.id}`} />
      </Helmet>
      <SiteNav />
      <main className="flex-grow pt-20">
        <section className="border-b border-line bg-surface/40">
          <div className="mx-auto max-w-content px-6 py-16 md:py-20 text-center">
            <p className="eyebrow mb-4">{post.category}</p>
            <h1 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-bone mb-4">
              {post.title}
            </h1>
            <p className="font-mono text-xs text-fog">{post.date}</p>
          </div>
        </section>
        <section className="py-12">
          <BlogPost post={post} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BlogPostPage;
