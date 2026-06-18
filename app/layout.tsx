import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Isaac N. | Senior Backend Engineer & Architect",
  description: "Portfolio of Isaac N., specializing in scalable backends, systems architecture, and AI integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 antialiased`}>
        {/* Subtle background glow */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.06),rgba(255,255,255,0))] -z-10" />
        
        {/* Refinement: Fixed Navigation Header to elegantly host the branding 'N' */}
        <header className="sticky top-0 z-50 backdrop-blur-md border-b border-zinc-900/80 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link href="/" className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 font-black text-lg hover:border-emerald-500/30 transition-colors shadow-inner">
              I
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
              <Link href="/#featured-projects" className="hover:text-zinc-200 transition-colors">Projects</Link>
              <a href="mailto:specisac@gmail.com" className="hover:text-zinc-200 transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        <main className="relative pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}