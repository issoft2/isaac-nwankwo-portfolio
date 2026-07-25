import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-24">

      {/* Content */}
      <div className="flex-1">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Open to Senior Software Engineering Opportunities
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-zinc-100">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Isaac I. Nwankwo
          </span>
        </h1>

        {/* Role */}
        <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-zinc-300">
          Senior Software Engineer · Backend Systems · AI Engineering
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          I design and build production-grade backend systems, modernize
          enterprise healthcare platforms, and lead engineering teams delivering
          scalable software across Africa. With{" "}
          <span className="font-semibold text-zinc-200">
            9+ years of experience
          </span>
          , I specialize in Python, TypeScript, Node.js, distributed systems,
          RESTful APIs, cloud technologies, and AI-powered applications that
          solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/Isaac_Nwankwo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-semibold transition"
          >
            Download Resume
          </a>

          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-200 transition"
          >
            Explore Projects →
          </Link>

          <a
            href="mailto:specisaac@gmail.com"
            className="px-6 py-3 rounded-lg border border-zinc-700 bg-transparent hover:bg-zinc-900 text-zinc-300 transition"
          >
            Contact Me
          </a>

        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-500">

          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:specisaac@gmail.com"
            className="hover:text-emerald-400 transition"
          >
            Email
          </a>

        </div>

        {/* Impact Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <div className="text-3xl font-bold text-zinc-100">9+</div>
            <div className="mt-1 text-sm text-zinc-500">
              Years Experience
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-zinc-100">200+</div>
            <div className="mt-1 text-sm text-zinc-500">
              Healthcare Facilities
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-zinc-100">99.9%</div>
            <div className="mt-1 text-sm text-zinc-500">
              Platform Availability
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold text-zinc-100">40%</div>
            <div className="mt-1 text-sm text-zinc-500">
              Engineering Productivity
            </div>
          </div>

        </div>

      </div>

      {/* Profile Photo */}
      <div className="shrink-0">

        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">

          <img
            src="/me.jpg"
            alt="Isaac I. Nwankwo"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
          />

        </div>

      </div>

    </section>
  );
}