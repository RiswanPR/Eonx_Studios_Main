import Link from "next/link";
import { TextLink } from "@/components/ui/TextLink";

interface ProjectCardProps {
  title: string;
  client?: string;
  year?: number;
  slug: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  client,
  year,
  slug,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className={featured ? "lg:col-span-2" : ""}>
      <Link href={`/work/${slug}`} className="group block">
        <div
          className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-surface-01)]"
          style={{
            aspectRatio: featured ? "16 / 9" : "4 / 3",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(73,40,194,0.32),transparent_35%),linear-gradient(135deg,#090a10,#10111a)] transition-transform duration-[var(--duration-cinematic)] group-hover:scale-[1.02]"
          />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <h3 className="font-[var(--font-display)] text-3xl tracking-[-0.03em] md:text-4xl">
                {title}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                {client ?? "Project"}
                {year ? ` / ${year}` : ""}
              </p>
            </div>

            <TextLink href={`/work/${slug}`} showArrow>
              View
            </TextLink>
          </div>
        </div>
      </Link>
    </article>
  );
}
