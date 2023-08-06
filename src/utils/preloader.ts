import anime from 'animejs';

let renderOutScheduled = false;

export const renderPreloaderOut = () => {
  // Debounce the function
  if (renderOutScheduled) return;
  renderOutScheduled = true;

  const preloaderContainer = document.querySelector('.preloader-container');

  // If the preloader container is not found, exit the function
  if (!preloaderContainer) {
    renderOutScheduled = false;
    return;
  }

  // Use requestAnimationFrame to schedule the animation
  const start = performance.now();
  const animate = (timestamp: number) => {
    const elapsed = timestamp - start;

    // Wait for 10800ms before starting the animation
    if (elapsed < 10000) {
      requestAnimationFrame(animate);
      return;
    }

    // Add the "renderOutPreloader" class to the preloader container
    preloaderContainer.classList.add('renderOutPreloader');

    // Enable scrolling
    document.body.style.overflowY = 'scroll';

    // Reset the flag
    renderOutScheduled = false;
  };

  requestAnimationFrame(animate);
};

let animationScheduled = false;
let cachedTargets: NodeListOf<Element> | null = null;

export const renderName = () => {
  // Debounce the function
  if (animationScheduled) return;
  animationScheduled = true;

  // Cache the anime targets if not already cached
  if (!cachedTargets) cachedTargets = document.querySelectorAll('.ml5 .word');

  // Use requestAnimationFrame to schedule the animation
  const start = performance.now();
  const animate = (timestamp: number) => {
    const elapsed = timestamp - start;

    // Wait for 7600ms before starting the animation
    if (elapsed < 7600) return requestAnimationFrame(animate);

    anime
      .timeline({
        loop: false,
      })
      .add({
        targets: cachedTargets,
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,
        delay: (el: any, i: number) => 800 * i,
      });

    // Reset the cache and flag
    cachedTargets = null;
    animationScheduled = false;
  };

  requestAnimationFrame(animate);
};
