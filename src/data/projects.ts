export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  demoEmail?: string;
  demoPassword?: string;
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "styleguard",
    title: "StyleGuard",
    year: "2026",
    image: "/images/styleguard-1.png",
    description:
      "Brand consistency checks for AI image generation: a vision model scores every image against brand rules, with drift alerts in Slack.",
    longDescription:
      "StyleGuard generates images for a brand and checks that each one actually fits the brand rules. The API is built with Hono and TypeScript, backed by PostgreSQL on Neon through Prisma, with Zod validation on every input. Generation runs through a job queue in Postgres (FOR UPDATE SKIP LOCKED) with retries, timeouts, resumable stages and idempotency keys, so a failed step never produces a duplicate image. Images are made with FLUX models on Cloudflare Workers AI and stored in Cloudflare R2. Brands are versioned and immutable: editing a brand creates a new version, and old images keep pointing to the rules they were made with. Every image is scored by a vision model (Gemma 4 by default) that returns a score, a palette match and reasons; if the reply is invalid the check is marked unavailable instead of guessing a score. To choose the judge I hand-labelled 42 images and compared two models: Gemma 4 agreed with my labels 93% of the time and caught every off-brand image, Llama 4 Scout reached 79%. A GitHub Action reruns this eval on every pull request and posts the results as a comment. A rolling average of scores per brand and model detects quality drift and sends one Slack message when it drops below the threshold and one when it recovers. The UI was built with Lovable, the API runs on Render with a daily generation cap and a per-IP rate limit. The API is on a free instance, so the first load can take up to a minute.",
    demoUrl: "https://styleguardtest.lovable.app",
    videoUrl:
      "https://drive.google.com/file/d/1B8spUQTbxHIUA6xlgq5wSKP4RpIQhCd1/view?usp=sharing",
    tags: [
      "TypeScript",
      "Hono",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Cloudflare R2",
      "Workers AI",
      "Vision LLM",
      "GitHub Actions",
    ],
  },
  {
    slug: "applytrack",
    title: "ApplyTrack",
    year: "2026-present",
    image: "/images/applytrack-3.png",
    description:
      "Job application tracker with a kanban board, a job-search feed across multiple APIs, and automated email digests.",
    longDescription:
      "ApplyTrack is a job search tracker built with Next.js 16 (App Router) and TypeScript in strict mode, backed by PostgreSQL on Neon through Prisma (7 models, with composite unique keys used for deduplication). Authentication is a custom email and password flow with bcrypt-hashed passwords and cookie-based sessions, protected by route-level middleware. The tracker covers full CRUD for job applications, a kanban board with drag-and-drop status changes via dnd-kit, and a timeline of events per application. A search feed pulls listings from Remotive and Arbeitnow through a shared JobSource adapter interface, deduplicates results, and lets you dismiss a listing or add it straight to the tracker. Saved search criteria trigger a Resend email digest through a token-protected cron route. The dashboard shows response-rate metrics and a weekly applications chart built with Recharts. The project has 8 Vitest unit tests covering validation and deduplication logic, plus a GitHub Actions CI pipeline that runs lint and tests on every push. The app is deployed on Vercel; a scheduled cron trigger for the email digest is still the next step.",
    demoUrl: "https://applytrack-sooty.vercel.app",
    demoEmail: "demo@applytrack.dev",
    demoPassword: "demo1234",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Tailwind CSS",
      "dnd-kit",
      "Recharts",
      "Vitest",
    ],
  },
  /*
  {
    slug: "ml-emotion-recognition",
    title: "ML emotion recognition",
    year: "2025-present",
    description:
      "Classifying emotional states in dogs from image data, research project.",
    longDescription:
      "An ongoing machine learning project focused on classifying emotional states in dogs from visual data. The work involves feature extraction from images used as proxies for latent affective states, with a focus on indirect inference of internal biological processes.",
    tags: ["Python", "Machine learning"],
  },
  */
  {
    slug: "globeperson-globepatient",
    title: "GlobePerson & GlobePatient",
    image: "/images/globanimal-4.png",
    year: "2025-2026",
    description:
      "Cross-platform app for a Swedish healthtech company, dual backend, shipped to TestFlight.",
    longDescription:
      "Built as part of the development team at HEdVC, a Swedish company. I worked on the React Native frontend and built the Node.js and Express backend, then integrated it with a second backend built in Spring Boot and Tomcat by another team member. Data is stored in the cloud on AWS. For local testing on Expo Go, the team used ngrok and Cloudflare tunnels. The app reached TestFlight.",
    tags: [
      "JavaScript / TypeScript",
      "React Native",
      "Zustand",
      "Node.js",
      "Spring Boot",
      "AWS",
      "HeidiSQL",
    ],
  },
  {
    slug: "walkey",
    title: "Walkey",
    year: "2024",
    image: "/images/walkey-1.png",
    description:
      "Hackathon-winning app with real-time geolocation matching, deployed on Railway.",
    longDescription:
      "Walkey started as a hackathon project and won the competition, then grew into a full cross-platform mobile app built with React Native and Expo. It uses the Google Maps API for real-time geolocation, Clerk for authentication, and AWS S3 for image storage. The backend runs on Node.js and Express with a PostgreSQL database hosted on Neon, and Nodemailer handles email notifications. The app is deployed on Railway.",
    tags: [
      "JavaScript / TypeScript",
      "React Native",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "AWS S3",
      "Railway",
    ],
    videoUrl: "https://drive.google.com/file/d/11kTNHdm2LO-rUMVOVqLbu3sE0FfOIDei/view?usp=sharing",
  },
];
