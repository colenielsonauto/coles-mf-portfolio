import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProjectProps {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  link?: string;
  showContactModal?: boolean;
  buttonText?: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  onContactRequest?: () => void;
}

export function ProjectCard({ project, onContactRequest }: ProjectCardProps) {
  const defaultButtonText = project.showContactModal ? "Learn More" : "Explore";
  const buttonText = project.buttonText || defaultButtonText;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-accent/50 h-full flex flex-col">
      {project.image && (
        <div className="relative h-52 overflow-hidden border-b">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          {project.longDescription || ''}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        {project.link ? (
          project.link.startsWith('/') ? (
            <Button variant="ghost" asChild className="group">
              <Link to={project.link}>
                {buttonText} 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <Button variant="ghost" asChild className="group">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {buttonText} 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          )
        ) : project.showContactModal && onContactRequest ? (
          <Button variant="ghost" className="group" onClick={onContactRequest}>
            {buttonText} 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        ) : (
          <span className="text-sm text-muted-foreground">Coming soon</span>
        )}
      </CardFooter>
    </Card>
  );
}
