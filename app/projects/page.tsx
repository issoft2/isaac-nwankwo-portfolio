import Link from "next/link";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <Section>
      <div className="pt-10 mb-10">
        <Link href="/" className="text-sm text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-2 mb-4">
          ← Back to Overview
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
          All Production & Systems Engineering Projects
        </h1>
        <p className="text-zinc-400 mt-2">
          A deep dive into platforms I have engineered, optimized, and delivered.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}