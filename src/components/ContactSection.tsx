
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, GitHub, User } from 'lucide-react';

export function ContactSection() {
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
              <Button variant="outline" asChild>
                <a href="mailto:cole@example.com">Send Email</a>
              </Button>
            }
          />
          
          <ContactCard 
            icon={<GitHub className="h-8 w-8" />}
            title="GitHub"
            description="Check out my code"
            action={
              <Button variant="outline" asChild>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              </Button>
            }
          />
          
          <ContactCard 
            icon={<User className="h-8 w-8" />}
            title="Let's Connect"
            description="For collaborations and projects"
            action={
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
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
