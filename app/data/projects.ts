export interface Project {
  id: string;
  title: string;
  role: string;
  overview: string;
  stack: string[];
  achievements: string[];
  featured: boolean;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: "mamacare",
    title: "Safe Born Assitant – AI-Powered Pregnancy Assistant",
    role: "Solo Full-Stack Engineer & Architect", // Highlighted solo execution
    overview: "An intelligent, event-driven maternal healthcare platform combining mobile health tracking, AI-powered guidance, and healthcare professional oversight. Independently architected and built the entire ecosystem from scratch.",
    stack: ["Python", "FastAPI", "React Native (Expo)", "PostgreSQL", "Docker", "LLM Workflows", "Agentic AI"],
    achievements: [
      "Solely designed and implemented the entire system architecture, including the Python FastAPI backend and the React Native mobile application.",
      "Engineered an autonomous, event-driven AI pipeline that analyzes longitudinal patient wellness data to trigger automated clinical risk escalations.",
      "Developed secure end-to-end authentication using Clerk and built a specialized Human-in-the-Loop interface for medical professionals."
    ],
    featured: true,
    liveLink: "https://safeborn.app"
  },
  {
    id: "rag-platform",
    title: "Multi-Tenant SaaS Document Intelligence & RAG Platform",
    role: "Solo Full-Stack Engineer & Architect", // Highlighted solo execution
    overview: "A secure, multi-tenant SaaS platform enabling enterprise organizations to index, search, and converse with deep internal knowledge bases using Retrieval-Augmented Generation. Developed end-to-end as a single engineer.",
    stack: ["Python", "FastAPI", "React.js", "TypeScript", "ChromaDB", "Vector Embeddings", "RAG Pipelines"],
    achievements: [
      "Independently engineered the full-stack architecture, building a responsive React/TypeScript frontend and a scalable FastAPI backend.",
      "Implemented absolute tenant-aware data isolation and strict role-based access controls (RBAC) to guarantee enterprise data privacy.",
      "Designed and optimized the entire RAG pipeline from scratch, leveraging ChromaDB for high-performance vector ingestion and lightning-fast context retrieval."
    ],
    featured: true
  }
];