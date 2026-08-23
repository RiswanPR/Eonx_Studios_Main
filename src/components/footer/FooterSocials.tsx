import { footerContent } from "@/content/footer/footer";

export function FooterSocials() {
  const activeSocials = footerContent.socials.filter(
    (social) => social.href && social.href.trim().length > 0,
  );

  if (activeSocials.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
        Connect
      </p>

      <ul className="mt-5 space-y-3">
        {activeSocials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-[var(--foreground-muted)] transition-colors duration-[var(--duration-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
            >
              {social.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
