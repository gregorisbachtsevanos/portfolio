import { useEffect, useState } from "react";

export function usePageEdges(offset = 5) {
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setIsTop(scrollY <= offset);

      setIsBottom(scrollY + viewportHeight >= fullHeight - offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { isTop, isBottom };
}
