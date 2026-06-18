import Section from "./components/Section";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  // Quick core skills array matching your CV
  const coreSkills = ["Node.js", "TypeScript", "Python (FastAPI)", "PHP", "PostgreSQL/MySQL", "System Architecture", "RAG & LLM Workflows", "Team Leadership"];

  return (
    <div className="space-y-4">
      <Section>
        <Hero />
      </Section>

      <Section id="skills" className="!py-0">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Core Competencies</h3>
        <div className="flex flex-wrap gap-3">
          {coreSkills.map((skill) => (
            <span key={skill} className="px-3 py-1.5 text-sm bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section id="featured-projects">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Featured Architectural Implementations</h2>
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