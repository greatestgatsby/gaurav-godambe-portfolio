
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  className?: string;
  fullPage?: boolean;
}

const ContactSection = ({ className, fullPage = false }: ContactSectionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this URL with your Make.com webhook URL
      const webhookUrl = '';  // Add your Make.com webhook URL here
      
      if (!webhookUrl) {
        toast({
          title: "Configuration Error",
          description: "Please set up the Make.com webhook URL",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: window.location.origin
        }),
      });

      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={cn(fullPage ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl", "font-bold text-navy-900 mb-6")}>
            Get In Touch
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss how I can help your organization? 
            Drop me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-navy-700 font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                      className="w-full"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-navy-700 font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="w-full"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-navy-700 font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="What is this regarding?" 
                      required 
                      className="w-full"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-navy-700 font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message here..." 
                      required 
                      className="min-h-[120px] w-full"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="h-full">
              <CardContent className="p-6 md:p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6 mb-auto">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">Email</h4>
                      <a 
                        href="mailto:Gaurav.g83@gmail.com" 
                        className="text-navy-600 hover:text-accent transition-colors"
                      >
                        Gaurav.g83@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/gaurav-godambe-506b41b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy-600 hover:text-accent transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">GitHub</h4>
                      <a 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy-600 hover:text-accent transition-colors"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">Location</h4>
                      <p className="text-navy-600">Mumbai, India</p>
                    </div>
                  </div>
                </div>
                
                {fullPage && (
                  <div className="mt-8 pt-8 border-t border-navy-100">
                    <h4 className="font-semibold text-navy-800 mb-4">Connect With Me</h4>
                    <div className="flex space-x-4">
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
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-navy-100 hover:bg-navy-200 text-navy-800 p-3 rounded-full transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href="mailto:Gaurav.g83@gmail.com" 
                        className="bg-navy-100 hover:bg-navy-200 text-navy-800 p-3 rounded-full transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
