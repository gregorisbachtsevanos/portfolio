import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 20;

const useNavbarScrolled = (threshold = SCROLL_THRESHOLD) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScroll(); // sync on mount
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};

export default useNavbarScrolled;
