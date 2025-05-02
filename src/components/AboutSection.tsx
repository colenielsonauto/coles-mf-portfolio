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
                  src="/lovable-uploads/06d278a0-87a7-497e-abed-55148442fbf0.png" 
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
