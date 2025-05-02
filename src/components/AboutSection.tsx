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
                I’m Cole, a self-taught AI and automation enthusiast passionate about building projects that showcase the real-world potential of these technologies. My interest in AI began with the launch of ChatGPT in November 2022, but in February 2025, I decided to pursue this passion professionally.
              </p>
              
              <p>
                Since then, I’ve rapidly developed practical skills in AI, automation, and web technologies, entirely through self-guided learning and hands-on experimentation. This portfolio highlights some of my recent projects and reflects my enthusiasm for continuous growth in this exciting and rapidly evolving field.
              </p>
              
              <p>
                I’m actively seeking opportunities to collaborate, contribute, and further expand my skills and experience in AI and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
