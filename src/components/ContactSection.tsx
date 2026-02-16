
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
                    <Mail className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800">Email (Alternate)</h4>
                      <a 
                        href="mailto:gauravg8316@gmail.com" 
                        className="text-navy-600 hover:text-accent transition-colors"
                      >
                        gauravg8316@gmail.com
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

                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger asChild>
                      <div className="flex items-center cursor-pointer group">
                        <Calendar className="h-6 w-6 text-accent mr-4 flex-shrink-0 group-hover:text-accent-600 transition-colors" />
                        <div>
                          <h4 className="font-semibold text-navy-800 group-hover:text-accent transition-colors">Schedule a Meeting</h4>
                          <p className="text-navy-600 group-hover:text-navy-800 transition-colors">Book a 30-minute consultation</p>
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

            <Card className="shadow-lg h-full">
              <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center items-center">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-navy-800 mb-2">Ready to Chat?</h3>
                  <p className="text-navy-600">Click the calendar option to schedule a meeting or send me a direct message.</p>
                </div>
                
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="default" 
                      size="lg" 
                      icon="arrow"
                      className="bg-accent hover:bg-accent/90 text-white"
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
