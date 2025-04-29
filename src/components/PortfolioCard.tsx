
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/CustomButton';
import { TrendingUp } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  summary: string;
  impact: string;
  category: string;
  image: string;
  tech: string;
  previewUrl?: string;
  trending?: boolean;
  className?: string;
}

const PortfolioCard = ({
  title,
  summary,
  impact,
  category,
  image,
  tech,
  previewUrl,
  trending = false,
  className,
}: PortfolioCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Strategy':
        return 'bg-blue-100 text-blue-800';
      case 'Sales':
        return 'bg-green-100 text-green-800';
      case 'Product':
        return 'bg-purple-100 text-purple-800';
      case 'AI':
        return 'bg-orange-100 text-orange-800';
      case 'Automation':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Create structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": title,
    "description": summary,
    "creator": {
      "@type": "Person",
      "name": "Gaurav Godambe"
    },
    "keywords": `${category}, AI consulting, business transformation, ${tech}`,
    ...(previewUrl && { "url": previewUrl })
  };

  return (
    <Card className={cn('overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1', className)}>
      {/* Add structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex gap-2 items-center">
          {trending && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-3 py-1 text-xs font-medium shadow-md">
              <TrendingUp size={14} className="animate-pulse" />
              <span>Trending</span>
            </div>
          )}
          <Badge className={getCategoryColor(category)}>{category}</Badge>
        </div>
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-navy-600 mb-4">{summary}</p>
        <div className="text-sm font-medium text-navy-500 mb-2">
          <span className="font-semibold text-navy-700">Tech: </span>
          {tech}
        </div>
        <div className="mt-4 pt-4 border-t border-navy-100">
          <div className="text-sm font-medium text-navy-700">
            <span className="font-semibold">Impact: </span>
            {impact}
          </div>
        </div>
      </CardContent>
      {previewUrl && (
        <CardFooter className="pt-0 pb-4">
          <Button variant="outline" size="sm" href={previewUrl} icon="external">
            Preview Site
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default PortfolioCard;
