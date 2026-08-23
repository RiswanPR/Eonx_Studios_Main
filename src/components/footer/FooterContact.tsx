import { contactConfig } from "@/config/contact";

export function FooterContact() {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--foreground-muted)]">
        Contact
      </p>

      <div className="mt-5 space-y-3 text-sm text-[var(--foreground-muted)]">
        {contactConfig.email && (
          <div>
            <a
              href={`mailto:${contactConfig.email}`}
              className="transition-colors duration-[var(--duration-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
            >
              {contactConfig.email}
            </a>
          </div>
        )}

        {contactConfig.phone && (
          <div>
            <a
              href={`tel:${contactConfig.phone}`}
              className="transition-colors duration-[var(--duration-fast)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-periwinkle)]"
            >
              {contactConfig.phone}
            </a>
          </div>
        )}

        {contactConfig.location && (
          <p className="text-xs text-[var(--foreground-muted)]">
            {contactConfig.location}
          </p>
        )}
      </div>
    </div>
  );
}
