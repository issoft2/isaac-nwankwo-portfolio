import Section from "./components/Section";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  // Refinement: Categorized skills to provide better semantic flow and layout control
  const technicalSkills = [
    "Node.js", 
    "TypeScript", 
    "Python (FastAPI)", 
    "PHP", 
    "PostgreSQL/MySQL", 
    "System Architecture", 
    "RAG & LLM Workflows"
  ];

  const leadershipSkills = [
    "Team Leadership",
    "Agile Delivery",
    "Cross-Functional Collaboration"
  ];

  return (
    <div className="space-y-4">
      <Section>
        <Hero />
      </Section>

      {/* Refinement: Beautifully balanced & structured Core Competencies section */}
      <Section id="skills" className="!py-0">
        <div className="border-t border-zinc-900 pt-10">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-5">
            Core Competencies
          </h3>
          
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {/* Technical Stack Tags */}
            {technicalSkills.map((skill) => (
              <span 
                key={skill} 
                className="px-3.5 py-2 text-sm bg-zinc-900/60 border border-zinc-800 text-zinc-300 rounded-lg backdrop-blur-sm transition-colors hover:border-zinc-700"
              >
                {skill}
              </span>
            ))}

            {/* Leadership Tags - Specially highlighted to reflect seniority and fix the orphan layout bug */}
            {leadershipSkills.map((skill) => (
              <span 
                key={skill} 
                className="px-3.5 py-2 text-sm bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 font-medium rounded-lg backdrop-blur-sm shadow-sm shadow-emerald-500/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="featured-projects">
        <div className="flex items-center justify-between mb-8 border-t border-zinc-900 pt-12">
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">
            Featured Architectural Implementations
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}