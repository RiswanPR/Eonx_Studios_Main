"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { X } from "@/components/ui/icons/X";
import { cn } from "@/lib/utils/cn";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: ModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      <div
        className={cn(
          "relative z-10 w-full max-w-2xl",
          "rounded-[var(--radius-lg)]",
          "border border-[var(--color-border-default)]",
          "bg-[var(--color-surface-02)]",
          "p-6 shadow-[var(--shadow-lg)]",
          className,
        )}
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="type-heading-sm">
            {title}
          </h2>

          <IconButton
            label="Close dialog"
            onClick={onClose}
          >
            <X />
          </IconButton>
        </div>

        {children}
      </div>
    </div>
  );
}
