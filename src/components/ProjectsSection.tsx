
import { ProjectCard, ProjectProps } from './ProjectCard';

const projects: ProjectProps[] = [
  {
    title: "AI Garden – LLM Aggregator Platform",
    description: "A unified platform for all major AI models",
    longDescription: "Access ChatGPT, Gemini, Claude, and Grok in one place with a clean, unified interface. Includes streaming responses and GPT-4.5 access for paid users.",
    tags: ["Next.js", "OpenAI API", "Anthropic API", "Google API", "Streaming", "Full Stack"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "n8n Real Estate Website Bot",
    description: "Automated lead capture for real estate",
    longDescription: "An automated system that handles real-time communication about agents and listings, captures contact details, and notifies agents instantly via SMS.",
    tags: ["n8n", "Automation", "Google Sheets API", "SMS Integration", "Lead Generation"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Natural Language SQL Query Tool",
    description: "Convert human questions into SQL queries",
    longDescription: "A system that converts a 33M-token dataset into a searchable SQL database connected to an LLM, allowing users to ask natural language questions.",
    tags: ["SQL", "PostgreSQL", "LLM Integration", "Natural Language Processing", "Data Engineering"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Full Stack Website Builds",
    description: "Modern web applications awaiting deployment",
    longDescription: "Multiple fully functional websites built with modern frameworks, featuring complete frontend, backend, database, and authentication systems.",
    tags: ["Next.js", "Tailwind CSS", "Bun", "Full Stack", "Authentication", "Database"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section bg-muted/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my recent work in AI development and web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
