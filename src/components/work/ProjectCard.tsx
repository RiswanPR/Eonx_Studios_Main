import Link from "next/link";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils/cn";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      data-project={project.slug}
      className={cn("group", project.featured && "md:col-span-2")}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block focus-visible:outline-none"
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-[var(--radius-xl)]",
            "border border-[var(--color-border-subtle)]",
            "bg-[var(--color-surface-01)]",
            "focus-within:border-[var(--color-border-strong)]",
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden",
              project.featured ? "aspect-[16/9]" : "aspect-[4/3]",
            )}
          >
            {project.media && project.media[0]?.type === "image" ? (
              <img
                src={project.media[0].src}
                alt={project.media[0].alt}
                className="h-full w-full object-cover transition-transform duration-[var(--duration-cinematic)] group-hover:scale-[1.03]"
              />
            ) : (
              <div
                aria-hidden="true"
                className="h-full w-full bg-[radial-gradient(circle_at_60%_35%,rgba(73,40,194,0.34),transparent_38%),linear-gradient(135deg,#090a10,#10111a)] transition-transform duration-[var(--duration-cinematic)] group-hover:scale-[1.03]"
              />
            )}

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            />

            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6">
              <div>
                <h2 className="font-[var(--font-display)] text-3xl tracking-[-0.03em] md:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/60">
                  {[project.client, project.industry, project.year]
                    .filter(Boolean)
                    .join(" / ")}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="shrink-0 rounded-full border border-white/20 px-4 py-2 text-xs text-white opacity-70 transition-all duration-[var(--duration-standard)] group-hover:translate-x-1 group-hover:border-white/40 group-hover:opacity-100"
              >
                View
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
