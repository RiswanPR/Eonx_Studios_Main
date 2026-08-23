"use client";

import type { TeamMember } from "@/types/team";
import { Modal } from "@/components/ui/Modal";

interface TeamMemberModalProps {
  member: TeamMember | null;
  open: boolean;
  onClose: () => void;
}

export function TeamMemberModal({
  member,
  open,
  onClose,
}: TeamMemberModalProps) {
  if (!member) {
    return null;
  }

  return (
    <Modal open={open} onClose={onClose} title={member.name}>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-periwinkle)]">
          {member.role}
        </p>

        <p className="mt-4 text-base leading-7 text-[var(--foreground-muted)] md:text-lg">
          {member.bio ?? member.shortBio}
        </p>

        {member.capabilities && member.capabilities.length > 0 && (
          <div className="mt-6 border-t border-[var(--color-border-subtle)] pt-6">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
              Capabilities
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {member.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="rounded-full border border-[var(--color-border-default)] bg-[var(--color-eonx-black)] px-3 py-1 text-xs text-[var(--foreground-default)]"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        )}

        {member.socialLinks && member.socialLinks.length > 0 && (
          <div className="mt-6 flex gap-4 border-t border-[var(--color-border-subtle)] pt-6">
            {member.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.12em] text-[var(--color-periwinkle)] hover:underline"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
