"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const experience = [
    {
      role: "Mentor of Hacker Club UPI | Web Division",
      company: "Curious Club UPI",
      period: "Oct 2024 — Present",
      description:
        "Teaching 20+ students HTML, CSS, and web development fundamentals. Mentored teams to build their own websites.",
    },
    {
      role: "Mentor of Hacker Club UPI | IoT Division",
      company: "Curious Club UPI",
      period: "Apr 2025 — May 2025",
      description:
        "Teaching Arduino and ESP32 to students. Mentored teams to build IoT projects.",
    },
    {
      role: "Volunteer Staff of PLD TIK",
      company: "Curious Academy",
      period: "Jul 2024 — Sep 2024",
      description:
        "Teaching WordPress basics to 30 highschool students. Mentored 6 teams to build websites.",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Git",
  ];

  return (
    <div className="min-h-dvh bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="font-semibold text-foreground hover:opacity-70 transition-opacity"
          >
            djibyuda
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-border">
              <Image
                src="/fotoyuda.JPG"
                alt="Djibrani Yuda"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Hi, I&apos;m</p>
              <h1 className="text-2xl md:text-3xl font-bold">Djibrani Yuda</h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            A{" "}
            <span className="text-foreground font-medium">
              fullstack developer
            </span>{" "}
            passionate about building web applications with modern technologies.
            Currently focused on React, Next.js, and creating tools that help
            people.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <a
              href="/cvyuda.pdf"
              className="px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Resume
            </a>
          </div>
          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://github.com/YudaClairee"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/djibraniyuda"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:djibyuda@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 border-t border-border">
          <h2 className="text-xl font-semibold mb-6">About</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Computer Science student at Universitas Pendidikan
              Indonesia, passionate about building web and mobile applications.
              I love turning ideas into reality through code.
            </p>
            <p>
              When I&apos;m not coding, I enjoy mentoring students, exploring
              new technologies, and contributing to open-source projects. I
              believe in writing clean, maintainable code that solves real
              problems.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 border-t border-border">
          <h2 className="text-xl font-semibold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h3 className="font-medium text-foreground">{item.role}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.company}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 border-t border-border">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-6">
            {projects.slice(0, 4).map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 border-t border-border">
          <h2 className="text-xl font-semibold mb-6">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 border-t border-border">
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to chat, feel free to reach out!
          </p>
          <a
            href="mailto:djibyuda@gmail.com"
            className="inline-flex px-5 py-2.5 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            djibyuda@gmail.com
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Djibrani Yuda
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/YudaClairee"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/djibraniyuda"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:djibyuda@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
