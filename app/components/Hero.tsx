import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-start space-y-6 pt-20 pb-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
        Available for Technical Leadership & AI/Backend Roles
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Isaac N.</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-zinc-400">
        Senior Backend Engineer & Software Architect
      </h2>
      <p className="text-zinc-400 max-w-2xl leading-relaxed text-base md:text-lg">
        With 9+ years of experience, I specialize in building distributed, high-availability backends, scalable multi-tenant SaaS architectures, and production-grade Agentic AI pipelines. Formerly leading engineering teams in the digital health space.
      </p>
      <div className="flex flex-wrap gap-4 pt-4">
        <a 
          href="mailto:specisaac@gmail.com" 
          className="px-6 py-3 text-sm font-medium text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-lg font-semibold"
        >
          Get In Touch
        </a>
        <Link 
          href="/projects" 
          className="px-6 py-3 text-sm font-medium text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 transition-colors rounded-lg"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}