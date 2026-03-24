import { useEffect } from "react";

const DESKTOP_BREAKPOINT = 768;

const useCloseMobileMenuOnResize = (
  onClose: () => void,
  breakpoint = DESKTOP_BREAKPOINT,
) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose, breakpoint]);
};

export default useCloseMobileMenuOnResize;
