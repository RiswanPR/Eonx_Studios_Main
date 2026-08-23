import Image from "next/image";
import Link from "next/link";
import { footerContent } from "@/content/footer/footer";

export function FooterBrand() {
  return (
    <div className="max-w-xl">
      <Link href="/" aria-label="Eonx home" className="inline-flex">
        <Image
          src="/images/eonx-logo.png"
          alt="Eonx"
          width={140}
          height={48}
          className="h-auto w-[110px]"
        />
      </Link>

      <p className="mt-8 max-w-md font-[var(--font-display)] text-3xl leading-[0.95] tracking-[-0.03em] md:text-4xl lg:text-5xl">
        {footerContent.statement}
      </p>
    </div>
  );
}
