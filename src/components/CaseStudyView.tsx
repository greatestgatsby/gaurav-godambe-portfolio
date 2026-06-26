
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CaseStudyViewProps {
  title: string;
  client: string;
  summary: string;
  background: string;
  objective: string;
  approach: string[];
  impact: string;
  image?: string;
}

const CaseStudyView = ({
  title,
  client,
  summary,
  background,
  objective,
  approach,
  impact,
  image,
}: CaseStudyViewProps) => {
  return (
    <div className="container max-w-4xl mx-auto py-8">
      <Link to="/portfolio" className="inline-flex items-center text-brand hover:text-brand mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all projects
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold text-bone mb-4">{title}</h1>
      <h2 className="text-xl text-brand font-medium mb-6">Client: {client}</h2>
      
      {image && (
        <div className="mb-8">
          <img 
            src={image} 
            alt={`${title} - ${client}`} 
            className="w-full h-auto rounded-lg shadow-md"
            loading="lazy"
            width="1200"
            height="675"
          />
        </div>
      )}
      
      <div className="prose max-w-none">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-bone mb-3">Summary</h3>
          <p className="text-fog">{summary}</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-bone mb-3">Background</h3>
          <p className="text-fog">{background}</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-bone mb-3">Objective</h3>
          <p className="text-fog">{objective}</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-bone mb-3">Approach</h3>
          {approach.map((paragraph, index) => (
            <p key={index} className="text-fog mb-4">{paragraph}</p>
          ))}
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-bone mb-3">Impact</h3>
          <p className="text-fog">{impact}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyView;
