import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 md:p-8 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700/80 transition-all group backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        
        {/* Title Block: Dynamically wraps title in an external anchor tag if liveLink exists */}
        {project.liveLink ? (
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-bold text-zinc-100 hover:text-emerald-400 group-hover:text-emerald-400 transition-colors"
          >
            {project.title}
            {/* Minimal SVG External Link Arrow Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            >
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>
        ) : (
          <h3 className="text-xl font-bold text-zinc-100">
            {project.title}
          </h3>
        )}

        <span className="text-xs px-2.5 py-1 font-medium bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50 self-start md:self-auto">
          {project.role}
        </span>
      </div>
      
      <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">
        {project.overview}
      </p>

      <div className="mb-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Key Contributions</h4>
        <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-zinc-400">
          {project.achievements.map((item, idx) => (
            <li key={idx} className="pl-1">{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span 
            key={tech} 
            className="text-xs px-2.5 py-1 bg-emerald-500/5 text-emerald-400/90 rounded border border-emerald-500/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}