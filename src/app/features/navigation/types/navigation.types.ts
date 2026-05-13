export interface INavItem {
  id: string;
  label: string;
}

export interface INavLinksProps {
  navItems: INavItem[];
  scrollToSection: (id: string) => void;
  mobile?: boolean;
}

export interface INavItemsProps {
  navItems: INavItem[];
  scrollToSection: (id: string) => void;
}

export interface NavControlsProps {
  isOpen: boolean;
  toggleMenu: () => void;
  toggleTheme: () => void;
}
