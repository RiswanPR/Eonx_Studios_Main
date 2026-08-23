import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";

interface HomeSocialProofProps {
  quote?: string;
  name?: string;
  role?: string;
  company?: string;
}

export function HomeSocialProof({
  quote,
  name,
  role,
  company,
}: HomeSocialProofProps) {
  if (!quote) {
    return null;
  }

  return (
    <Section id="proof" spacing="large">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <Label>07 / Social Proof</Label>

          <blockquote className="mt-10 font-[var(--font-display)] text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.04em]">
            “{quote}”
          </blockquote>

          {(name || role || company) && (
            <p className="mt-8 text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
              {[name, role, company].filter(Boolean).join(" / ")}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
