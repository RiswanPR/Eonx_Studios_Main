import { EonxLogo } from "@/components/brand/EonxLogo";
import { footerContent } from "@/content/footer/footer";

export function FooterBrand() {
  return (
    <div className="max-w-xl">
      <EonxLogo size="lg" />

      <p className="mt-8 max-w-md font-[var(--font-display)] text-3xl leading-[0.95] tracking-[-0.03em] md:text-4xl lg:text-5xl">
        {footerContent.statement}
      </p>
    </div>
  );
}
