"use client";

interface DesktopMenuProps {
  navLinks: { label: string; href: string }[];
  onClose: () => void;
}

export default function DesktopMenu({ navLinks, onClose }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="text-[13px] text-muted hover:text-text transition-colors font-medium"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
