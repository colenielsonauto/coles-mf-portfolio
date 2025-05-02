import { ProjectCard, ProjectProps } from './ProjectCard';
import { useState } from 'react';
import { ProjectContactModal } from './ProjectContactModal';

const projects: ProjectProps[] = [
  {
    title: "AI Garden – LLM Aggregator Platform",
    description: "A unified platform for all major AI models",
    longDescription: "Allowing users to gain access to all of the best models in one place.",
    tags: ["Next.js", "OpenAI API", "Anthropic API", "Google API", "Streaming", "Full Stack"],
    image: "/lovable-uploads/3c91d6ed-6297-4f0e-8742-3517ace7422f.png",
    link: "https://youraigarden.com"
  },
  {
    title: "Automation and Application Integrations",
    description: "Automated lead capture for real estate",
    longDescription: "An automated system that handles real-time communication about agents and listings, captures contact details, and notifies agents instantly via SMS.",
    tags: ["n8n", "Automation", "Google Sheets API", "SMS Integration", "Lead Generation"],
    image: "/lovable-uploads/75babce0-9875-4199-aa69-5c9477d273b0.png",
    showContactModal: true
  },
  {
    title: "Natural Language SQL Query Tool",
    description: "Convert human questions into SQL queries",
    longDescription: "A system that converts a 33M-token dataset into a searchable SQL database connected to an LLM, allowing users to ask natural language questions.",
    tags: ["SQL", "PostgreSQL", "LLM Integration", "Natural Language Processing", "Data Engineering"],
    image: "/lovable-uploads/2f6d7c5d-0c07-48c4-8245-cdcb384c1ad4.png",
    showContactModal: true
  },
  {
    title: "Full Stack Website Builds",
    description: "Modern web applications awaiting deployment",
    longDescription: "Multiple fully functional websites built with modern frameworks, featuring complete frontend, backend, database, and authentication systems.",
    tags: ["Next.js", "Tailwind CSS", "Bun", "Full Stack", "Authentication", "Database"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80",
    showContactModal: true
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setIsModalOpen(true);
  };

  return (
    <section 
      id="projects" 
      className="section bg-muted/30 pt-24 pb-16 md:pt-32 md:pb-24 relative"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)',
      }}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my recent work in AI development and web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onContactRequest={project.showContactModal ? () => openContactModal(project.title) : undefined}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectContactModal 
          projectTitle={selectedProject} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </section>
  );
}
