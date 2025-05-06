
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, FileCheck, ExternalLink, FilePdf } from 'lucide-react';
import Button from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

interface CertificationsSectionProps {
  className?: string;
  fullPage?: boolean;
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  pdfUrl?: string;
}

const CertificationsSection = ({ className, fullPage = false }: CertificationsSectionProps) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  const certificates: Certificate[] = [
    {
      id: 1,
      title: '2 Day AI Mastery Workshop',
      issuer: 'Outskill',
      date: 'April 2025',
      category: 'AI',
      image: '/placeholder.svg',
      pdfUrl: '/certificates/ai-mastery-workshop.pdf',
    },
    {
      id: 2,
      title: 'SEO Foundations',
      issuer: 'LinkedIn Learning',
      date: 'April 15, 2025',
      category: 'Digital Marketing',
      image: '/placeholder.svg',
      pdfUrl: '/certificates/seo-foundations.pdf',
    },
    {
      id: 3,
      title: 'Generative AI Overview for Project Managers',
      issuer: 'Project Management Institute',
      date: 'April 13, 2025',
      category: 'AI',
      image: '/lovable-uploads/2847f3dd-30be-4687-930e-7807b07cbec4.png',
      pdfUrl: '/certificates/generative-ai-overview.pdf',
    },
    {
      id: 4,
      title: 'Six Sigma White Belt',
      issuer: 'Council for Six Sigma Certification',
      date: 'April 7, 2025',
      category: 'Process Improvement',
      image: '/placeholder.svg',
      pdfUrl: '/certificates/six-sigma-whitebelt.pdf',
    },
    {
      id: 5,
      title: 'Google My Business',
      issuer: 'Google',
      date: 'May 3, 2025',
      category: 'Digital Marketing',
      image: '/lovable-uploads/5463c36a-30f4-4d3a-920f-50c0bfdcb8f8.png',
      pdfUrl: '/certificates/google-my-business.pdf',
    },
  ];

  // Display all certificates or a limited set
  const displayedCertificates = fullPage ? certificates : certificates;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI':
        return <FileCheck className="h-5 w-5 text-accent" />;
      case 'Digital Marketing':
        return <Award className="h-5 w-5 text-purple-500" />;
      default:
        return <GraduationCap className="h-5 w-5 text-navy-500" />;
    }
  };

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={cn(fullPage ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl", "font-bold text-navy-900 mb-6")}>
            Certifications & Credentials
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Professional certifications that demonstrate my expertise in <span className="text-accent font-medium">AI technologies</span>, project management, 
            and business optimization methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedCertificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`} 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                  
                  {cert.pdfUrl && (
                    <div className="absolute bottom-2 right-2">
                      <a 
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        title="View Certificate PDF"
                      >
                        <FilePdf className="h-5 w-5 text-red-500" />
                      </a>
                    </div>
                  )}
                </div>
                <CardContent className="flex-grow flex flex-col p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant={cert.category === 'AI' ? 'default' : 'secondary'} className="mb-2">
                      <span className="flex items-center">
                        {getCategoryIcon(cert.category)}
                        <span className="ml-1">{cert.category}</span>
                      </span>
                    </Badge>
                    <span className="text-sm text-navy-500">{cert.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{cert.title}</h3>
                  <p className="text-navy-600 text-sm">Issued by {cert.issuer}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {fullPage && (
          <div className="text-center mt-12">
            <Link to="/resume">
              <Button variant="outline" icon="download">
                Download Full Resume
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
