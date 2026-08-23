import Image from "next/image";
import Link from "next/link";

export function NavigationLogo() {
  return (
    <Link
      href="/"
      aria-label="Eonx home"
      className="relative z-50 inline-flex shrink-0 items-center"
    >
      <Image
        src="/images/eonx-logo.png"
        alt="Eonx"
        width={120}
        height={40}
        priority
        className="h-auto w-[88px] md:w-[104px]"
      />
    </Link>
  );
}
