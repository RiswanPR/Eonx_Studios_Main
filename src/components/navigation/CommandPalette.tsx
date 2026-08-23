"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/content/services/services";
import { cn } from "@/lib/utils/cn";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Services";
  description?: string;
  href: string;
  shortcut?: string;
}

const baseCommands: CommandItem[] = [
  {
    id: "home",
    label: "Home",
    category: "Navigation",
    description: "Return to the Eonx homepage",
    href: "/",
  },
  {
    id: "about",
    label: "About Studio",
    category: "Navigation",
    description: "Learn about the philosophy, team, and craft",
    href: "/about",
  },
  {
    id: "services",
    label: "All Services",
    category: "Navigation",
    description: "Browse the 9 studio capabilities",
    href: "/services",
  },
  {
    id: "work",
    label: "Featured Work",
    category: "Navigation",
    description: "Selected client case studies and internal systems",
    href: "/work",
  },
  {
    id: "book-a-call",
    label: "Book a Call",
    category: "Navigation",
    description: "Start a project inquiry or consultation",
    href: "/book-a-call",
  },
];

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevOpen, setPrevOpen] = useState(open);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Reset query and selection during render when opened
  if (prevOpen !== open) {
    setPrevOpen(open);
    if (open) {
      setQuery("");
      setSelectedIndex(0);
    }
  }

  // Combine base commands with all service shortcuts
  const allCommands = useMemo(() => {
    const serviceCommands: CommandItem[] = services.map((s) => ({
      id: `service-${s.slug}`,
      label: s.name,
      category: "Services",
      description: s.shortDescription,
      href: `/services/${s.slug}`,
    }));
    return [...baseCommands, ...serviceCommands];
  }, []);

  // Filter commands by query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return allCommands;
    const q = query.toLowerCase().trim();
    return allCommands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        cmd.description?.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q),
    );
  }, [allCommands, query]);

  // Focus search input and lock body scroll when opened
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  // Handle keyboard navigation inside search
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1,
      );
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      const target = filteredCommands[selectedIndex];
      router.push(target.href);
      onClose();
    }
  };

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Center"
      className="fixed inset-0 z-[var(--z-command)] flex items-start justify-center px-4 pt-[12vh]"
    >
      {/* Backdrop */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close command center"
        onClick={onClose}
        className="fixed inset-0 bg-[rgba(4,6,7,0.75)] backdrop-blur-[var(--blur-glass-md)]"
      />

      {/* Palette Panel */}
      <div
        className={cn(
          "relative w-full max-w-xl overflow-hidden rounded-[24px] border border-[var(--color-border-strong)] bg-[var(--color-surface-01)] shadow-[var(--shadow-lg)]",
          "animate-[eonx-command-in_260ms_var(--ease-standard)_both]",
          "z-10",
        )}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[var(--color-border-subtle)] px-5 py-4">
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            ⌘
          </span>
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-results"
            placeholder="Type a command or search services..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded px-2 py-1 font-mono text-[10px] uppercase text-[var(--color-text-muted)] hover:text-white"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div
          id="command-results"
          role="listbox"
          className="max-h-[380px] overflow-y-auto p-2"
        >
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-xs text-[var(--color-text-muted)]">
                No matching commands found.
              </p>
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={cmd.id}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => handleSelect(cmd.href)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between rounded-[var(--radius-md)] px-4 py-3",
                    "transition-colors duration-[var(--duration-fast)]",
                    isSelected
                      ? "bg-[rgba(255,255,255,0.06)] text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[rgba(255,255,255,0.03)] hover:text-[var(--color-text-primary)]",
                  )}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">{cmd.label}</span>
                    {cmd.description && (
                      <span className="text-[11px] text-[var(--color-text-muted)]">
                        {cmd.description}
                      </span>
                    )}
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {cmd.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="flex items-center justify-between border-t border-[var(--color-border-subtle)] bg-[rgba(255,255,255,0.015)] px-5 py-2.5">
          <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
            ↑↓ to navigate • ↵ to select
          </span>
          <span className="font-mono text-[10px] text-[var(--color-text-muted)]">
            EONX / COMMAND
          </span>
        </div>
      </div>
    </div>
  );
}
