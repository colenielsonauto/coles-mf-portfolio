import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <BackgroundBeams />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="heading-xl">
            Cole Nielson
            <span className="block text-accent mt-2">
              AI & Automation Enthusiast
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Welcome to my portfolio. Here, I showcase the projects and skills 
            developed on my journey into AI and web development. Feel free 
            to explore my work.
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
    </section>
  );
}
