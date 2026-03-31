import Image from "next/image";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col sm:flex-row gap-4 p-4 -mx-4 rounded-lg hover:bg-secondary/50 transition-colors">
      <div className="relative w-full sm:w-40 h-32 sm:h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">
            {project.title}
          </h3>
          {project.status === "Live" ? (
            <span className="px-1.5 py-0.5 text-xs bg-green-500/10 text-green-600 dark:text-green-400 rounded">
              Live
            </span>
          ) : (
            <span className="px-1.5 py-0.5 text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded">
              Dev
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary rounded"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        {project.status === "Live" && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View project
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
