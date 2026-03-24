import React, { FC } from "react";
import NavLinks, { INavItem } from "./NavLinks";
import useI18n from "@/hooks/useI18n";

interface IMobileNavItemsProps {
  navItems: INavItem[];
  scrollToSection: (id: string) => void;
}

const MobileNavItems: FC<IMobileNavItemsProps> = ({
  navItems,
  scrollToSection,
}) => {
  const {
    messages: { navigation },
  } = useI18n();

  return (
    <div
      id="mobile-menu"
      className="md:hidden border-b border-foreground/10 bg-background/95 shadow-lg backdrop-blur-lg dark:bg-black/95"
    >
      <div className="space-y-1 px-4 pb-4 pt-2">
        <NavLinks
          navItems={navItems}
          scrollToSection={scrollToSection}
          mobile
        />
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="block w-full rounded-md px-3 py-3 text-left text-base text-blue-600 transition-colors hover:bg-secondary/5 hover:text-blue-700"
        >
          {navigation.contact}
        </button>
      </div>
    </div>
  );
};

export default MobileNavItems;
