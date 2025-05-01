
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Development",
    skills: [
      "HTML", "CSS", "Tailwind", "React", "Next.js", "Bun", "Node.js", 
      "Shadcn UI", "Lucide Icons", "Framer Motion", "REST APIs", "Git", "GitHub"
    ]
  },
  {
    name: "AI & LLMs",
    skills: [
      "OpenAI API", "Anthropic (Claude) API", "Gemini API", "Grok API",
      "Model Context Protocol", "AI Streaming", "Upstash Redis", "Web Search Augmentation"
    ]
  },
  {
    name: "Backend & Data",
    skills: [
      "SQL", "PostgreSQL", "MongoDB", "Supabase", "RESTful APIs", 
      "Server Functions", "Middleware", "Authentication", "Rate Limiting"
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Terminal", "Cursor IDE", "Vercel", "Google Sheets API", "n8n automations",
      "Codex CLI", "OpenAI CLI", "Stripe Integration"
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center">Skills & Expertise</h2>
          <p className="mt-4 text-center text-muted-foreground mb-12">
            Technologies and tools I've learned since March 2025.
          </p>
          
          <Tabs defaultValue="Development" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.name}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.name} value={category.name} className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
