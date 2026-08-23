import { FooterBrand } from "@/components/footer/FooterBrand";
import { FooterContact } from "@/components/footer/FooterContact";
import { FooterLegal } from "@/components/footer/FooterLegal";
import { FooterNavigation } from "@/components/footer/FooterNavigation";
import { FooterServices } from "@/components/footer/FooterServices";
import { FooterSocials } from "@/components/footer/FooterSocials";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)]">
      {/* Top Footer CTA */}
      <div className="border-b border-[var(--color-border-subtle)] py-16 lg:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
                Next Step
              </span>
              <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-[0.92] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                HAVE A PROJECT?<br />LET&apos;S TALK.
              </h2>
            </div>

            <ButtonLink
              href="/book-a-call"
              size="lg"
              className="min-w-44"
              data-analytics="footer-cta"
            >
              Book a Call →
            </ButtonLink>
          </div>
        </Container>
      </div>

      {/* Main Footer Links & Info */}
      <div className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <FooterBrand />
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-4">
              <FooterNavigation />
              <FooterServices />
              <FooterContact />
              <FooterSocials />
            </div>
          </div>

          <div className="mt-16">
            <FooterLegal />
          </div>
        </Container>
      </div>
    </footer>
  );
}
