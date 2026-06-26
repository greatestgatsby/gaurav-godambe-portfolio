
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCard from './TestimonialCard';

interface AboutSectionProps {
  className?: string;
  fullPage?: boolean;
}

const AboutSection = ({ className, fullPage = false }: AboutSectionProps) => {
  const skills = {
    strategic: [
      'P&L Management',
      'Forecasting & AOP',
      'Cost Optimization',
      'Investment Planning',
    ],
    program: [
      'Agile/Waterfall Methodologies',
      'Cross-functional Teams',
      'Governance & Delivery',
      'Stakeholder Management',
    ],
    technology: [
      'Power BI',
      'SAP',
      'Automation',
      'Salesforce Einstein',
    ],
    ai: [
      'Client Engagement Analytics',
      'Reporting Dashboards',
      'Workflow Automation',
      'GPTs & Copilots',
    ],
  };

  const testimonials = [
    {
      quote: `I have the pleasure of working closely with Gaurav during his tenure as the regional CFO at MSCI, where he demonstrated exceptional leadership and financial expertise. Gaurav's innovative approach to budget planning played a pivotal role in driving financial success across different product lines in the Asia Pacific region.

His strong business acumen is evident in every aspect of his work, and he consistently delivers insightful and impactful dashboards that provide valuable sales insights and performance trends. Gaurav's technical background in computing, combined with his meticulous attention to financial details, enables him to make data-driven decisions that have greatly benefited the organization.

I wholeheartedly endorse Gaurav for any leadership role that requires a strategic vision and financial expertise. His dedication, professionalism, and ability to drive results make him an invaluable asset to any team or organization.`,
      author: "Jason Chan, CFA",
      position: "Fund and Corporate Service Solutions",
      company: "MSCI",
      avatarUrl: "/lovable-uploads/b4de7b70-5781-4c7b-adf9-dfbca5d9752e.png",
    },
    {
      quote: `I highly recommend my colleague Gaurav for his exceptional ability to identify insightful trends and address gaps through his expertise in creating effective dashboards. His analytical skills and strategic mindset significantly contribute to our team's success. A valuable asset for any multinational organisation.`,
      author: "Vivek Agarwalla, CFA",
      position: "Executive Director - Portfolio & Risk Management Analytics",
      company: "MSCI",
      avatarUrl: "/lovable-uploads/f61926d8-11b7-4f1e-a8d4-233df1e41e03.png",
    },
    {
      quote: `Highly professional and efficient. One of those who get things done ✅.`,
      author: "Sean Kim",
      position: "APAC Lead of Index Structured Products",
      company: "MSCI",
      avatarUrl: "/lovable-uploads/cbf06246-48b1-48e2-a308-54922c95f8a4.png",
    },
  ];

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container">
        {fullPage && (
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-bone mb-6">About Me</h1>
            <p className="text-xl text-fog max-w-3xl mx-auto">
              A finance transformation leader with a passion for technology and innovation
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className={cn(fullPage ? "text-3xl" : "text-3xl md:text-4xl", "font-bold text-bone mb-6")}>
              {!fullPage && "About Me"}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-bone/90 mb-6">
                Hi, I'm Gaurav Godambe, a finance transformation leader and program manager with 
                over 15 years of experience spanning business finance, FP&A, performance reporting, 
                and technology-led change.
              </p>
              <p className="text-bone/90 mb-6">
                From optimizing financial processes to driving multi-million-dollar savings with AI 
                and BI tools, I thrive at the intersection of strategy, finance, and innovation. 
                I bring deep experience across global organizations like MSCI, Siemens, and Deutsche Bank—leading 
                cross-functional programs that turn insights into impact.
              </p>
              {fullPage && (
                <>
                  <p className="text-bone/90 mb-6">
                    My approach combines deep financial expertise with a tech-forward mindset,
                    enabling me to bridge the gap between finance functions and technological innovation.
                    I specialize in identifying inefficiencies and implementing data-driven solutions
                    that drive measurable business outcomes.
                  </p>
                  <p className="text-bone/90">
                    Throughout my career, I've built a reputation for delivering complex transformation
                    initiatives on time and under budget, while ensuring stakeholder alignment and
                    sustainable process improvements.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-bone mb-4">Strategic Finance</h3>
                  <ul className="space-y-2">
                    {skills.strategic.map((skill) => (
                      <li key={skill} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-brand" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-bone mb-4">Program Management</h3>
                  <ul className="space-y-2">
                    {skills.program.map((skill) => (
                      <li key={skill} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-brand" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-bone mb-4">Technology</h3>
                  <ul className="space-y-2">
                    {skills.technology.map((skill) => (
                      <li key={skill} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-brand" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-bone mb-4">AI & Automation</h3>
                  <ul className="space-y-2">
                    {skills.ai.map((skill) => (
                      <li key={skill} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-brand" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {fullPage && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-bone mb-8 text-center">Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="font-bold text-4xl text-brand mb-2">15+</div>
                  <h3 className="text-lg font-semibold text-bone mb-2">Years Experience</h3>
                  <p className="text-fog">
                    Across global financial institutions and technology companies
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="pt-6">
                  <div className="font-bold text-4xl text-brand mb-2">$3M+</div>
                  <h3 className="text-lg font-semibold text-bone mb-2">Cost Savings</h3>
                  <p className="text-fog">
                    Delivered through process optimization and automation
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="pt-6">
                  <div className="font-bold text-4xl text-brand mb-2">50%</div>
                  <h3 className="text-lg font-semibold text-bone mb-2">Efficiency Gain</h3>
                  <p className="text-fog">
                    Average improvement in reporting cycles through BI implementation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-bone mb-8 text-center">Testimonials</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8">
            {testimonials.map((t, idx) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                position={t.position}
                company={t.company}
                avatarUrl={t.avatarUrl}
                className="mb-4"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
