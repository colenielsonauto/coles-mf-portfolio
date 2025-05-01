
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="heading-xl">
            Cole Nielson
            <span className="block text-accent mt-2">
              AI & Web Developer
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            From real estate professional to AI developer in less than a year.
            Building intelligent tools that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}
