
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactSectionProps {
  className?: string;
  fullPage?: boolean;
}

const ContactSection = ({ className, fullPage = false }: ContactSectionProps) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={cn('py-12 md:py-16', className)}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className={cn(fullPage ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl", "font-bold text-navy-900")}>
            Get In Touch
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto mt-4">
            Have a project in mind or want to discuss how I can help your organization? 
            Feel free to reach out through any of the following channels.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800">Email</h4>
                      <a 
                        href="mailto:Gaurav.g83@gmail.com" 
                        className="text-navy-600 hover:text-accent transition-colors"
                      >
                        Gaurav.g83@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/gaurav-godambe-506b41b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy-600 hover:text-accent transition-colors"
                      >
                        Gaurav Godambe
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800">Location</h4>
                      <p className="text-navy-600">Mumbai, India</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800">Schedule a Meeting</h4>
                      <p className="text-navy-600">Book a 30-minute consultation</p>
                    </div>
                  </div>
                </div>
                
                {fullPage && (
                  <div className="mt-8 pt-6 border-t border-navy-100 flex justify-center space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/gaurav-godambe-506b41b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-navy-100 hover:bg-navy-200 text-navy-800 p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="mailto:Gaurav.g83@gmail.com" 
                      className="bg-navy-100 hover:bg-navy-200 text-navy-800 p-3 rounded-full transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/gaurav-g83/30min" 
                style={{ minWidth: "320px", height: "600px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
