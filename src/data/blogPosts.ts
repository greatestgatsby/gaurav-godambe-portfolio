
export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content?: React.ReactNode;
}

// Sample blog posts
export const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'The Future of FP&A: How AI is Transforming Financial Planning',
    excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing the way finance teams approach planning and analysis.',
    date: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74',
    category: 'AI in Finance',
    // Full content for the first post
    content: 'fullarticle'
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
