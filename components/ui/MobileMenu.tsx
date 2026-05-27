"use client";

interface MobileMenuProps {
  navLinks: { label: string; href: string }[];
  onClose: () => void;
}

export default function MobileMenu({ navLinks, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-bg-alt border-t border-border px-6 py-4 flex flex-col gap-4">
      {navLinks.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="text-[14px] text-muted hover:text-text transition-colors"
          onClick={onClose}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
