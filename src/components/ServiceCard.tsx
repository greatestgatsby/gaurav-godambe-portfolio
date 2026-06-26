
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, ChevronRight, BarChart3, Bot, ClipboardList, LineChart, Presentation, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
  className?: string;
  status?: 'coming-soon';
}

const ServiceCard = ({
  title,
  description,
  icon,
  highlights,
  className,
  status
}: ServiceCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'chart-bar':
        return <BarChart3 className="h-10 w-10 text-brand" />;
      case 'robot':
        return <Bot className="h-10 w-10 text-brand" />;
      case 'clipboard-list':
        return <ClipboardList className="h-10 w-10 text-brand" />;
      case 'chart-line':
        return <LineChart className="h-10 w-10 text-brand" />;
      case 'presentation-chart-bar':
        return <Presentation className="h-10 w-10 text-brand" />;
      case 'brain':
        return <Brain className="h-10 w-10 text-brand" />;
      default:
        return <BarChart3 className="h-10 w-10 text-brand" />;
    }
  };

  const isAIService = title.toLowerCase().includes('ai');

  return (
    <Card className={cn(
      'overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
      status === 'coming-soon' && 'bg-purple-50',
      isAIService && 'bg-gradient-to-br from-white to-accent/5',
      className
    )}>
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-between items-start">
          {getIcon()}
          {status === 'coming-soon' && (
            <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
              Coming Soon
            </span>
          )}
          {isAIService && !status && (
            <span className="inline-flex items-center rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-medium text-brand">
              AI-Powered
            </span>
          )}
        </div>
        <h3 className={cn("text-xl font-bold text-bone mb-3", isAIService && "text-brand")}>
          {title}
        </h3>
        <p className="text-fog mb-6">{description}</p>
        <div className="space-y-2">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className={cn("mr-2 h-5 w-5 flex-shrink-0 mt-0.5", isAIService ? "text-brand" : "text-brand")} />
              <span className="text-bone/90">{highlight}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
