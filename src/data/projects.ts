export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  status: string;
};

export const projects: Project[] = [
  {
    title: "Nabung.AI",
    description:
      "An AI Powered Business Intelligence platform for data-driven decision making.",
    tech: ["Next.js", "Golang", "Gin", "Groq", "Tailwind", "Shadcn"],
    image: "/nabungai.png",
    link: "https://nabungai.uk",
    status: "Live",
  },
  {
    title: "PitchIQ",
    description:
      "AI Powered Pitchdeck analyzer for startups to optimize their pitchdeck.",
    tech: [
      "Next.js",
      "OpenAI",
      "trigger.dev",
      "R2 Cloudflare",
      "Tailwind",
      "Shadcn",
    ],
    image: "/pitchiq.png",
    link: "https://pitchiq-rosy.vercel.app/",
    status: "Live",
  },
  {
    title: "WallyAI",
    description:
      "AI Powered expense tracker with AI assistant to help you manage your expenses and save money.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Postgres", "OpenRouter"],
    image: "/wallyai.png",
    link: "https://wallyai-app.netlify.app",
    status: "Live",
  },
  {
    title: "Shortly",
    description: "Web app that provide a service to shorten links.",
    tech: ["React.js", "Supabase", "Tailwind", "React Router"],
    image: "/shortlyproject.png",
    link: "https://shortlyid.netlify.app",
    status: "Live",
  },
  {
    title: "LokaGen",
    description: "AI-powered web app to generate contents for MSMEs.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Shadcn"],
    image: "/lokagen.png",
    link: "https://lokagen.netlify.app",
    status: "Live",
  },
  {
    title: "LatihAI",
    description: "AI-powered web app to do mock interview for job seekers.",
    tech: ["Next.js", "OpenAI", "Drizzle", "Tailwind", "PostgreSQL"],
    image: "/latihai.png",
    link: "https://latihai.netlify.app",
    status: "Development",
  },
  {
    title: "Belajar-kids",
    description: "AI-powered web app for smart study planner.",
    tech: ["Next.js", "OpenRouter", "Prisma", "Tailwind", "PostgreSQL"],
    image: "/latihai.png",
    link: "https://belajarkids.netlify.app",
    status: "Live",
  },
];
