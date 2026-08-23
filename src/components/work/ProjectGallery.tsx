import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  if (!project.media || project.media.length === 0) {
    return null;
  }

  return (
    <Section
      id="gallery"
      spacing="large"
      className="bg-[var(--color-surface-01)]"
    >
      <Container>
        <div className="mb-12">
          <Label>07 / Gallery</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            VISUAL ARTIFACTS.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {project.media.map((item) => (
            <div
              key={item.src}
              className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)]"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[16/10] w-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[16/10] w-full object-cover"
                >
                  <track kind="captions" />
                </video>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
