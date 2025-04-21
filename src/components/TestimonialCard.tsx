
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  company?: string;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  avatarUrl,
  className,
}: TestimonialCardProps) => {
  return (
    <Card className={cn('overflow-hidden shadow-lg', className)}>
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <Avatar className="w-20 h-20 border-2 border-accent bg-black">
              {avatarUrl ? (
                <AvatarImage
                  src={avatarUrl}
                  alt={author}
                  className="w-full h-full object-cover bg-black"
                />
              ) : null}
              {/* Removed AvatarFallback with initials */}
            </Avatar>
          </div>
          <div className="flex-1">
            <blockquote>
              <p className="text-lg text-navy-700 mb-4 italic">"{quote}"</p>
              <footer className="text-navy-600">
                <cite className="font-semibold not-italic">— {author}</cite>
                {(position || company) && (
                  <div className="text-sm text-navy-500">
                    {position && <span>{position}</span>}
                    {position && company && <span>, </span>}
                    {company && <span>{company}</span>}
                  </div>
                )}
              </footer>
            </blockquote>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
