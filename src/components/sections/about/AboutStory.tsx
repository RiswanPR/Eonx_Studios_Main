import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about/about";

export function AboutStory() {
  return (
    <Section id="story" spacing="large">
      <Container>
        <div className="mb-12">
          <Label>01 / Our Story</Label>

          <h2 className="mt-6 max-w-[8ch] font-[var(--font-display)] text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]">
            FROM IDEA TO STUDIO.
          </h2>
        </div>

        <div className="flex flex-col">
          {aboutContent.story.map((chapter) => (
            <div
              key={chapter.year}
              className="grid gap-6 border-t border-[var(--color-border-subtle)] py-10 lg:grid-cols-12 lg:items-baseline"
            >
              <div className="lg:col-span-2">
                <span className="font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
                  {chapter.year}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-[var(--font-display)] text-3xl tracking-[-0.02em] md:text-4xl">
                  {chapter.title}
                </h3>
              </div>

              <div className="lg:col-span-6">
                <p className="text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
                  {chapter.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
