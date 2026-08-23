import type { TeamMember } from "@/types/team";
import { cn } from "@/lib/utils/cn";

interface TeamCardProps {
  member: TeamMember;
  onSelect?: (member: TeamMember) => void;
}

export function TeamCard({ member, onSelect }: TeamCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(member)}
      className={cn(
        "group flex flex-col text-left focus-visible:outline-none",
        "w-full cursor-pointer",
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-xl)]",
          "border border-[var(--color-border-subtle)] bg-[var(--color-surface-01)]",
          "transition-all duration-[var(--duration-standard)]",
          "group-hover:border-[var(--color-border-default)]",
          "group-focus-visible:border-[var(--color-periwinkle)]",
          "group-focus-visible:ring-2 group-focus-visible:ring-[var(--color-periwinkle)]",
        )}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            className="h-full w-full object-cover grayscale transition-all duration-[var(--duration-standard)] group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full bg-[radial-gradient(circle_at_50%_40%,rgba(73,40,194,0.32),transparent_50%),linear-gradient(135deg,#090a10,#10111a)] grayscale transition-all duration-[var(--duration-standard)] group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        />

        <div className="absolute inset-x-5 bottom-5">
          <h3 className="font-[var(--font-display)] text-2xl tracking-[-0.02em] text-white md:text-3xl">
            {member.name}
          </h3>

          <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-periwinkle)]">
            {member.role}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 text-[var(--foreground-muted)]">
        {member.shortBio}
      </p>
    </button>
  );
}
