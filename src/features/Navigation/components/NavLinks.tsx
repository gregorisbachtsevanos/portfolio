import { memo } from "react";

export interface INavItem {
  id: string;
  label: string;
}

interface INavLinksProps {
  navItems: INavItem[];
  scrollToSection: (id: string) => void;
  mobile?: boolean;
}

const NavLinks = ({
  navItems,
  scrollToSection,
  mobile = false,
}: INavLinksProps) => {
  const baseClass = mobile
    ? "block w-full rounded-md px-3 py-3 text-left text-base text-muted-foreground transition-colors hover:bg-secondary/5 hover:text-foreground"
    : "text-muted-foreground hover:text-foreground transition-colors";

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => scrollToSection(item.id)}
          className={baseClass}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

NavLinks.displayName = "NavLinks";

export default memo(NavLinks);
