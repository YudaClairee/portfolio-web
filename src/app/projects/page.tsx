"use strict";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-background via-background to-background/95">
      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 shadow-sm">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Djibyuda
          </a>
          <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:scale-105"
          >
            Back to Home
          </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            A complete collection of my work, side projects, and experiments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </main>

       {/* Footer */}
       <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Djibrani Yuda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
