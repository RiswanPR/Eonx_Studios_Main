import type { ProjectTestimonial as TestimonialType } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface ProjectTestimonialProps {
  testimonial?: TestimonialType;
}

export function ProjectTestimonial({ testimonial }: ProjectTestimonialProps) {
  if (!testimonial) {
    return null;
  }

  return (
    <Section id="testimonial" spacing="large">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Label>08 / Endorsement</Label>

          <blockquote className="mt-10 font-[var(--font-display)] text-[clamp(2rem,4.5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
            “{testimonial.quote}”
          </blockquote>

          <p className="mt-8 text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
            {[testimonial.name, testimonial.role, testimonial.company]
              .filter(Boolean)
              .join(" / ")}
          </p>
        </div>
      </Container>
    </Section>
  );
}
