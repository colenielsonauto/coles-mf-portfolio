
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Instagram, Linkedin, Copy, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';
import { toast } from '@/components/ui/sonner';

export function ContactSection() {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText('colenielson6@gmail.com');
    toast.success('Email copied to clipboard');
    setIsEmailOpen(false);
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Interested in working together or have questions about my projects?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard 
            icon={<Mail className="h-8 w-8" />}
            title="Email"
            description="Drop me a line anytime"
            action={
              <Popover open={isEmailOpen} onOpenChange={setIsEmailOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline">Send Email</Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-sm">My Email Address</h4>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6" 
                      onClick={() => setIsEmailOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <code className="p-2 rounded bg-muted flex-grow">
                      colenielson6@gmail.com
                    </code>
                    <Button variant="outline" size="icon" onClick={copyEmail}>
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy email address</span>
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            }
          />
          
          <ContactCard 
            icon={<Instagram className="h-8 w-8" />}
            title="Instagram"
            description="Follow my AI journey"
            action={
              <Button variant="outline" asChild>
                <a href="https://www.instagram.com/colenielson.ai" target="_blank" rel="noopener noreferrer">
                  Follow Me
                </a>
              </Button>
            }
          />
          
          <ContactCard 
            icon={<Linkedin className="h-8 w-8" />}
            title="Let's Connect"
            description="For collaborations and projects"
            action={
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/cole-nielson-b05724196/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ 
  icon, 
  title, 
  description, 
  action 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}) {
  return (
    <Card className="text-center">
      <CardContent className="pt-6 flex flex-col items-center">
        <div className="p-3 rounded-full bg-accent/10 text-accent mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        {action}
      </CardContent>
    </Card>
  );
}

