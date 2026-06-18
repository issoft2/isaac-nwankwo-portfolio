export interface Project {
  id: string;
  title: string;
  role: string;
  overview: string;
  stack: string[];
  achievements: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "mamacare",
    title: "Safe Born – AI-Powered Pregnancy Assistant",
    role: "Lead Backend Engineer & Solution Architect",
    overview: "An intelligent, event-driven maternal healthcare platform combining mobile health tracking, AI-powered guidance, and healthcare professional oversight to provide automated clinical risk escalation.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "LLM Workflows", "Agentic AI"],
    achievements: [
      "Architected a high-performance, API-first backend using FastAPI for longitudinal patient data.",
      "Designed an event-driven system analyzing daily health logs to trigger automated high-risk clinical escalations.",
      "Engineered a Human-in-the-Loop architecture allowing medical professionals to validate AI-generated recommendations."
    ],
    featured: true
  },
  {
    id: "rag-platform",
    title: "Multi-Tenant SaaS Document Intelligence & RAG Platform",
    role: "Lead Backend Engineer & Solution Architect",
    overview: "A secure, multi-tenant SaaS platform enabling enterprise organizations to index, search, and converse with deep internal knowledge bases using Retrieval-Augmented Generation.",
    stack: ["Python", "FastAPI", "ChromaDB", "Vector Embeddings", "RAG Pipelines", "TypeScript"],
    achievements: [
      "Architected strict organization-level data isolation and role-based access control (RBAC) across tenants.",
      "Optimized ChromaDB vector searches to achieve lightning-fast context retrieval for LLM execution.",
      "Transformed traditional document storage into an active semantic search environment, minimizing knowledge discovery times."
    ],
    featured: true
  }
];