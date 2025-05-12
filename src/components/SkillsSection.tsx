import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Development",
    skills: [
      "HTML", "CSS", "Tailwind", "React", "Next.js", "Bun", "Node.js", 
      "Shadcn UI", "Lucide Icons", "Framer Motion", "REST APIs", "Git", "GitHub",
      "JavaScript", "TypeScript", "Vercel Hosting", "Styled Components", 
      "React Query", "Axios", "React Router", "Server Components", 
      "Static Site Generation (SSG)", "Incremental Static Regeneration (ISR)",
      "Client-Side Rendering (CSR)", "Component Libraries", "Responsive Design",
      "Web Accessibility", "Flexbox", "CSS Grid", "WebSockets", "GraphQL"
    ]
  },
  {
    name: "AI & LLMs",
    skills: [
      "OpenAI API", "Anthropic (Claude) API", "Gemini API", "Grok API",
      "Model Context Protocol", "AI Streaming", "Upstash Redis", "Web Search Augmentation",
      "LangChain", "GPT-4", "LLaMA Models", "LLM Fine-Tuning", "Prompt Engineering",
      "NLP (Natural Language Processing)", "Text Classification", "Text Generation",
      "Semantic Search", "Embedding Vectors", "Zero-Shot Learning", "Few-Shot Learning",
      "Conversational AI", "AI-Powered Chatbots", "Server-Sent Events (SSE)",
      "AI Webhooks", "Multi-Model Orchestration", "Prompt Templates", 
      "Large-Scale AI Deployments", "AI-Powered Automation", "Voice-to-Text Models"
    ]
  },
  {
    name: "Backend & Data",
    skills: [
      "SQL", "PostgreSQL", "MongoDB", "Supabase", "RESTful APIs", 
      "Server Functions", "Middleware", "Authentication", "Rate Limiting",
      "Google Cloud Platform (GCP)", "Firebase", "Express.js", "JSON Web Tokens (JWT)",
      "OAuth 2.0", "Session Management", "API Security", "GraphQL APIs", 
      "Apollo Server", "Data Modeling", "Database Migrations", 
      "Microservices Architecture", "Queue Systems (RabbitMQ, Redis Streams)",
      "Webhooks", "API Rate Limiting", "Cloud Functions", "Cron Jobs"
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Terminal", "Cursor IDE", "Vercel", "Google Workspace Integrations", 
      "n8n Automations", "Codex CLI", "OpenAI CLI", "Stripe Integration",
      "Make.com", "Zapier", "Google Cloud Run", "Docker", "GitHub Actions",
      "GitHub Pages", "GitHub Copilot", "AWS (S3, Lambda, API Gateway)", 
      "Cloudflare", "VS Code", "Figma", "Postman", "Insomnia", "CURL",
      "Jira", "Slack API", "Discord API", "YouTube Data API", 
      "Google Maps API", "Twilio API", "Notion API", "LinkedIn API",
      "Stripe Payments API", "SendGrid", "SMTP Email Services", 
      "OBS Studio", "DigitalOcean", "Netlify", "Render", "GitLab",
      "WebRTC", "REST Client", "Webhook Configuration", "OAuth Authentication",
      "Service Workers", "Performance Optimization"
    ]
  }
];

export function SkillsSection() {
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(skillCategories[0]?.name || null);

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center">Skills & Experience</h2>
          <p className="mt-4 text-center text-muted-foreground mb-12">
            Some of the technologies and tools I've learned since March 2025.
          </p>
          
          {/* Desktop View using Tabs */}
          <div className="hidden md:block">
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

          {/* Mobile View using custom collapsible sections */}
          <div className="block md:hidden space-y-4">
            {skillCategories.map((category) => {
              const isOpen = openMobileSection === category.name;
              return (
                <div key={category.name} className="border-b border-border/40 pb-4 last:border-b-0">
                  <button 
                    onClick={() => setOpenMobileSection(isOpen ? null : category.name)}
                    className={`w-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 justify-center flex items-center gap-2 ${isOpen ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/50'}`}
                  >
                    {category.name}
                    <ChevronDown 
                      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-4 pl-3">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.map((skill) => (
                          <span key={skill} className="skill-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
