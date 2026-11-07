export type ExperienceItem = {
  year: string;
  title: string;
  type: "work" | "education";
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    year: "11.2026-present",
    title: "AI/ML Research Intern - Lund University, Sweden",
    type: "work",
    description:
      "Research project on conversational behaviour analysis: multi-label classification of behaviour patterns in transcripts with supporting quotes and confidence scores. Building a privacy-first, fully local Python pipeline (Whisper, pyannote, scikit-learn, LightGBM, Ollama / llama.cpp) evaluated against human annotators (F1, Cohen's kappa).",
  },
  {
    year: "03.2025-03.2026",
    title: "Full Stack Developer - GlobePerson & GlobePatient, HEdVC, Sweden",
    type: "work",
    description:
      "Designed and built all frontend screens of a cross-platform React Native app and connected them to two parallel backend services. Implemented authentication with 2FA, push notifications, multi-language support and file uploads to AWS S3; two apps shipped to TestFlight.",
  },
  {
    year: "2024-2025",
    title: "Master of Science in Computer Science",
    type: "education",
    description:
      "Kharkiv Polytechnic Institute, Ukraine. Specialization: Mathematical Modeling and Intelligent Computing in Engineering. Thesis on data-driven similarity modeling.",
  },
  {
    year: "10.2024-07.2025",
    title: "Accelerator Program Winner and App Development - Walkey",
    type: "work",
    description:
      "Won an accelerator by building Walkey end to end, from concept to a deployed product. Owned system architecture and the matching algorithm, collaborating with the team on product and UX.",
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
