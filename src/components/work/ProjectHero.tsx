import Image from "next/image";
import type { Project } from "@/types/project";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RevealText } from "@/components/shared/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <Section
      spacing="large"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(73,40,194,0.22),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(191,64,250,0.1),transparent_35%)]"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Work", href: "/work" },
              { name: project.title, href: `/work/${project.slug}` },
            ]}
          />

          <div className="mt-8">
            <Label>
              {[project.category.toUpperCase(), project.year]
                .filter(Boolean)
                .join(" / ")}
            </Label>
          </div>

          <RevealText>
            <h1 className="mt-6 font-[var(--font-display)] text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.05em]">
              {project.title.toUpperCase()}
            </h1>
          </RevealText>

          <Text size="lg" muted className="mt-8 max-w-2xl">
            {project.summary}
          </Text>
        </div>

        {/* Hero Media Container */}
        <div className="mt-12 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)]">
          <div className="relative aspect-[16/9] w-full">
            {project.media[0]?.type === "image" ? (
              <Image
                src={project.media[0].src}
                alt={project.media[0].alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="h-full w-full bg-[radial-gradient(circle_at_60%_35%,rgba(73,40,194,0.38),transparent_40%),linear-gradient(135deg,#090a10,#10111a)]"
              />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
