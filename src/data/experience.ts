export type ExperienceItem = {
  year: string;
  title: string;
  type: "work" | "education";
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    year: "03.2025-03.2026",
    title: "GlobePerson & GlobePatient - HEdVC, Sweden",
    type: "work",
    description:
      "Frontend on React Native, backend on Node.js, REST API integration.",
  },
  {
    year: "2024-2025",
    title: "Master of Science in Computer Science",
    type: "education",
    description:
      "Kharkiv Polytechnic Institute, Ukraine. Thesis on data-driven similarity modeling.",
  },
  {
    year: "2024-2025",
    title: "Hackathon winner and app development",
    type: "work",
    description:
      "Built the winning app (Walkey) end-to-end, collaborating on product and UX.",
  },
  {
    year: "2023-2024",
    title: "Full stack developer course - Mate Academy",
    type: "education",
    description: "Main stack: HTML, CSS, JavaScript, React Native.",
  },
  {
    year: "2021",
    title: "Intern - Ligh IT",
    type: "work",
    description: "Responsive layouts, bug fixes, technical documentation.",
  },
  {
    year: "2020-2024",
    title: "Bachelor's degree in Software Development",
    type: "education",
    description: "Zaporizhzhya National University, Ukraine.",
  },
];