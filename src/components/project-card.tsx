import Image from "next/image";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group relative rounded-2xl border-2 border-border/50 overflow-hidden bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
      data-reveal
    >
      <div className="aspect-video overflow-hidden relative bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span
            className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
              project.status === "Live"
                ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary/60 text-foreground/80 border border-border/30 hover:border-primary/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.status === "Live" && <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group/link"
        >
          View Project
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>} 
        
        
      </div>
    </div>
  );
}
