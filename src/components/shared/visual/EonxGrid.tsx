export function EonxGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[var(--z-base)] opacity-[var(--grid-opacity)]"
      style={{
        backgroundImage: `
          linear-gradient(
            45deg,
            var(--grid-line) 1px,
            transparent 1px
          ),
          linear-gradient(
            -45deg,
            rgba(255,255,255,0.018) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "var(--grid-size) var(--grid-size)",
      }}
    />
  );
}
