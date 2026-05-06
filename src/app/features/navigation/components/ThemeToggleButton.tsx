import { Moon, Sun } from "lucide-react";

interface IThemeToggleButtonProps {
  onClick: () => void;
  className?: string;
}

const ThemeToggleButton = ({
  onClick,
  className = "",
}: IThemeToggleButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label="Toggle theme"
    >
      <Sun size={20} className="hidden dark:block" />
      <Moon size={20} className="block dark:hidden" />
    </button>
  );
};

export default ThemeToggleButton;
