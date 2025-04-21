
import React from 'react';
import Button from './ui/Button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn('pt-32 pb-20 md:pt-40 md:pb-28', className)}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              Transforming Finance with Strategic Insight & Technology
            </h1>
            <p className="text-xl md:text-2xl text-navy-600 mb-6">
              15+ years of experience driving finance transformation, automation, and performance excellence.
            </p>
            <p className="text-lg text-navy-500 mb-8">
              Vice President | Business Finance | FP&A | Tech Transformation | Program Leadership
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/portfolio" icon="arrow">
                View My Work
              </Button>
              <Button variant="secondary" href="/contact" icon="arrow">
                Hire Me
              </Button>
              <Button variant="outline" href="/resume.pdf" icon="download" download>
                Download Resume
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/5] bg-navy-200 rounded-2xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  alt="Professional portrait of Gaurav Godambe"
                  className="object-cover w-full h-full absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900 to-transparent">
                <h2 className="text-white font-bold text-2xl">Gaurav Godambe</h2>
                <p className="text-navy-100">Finance Transformation Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
