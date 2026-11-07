export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Python", "TypeScript / JavaScript", "SQL"],
  },
  {
    category: "AI & ML",
    items: [
      "LLMs & Generative AI",
      "RAG (hybrid retrieval, embeddings, reranking)",
      "Local LLMs (Ollama, llama.cpp)",
      "Prompt engineering & structured JSON outputs",
      "Vision-language models (Gemma, Llama)",
      "scikit-learn, LightGBM, sentence-transformers",
      "Whisper, pyannote",
      "Mathematical modeling",
    ],
  },
  {
    category: "Evaluation & LLMOps",
    items: [
      "Labelled evaluation sets",
      "LLM-as-judge",
      "F1 / Cohen's kappa",
      "Automated evaluation in CI (GitHub Actions)",
      "Drift monitoring",
      "Model comparison (quality, latency, cost)",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native (Expo)",
      "Zustand",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & data",
    items: [
      "Node.js / Express, Hono",
      "REST APIs, Zod",
      "PostgreSQL (Neon, pgvector)",
      "Prisma",
      "MongoDB, MySQL, Redis",
      "Auth & security (JWT, 2FA, rate limiting)",
    ],
  },
  {
    category: "Cloud & tools",
    items: [
      "AWS S3",
      "Cloudflare (Workers AI, R2)",
      "Vercel, Railway",
      "Docker",
      "Git / GitHub, Vitest",
      "Figma",
    ],
  },
  {
    category: "Languages",
    items: [
      "English - advanced",
      "Ukrainian - bilingual",
      "Russian - bilingual",
      "Swedish - basic",
    ],
  },
];
