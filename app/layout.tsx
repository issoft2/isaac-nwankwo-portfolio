import "./globals.css"; // Ensure this includes your Tailwind directives
import { Inter } from "next/font/google";

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
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200`}>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.07),rgba(255,255,255,0))] -z-10" />
        <main className="relative pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}