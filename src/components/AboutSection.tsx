
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Image column */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-center">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg border border-border shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
                  alt="Cole Nielson"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-lg"></div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="md:col-span-7 lg:col-span-8">
            <h2 className="heading-lg mb-6">About Me</h2>
            
            <div className="space-y-4 text-lg">
              <p>
                I'm Cole Nielson, based in Boise, Idaho—a real estate professional and Boise State University student graduating in December 2025.
              </p>
              
              <p>
                My journey into coding and AI began in March 2025 with absolutely no prior experience. In less than a year, I've gone from complete beginner to building complex AI systems and web applications that solve real-world problems.
              </p>
              
              <p>
                My mission is to help small businesses and professionals leverage AI tools through automation and custom AI integrations. I believe that the future belongs to those who can effectively harness AI's capabilities, and I'm dedicated to making these technologies accessible to everyone.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-4 italic">
                <p>
                  "What if ChatGPT, Gemini, Claude, and Grok lived in one place? I built it."
                </p>
              </blockquote>
            </div>
            
            <Card className="mt-8 bg-accent/5 border-accent/20">
              <CardContent className="pt-6">
                <p>
                  This semester, I launched AI Garden — a platform where you can chat with all the top LLMs in one clean, unified interface. Through this project, I learned how to stream LLM responses efficiently, secure backend API calls, and think like a product developer, not just a student.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
