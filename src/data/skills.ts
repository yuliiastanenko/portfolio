export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    items: [
      "JavaScript / TypeScript",
      "React Native",
      "Zustand",
      "Node.js / Express",
      "PostgreSQL / MongoDB",
    ],
  },
  {
    category: "Tools & cloud",
    items: ["AWS S3", "Git / GitHub", "Figma", "Railway", "ngrok / Cloudflare"],
  },
  {
    category: "Research & analytical",
    items: [
      "Mathematical modeling",
      "Similarity & distance models",
      "Data analysis",
      "Algorithms",
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