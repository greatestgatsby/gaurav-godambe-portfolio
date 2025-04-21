
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, ChevronRight, BarChart3, Robot, ClipboardList, LineChart, PresentationChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  highlights,
  className,
}: ServiceCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'chart-bar':
        return <BarChart3 className="h-10 w-10 text-accent" />;
      case 'robot':
        return <Robot className="h-10 w-10 text-accent" />;
      case 'clipboard-list':
        return <ClipboardList className="h-10 w-10 text-accent" />;
      case 'chart-line':
        return <LineChart className="h-10 w-10 text-accent" />;
      case 'presentation-chart-bar':
        return <PresentationChart className="h-10 w-10 text-accent" />;
      default:
        return <BarChart3 className="h-10 w-10 text-accent" />;
    }
  };

  return (
    <Card className={cn('overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1', className)}>
      <CardContent className="pt-6">
        <div className="mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
        <p className="text-navy-600 mb-6">{description}</p>
        <div className="space-y-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-navy-700">{highlight}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <a
          href="/contact"
          className="text-accent hover:text-accent-dark transition-colors inline-flex items-center text-sm font-medium"
        >
          Request a Quote
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
