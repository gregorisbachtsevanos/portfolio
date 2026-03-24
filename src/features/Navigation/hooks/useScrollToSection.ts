import { useCallback } from "react";

interface IUseScrollToSectionOptions {
  onAfterScroll?: () => void;
}

const useScrollToSection = ({
  onAfterScroll,
}: IUseScrollToSectionOptions = {}) => {
  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);

      if (!element) return;

      element.scrollIntoView({ behavior: "smooth" });
      onAfterScroll?.();
    },
    [onAfterScroll],
  );

  return scrollToSection;
};

export default useScrollToSection;
