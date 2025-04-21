
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Button from './ui/Button';

interface BlogSectionProps {
  className?: string;
  fullPage?: boolean;
}

const BlogSection = ({ className, fullPage = false }: BlogSectionProps) => {
  // Sample blog posts (placeholders)
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of FP&A: How AI is Transforming Financial Planning',
      excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing the way finance teams approach planning and analysis.',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74',
      category: 'AI in Finance',
    },
    {
      id: 2,
      title: 'Building Efficient Financial Dashboards: Best Practices',
      excerpt: 'Learn key principles for creating effective financial dashboards that drive decision-making and provide actionable insights.',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4',
      category: 'Data Visualization',
    },
    {
      id: 3,
      title: 'Strategic Cost Optimization in Uncertain Economic Times',
      excerpt: 'Strategic approaches to cost management that preserve business value while navigating economic challenges.',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
      category: 'Strategic Finance',
    },
    {
      id: 4,
      title: 'Implementing Agile in Finance Teams: A Practical Guide',
      excerpt: 'How finance departments can adopt agile methodologies to improve flexibility and delivery.',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd',
      category: 'Project Management',
    },
    {
      id: 5,
      title: 'The Rise of Automation in Financial Reporting',
      excerpt: 'How automation is reducing manual work and improving accuracy in financial reporting processes.',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5',
      category: 'Automation',
    },
    {
      id: 6,
      title: 'Bridging the Gap: Finance and Technology Collaboration',
      excerpt: 'Strategies for effective partnership between finance and IT teams to drive digital transformation.',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1605664041952-4a2855d0434b',
      category: 'Digital Transformation',
    },
  ];

  // Display all blog posts for full page, but limited set for homepage
  const displayedPosts = fullPage ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={cn(fullPage ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl", "font-bold text-navy-900 mb-6")}>
            {fullPage ? 'Blog & Insights' : 'Latest Insights'}
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            {fullPage 
              ? 'Thoughts, ideas, and insights on finance transformation, technology, and strategic business planning.'
              : 'Coming soon: Articles on finance transformation, AI in FP&A, and strategic reporting.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-navy-900/80 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="text-sm text-navy-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-navy-600 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="mt-4 pt-4 border-t border-navy-100">
                    <span className="text-accent hover:text-accent-dark transition-colors font-medium">
                      Coming Soon
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {!fullPage && (
          <div className="text-center mt-12">
            <Button variant="outline" href="/blog" icon="arrow">
              Browse All Articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
