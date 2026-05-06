import { FC } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import ThemeToggleButton from "../ThemeToggleButton";

interface MobileNavControlsProps {
	isOpen: boolean;
	toggleMenu: () => void;
	toggleTheme: () => void;
}

const MobileNavControls: FC<MobileNavControlsProps> = ({
	isOpen,
	toggleMenu,
	toggleTheme,
}) => {
	return (
		<div className="md:hidden flex items-center gap-1.5">
			<LanguageSwitcher />
			<ThemeToggleButton
				onClick={toggleTheme}
				className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
			/>
			<button
				type="button"
				onClick={toggleMenu}
				className="text-muted-foreground hover:text-foreground"
				aria-label="Toggle navigation menu"
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>
		</div>
	);
};

export default MobileNavControls;
