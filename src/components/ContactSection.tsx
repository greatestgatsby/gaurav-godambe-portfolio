
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/CustomButton';

interface ContactSectionProps {
  className?: string;
  fullPage?: boolean;
}

const ContactSection = ({ className, fullPage = false }: ContactSectionProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Load Calendly widget script when dialog is opened
    if (dialogOpen) {
      const script = document.createElement('script');
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up script when component unmounts or dialog closes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [dialogOpen]);

  return (
    <section className={cn('py-12 md:py-16', className)}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className={cn(fullPage ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl", "font-bold text-bone")}>
            Get In Touch
          </h2>
          <p className="text-xl text-fog max-w-3xl mx-auto mt-4">
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
                    <Mail className="h-6 w-6 text-brand mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-bone">Email</h4>
                      <a 
                        href="mailto:Gaurav.g83@gmail.com" 
                        className="text-fog hover:text-brand transition-colors"
                      >
                        Gaurav.g83@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-brand mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-bone">Email (Alternate)</h4>
                      <a 
                        href="mailto:gauravg8316@gmail.com" 
                        className="text-fog hover:text-brand transition-colors"
                      >
                        gauravg8316@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="h-6 w-6 text-brand mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-bone">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/gaurav-godambe-506b41b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-fog hover:text-brand transition-colors"
                      >
                        Gaurav Godambe
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-brand mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-bone">Location</h4>
                      <p className="text-fog">Mumbai, India</p>
                    </div>
                  </div>

                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <div className="flex items-center cursor-pointer group">
                        <Calendar className="h-6 w-6 text-brand mr-4 flex-shrink-0 group-hover:text-brand-600 transition-colors" />
                        <div>
                          <h4 className="font-semibold text-bone group-hover:text-brand transition-colors">Schedule a Meeting</h4>
                          <p className="text-fog group-hover:text-bone transition-colors">Book a 30-minute consultation</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] h-[700px] p-0">
                      <div 
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/gaurav-g83/30min" 
                        style={{ minWidth: "320px", height: "700px" }}
                      ></div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                {fullPage && (
                  <div className="mt-8 pt-6 border-t border-line flex justify-center space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/gaurav-godambe-506b41b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-surface hover:bg-surface text-bone p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="mailto:Gaurav.g83@gmail.com" 
                      className="bg-surface hover:bg-surface text-bone p-3 rounded-full transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-lg h-full">
              <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center items-center">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-bone mb-2">Ready to Chat?</h3>
                  <p className="text-fog">Click the calendar option to schedule a meeting or send me a direct message.</p>
                </div>
                
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="default" 
                      size="lg" 
                      icon="arrow"
                      className="bg-brand hover:bg-brand/90 text-white"
                    >
                      Schedule a Meeting
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
