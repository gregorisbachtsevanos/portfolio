import { useCallback, useEffect } from 'react';

const useSmoothScroll = () => {
  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();
    const href = e.currentTarget.href;
    if (!href) return;

    const targetId = href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const handleClick = (e: any): void => {
      const isAnchorLink =
        (e.target as HTMLElement).tagName.toLowerCase() === 'a' &&
        (e.target as HTMLAnchorElement).href.includes('#');
      if (isAnchorLink) {
        handleScroll(e);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleScroll]);

  return handleScroll;
};

export default useSmoothScroll;
