import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function SimpleFooter() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-eonx-black)] py-10">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
            © {new Date().getFullYear()} Eonx
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/cookies">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
